<!-- id: 'OR020601', -->
<!-- component: () => import('@/views/s_or/apmt-disease.vue'), -->
<!-- 약속상병관리 -->
<template>
  <!-- modalSearch S -->
  <BaseModal
    v-if="modal.modalSearchType"
    title="상병조회"
    @close-event="closeModalSearch"
  >
    <BaseCard
      title=""
      :is-inner-tab="true"
      :tab-datas="modalSearchTabDatas"
      style="margin-bottom: 10px"
      @current-index="setModalSearchTab"
    >
      <div v-if="isTabType" class="optionBox" style="margin: 10px 0">
        <div class="select-group" style="margin: 0 20px">
          <span style="margin-left: 10px">{{
            returnLanguageValue('MB_1')
          }}</span>
          <BaseInput
            v-model="modalSearchFilters.search_text"
            @keydown.enter="modalSearchTotalTabSearchData"
          />

          <span>{{ returnLanguageValue('MB_2') }}</span>
          <BaseInput />
          <BaseButton
            size="sm"
            @click="
              (detailList = TableClass.setAddRow({
                columnList: detailColList,
                rowList: detailList,
              })),
                pushDetails()
            "
            >{{ returnLanguageValue('MB_3') }}</BaseButton
          >
          <div class="popup-total" style="margin-top: 10px">
            <BaseCard title="" :has-footer="true">
              <BaseTable
                ref="modalSearchTotalTableRef"
                v-model:colList="modalSearchTotalColList"
                v-model:rowList="modalSearchTotalList"
                :index-flag="true"
                :check-flag="false"
                :click-row-flag="true"
                :double-click-row-flag="true"
                @double-click-row="
                  (detailList = TableClass.setAddRow({
                    columnList: detailColList,
                    rowList: detailList,
                  })),
                    pushDetails()
                "
                @click-row="findDiagnosisRow"
              />
              <template #card-footer>
                <span class="text-primary3"
                  >The total number of cases. :
                  {{
                    modalSearchTotalList ? modalSearchTotalList.length : ''
                  }}</span
                >
              </template>
            </BaseCard>
          </div>
        </div>
      </div>

      <div v-if="isTabType === false" class="optionBox" style="margin: 10px 0">
        <div class="select-group">
          <span style="margin-left: 10px">{{
            returnLanguageValue('MB_2')
          }}</span>
          <BaseInput />
          <BaseButton
            size="sm"
            @click="
              (detailList = TableClass.setAddRow({
                columnList: detailColList,
                rowList: detailList,
              })),
                pushDetails()
            "
            >{{ returnLanguageValue('MB_3') }}</BaseButton
          >
        </div>
        <div class="popup-cell">
          <article class="popup-grid1">
            <BaseCard title="" :has-footer="true">
              <BaseTable
                ref="modalSearchTopTableRef"
                v-model:col-list="modalSearchTopColList"
                v-model:row-list="modalSearchTopList"
                class=""
                :index-flag="true"
                :check-flag="false"
                :click-row-flag="true"
                :double-click-row-flag="true"
                @click-row="onPrintModalSearchMiddleAndDiagnosis"
              />
              <template #card-footer>
                <span class="text-primary3"
                  >The total number of cases. :
                  {{
                    modalSearchTopList ? modalSearchTopList.length : ''
                  }}</span
                >
              </template>
            </BaseCard>
          </article>
          <article class="popup-grid2">
            <BaseCard title="" :has-footer="true">
              <BaseTable
                ref="modalSearchMiddleTableRef"
                v-model:col-list="modalSearchMiddleColList"
                v-model:row-list="modalSearchMiddleList"
                class=""
                :index-flag="true"
                :check-flag="false"
                :click-row-flag="true"
                :double-click-row-flag="true"
                @click-row="onPrintModalSearchDiagnosis"
              />
              <template #card-footer>
                <span class="text-primary3"
                  >The total number of cases. :
                  {{
                    modalSearchMiddleList ? modalSearchMiddleList.length : ''
                  }}</span
                >
              </template>
            </BaseCard>
          </article>
          <article class="popup-grid3">
            <BaseCard title="" :has-footer="true">
              <BaseTable
                ref="modalSearchDiagnosisTableRef"
                v-model:col-list="modalSearchDiagnosisColList"
                v-model:row-list="modalSearchDiagnosisList"
                class=""
                :index-flag="true"
                :check-flag="false"
                :double-click-row-flag="true"
                :click-row-flag="true"
                @double-click-row="
                  (detailList = TableClass.setAddRow({
                    columnList: detailColList,
                    rowList: detailList,
                  })),
                    pushDetails()
                "
                @click-row="findDiagnosisRow"
              />
              <template #card-footer>
                <span class="text-primary3"
                  >The total number of cases. :
                  {{
                    modalSearchMiddleList ? modalSearchMiddleList.length : ''
                  }}</span
                >
              </template>
            </BaseCard>
          </article>
        </div>
      </div>
    </BaseCard>
  </BaseModal>
  <!-- modalSearch E -->

  <!-- modalCopy S -->
  <BaseModal
    v-if="modal.modalCopyType"
    title="약속상병 복사"
    @close-event="closeModalCopy"
  >
    <main class="cell-L2-R1" style="position: relative">
      <div class="optionBox" style="width: 100%">
        <div class="check-wrap radio-group" style="margin: 20px 0">
          <RadioButton
            id="modalCopyCommonRadioButton"
            v-model:modelValue="modalCopyFilters.prst_dvcd"
            name="modalCopyRadioButton"
            :value="modalCopyFilters.prst_dvcd"
            :label="returnLanguageValue('CBR_1')"
            :is-checked="modalCopyFilters.prst_dvcd === 'A' ? true : false"
            @click="handleModalCopyCommonBtn"
          />
          <RadioButton
            id="modalCopyDepartmentRadioButton"
            v-model:modelValue="modalCopyFilters.prst_dvcd"
            name="modalCopyRadioButton"
            :value="modalCopyFilters.prst_dvcd"
            :label="returnLanguageValue('CBR_2')"
            :is-checked="modalCopyFilters.prst_dvcd === 'D' ? true : false"
            @click="handleModalCopyDepartmentBtn"
          />
          <RadioButton
            id="modalCopyUserRadioButton"
            v-model:modelValue="modalCopyFilters.prst_dvcd"
            name="modalCopyRadioButton"
            :value="modalCopyFilters.prst_dvcd"
            :label="returnLanguageValue('CBR_3')"
            :is-checked="modalCopyFilters.prst_dvcd === 'U' ? true : false"
            @click="handleModalCopyUserBtn"
          />
          <template v-if="modalCopyFilters.prst_dvcd === 'D' ? true : false">
            <BaseDropdown
              style="width: 160px"
              :data-list="testDropDownList"
              :default-value="'화상외과'"
              @dropdown-event=""
            />
          </template>
          <template v-if="modalCopyFilters.prst_dvcd === 'U' ? true : false">
            <span style="width: 40px">이름</span>
            <BaseInput
              v-model:modelValue="printedModalCopyDepartmentCode"
              style="width: 120px"
              disabled
            />
            <BaseInput
              v-model:modelValue="modalCopyFilters.user_nm"
              @input-enter="modalCopySearchUserName"
            />
          </template>
          <BaseButton
            size="sm"
            style="width: 46px; position: absolute; right: 96px"
            @click="handleModalCopyChoiceBtn"
            >{{ returnLanguageValue('MB_3') }}</BaseButton
          >
          <BaseButton
            size="sm"
            style="width: 46px; position: absolute; right: 32px"
            @click="closeModalCopy"
            >{{ returnCommonLanguageValue('닫기') }}</BaseButton
          >
        </div>
      </div>

      <article class="grid2" style="height: 360px">
        <BaseCard title="상위 약속상병" :has-footer="true">
          <BaseTable
            ref="modalCopyMainTableRef"
            v-model:colList="modalCopyMainColList"
            v-model:rowList="modalCopyMainList"
            :index-flag="false"
            :click-row-flag="true"
            :double-click-row-flag="true"
            @click-row="onPrintModalCopyMiddleAndDetail"
            @click="testFunction1"
          />
          <!-- :handle-click-row-selected="false" -->
          <template #card-footer>
            <span class="text-primary3"
              >The total number of cases. :
              {{ modalCopyMainList ? modalCopyMainList.length : '' }}</span
            >
          </template>
        </BaseCard>
      </article>

      <article
        class="grid3"
        style="position: absolute; top: -40px; height: 282px"
      >
        <BaseCard title="하위 약속상병" :has-footer="true">
          <BaseTable
            ref="modalCopyMiddleTableRef"
            v-model:colList="modalCopyMiddleColList"
            v-model:rowList="modalCopyMiddleList"
            :index-flag="false"
            :click-row-flag="true"
            :double-click-row-flag="true"
            @click-row="onPrintModalCopyDetail"
            @click.stop="receiveCheckSelectedFromMiddle(), testFunction2()"
          />

          <template #card-footer>
            <span class="text-primary3"
              >The total number of cases. :
              {{ modalCopyMiddleList ? modalCopyMiddleList.length : '' }}</span
            >
          </template>
        </BaseCard>
      </article>

      <article class="grid4" style="height: 643px">
        <BaseCard title="상병리스트" :has-footer="true">
          <BaseTable
            ref="modalCopyDetailTableRef"
            v-model:colList="modalCopyDetailColList"
            v-model:rowList="modalCopyDetailList"
            :index-flag="false"
            :click-row-flag="true"
            :double-click-row-flag="true"
            @click="receiveCheckSelectedFromDetail(), testFunction3()"
          />
          <template #card-footer>
            <span class="text-primary3"
              >The total number of cases. :
              {{ modalCopyDetailList ? modalCopyDetailList.length : '' }}</span
            >
          </template>
        </BaseCard>
      </article>
    </main>
  </BaseModal>
  <!-- modalCopy E -->

  <!-- main S -->
  <main class="cell-L2-R1">
    <!-- gird1 S -->
    <article class="grid1">
      <div class="optionBox">
        <!-- <div class="check-wrap radio-group"> -->
        <RadioButton
          id="commonRadioButton"
          v-model:modelValue="filters.prst_dvcd"
          :value="filters.prst_dvcd"
          name="RadioButton"
          :label="returnLanguageValue('CBR_1')"
          :is-checked="filters.prst_dvcd === 'A' ? true : false"
          @click="handleCommonBtn"
        />
        <!-- :checked="(filters.prst_dvcd = 'A' ? true : false)" -->
        <RadioButton
          id="DepartmentRadioButton"
          v-model:modelValue="filters.prst_dvcd"
          :value="filters.prst_dvcd"
          name="RadioButton"
          :label="returnLanguageValue('CBR_2')"
          :is-checked="filters.prst_dvcd === 'D' ? true : false"
          @click="handleDepartmentBtn"
        />
        <!-- :checked="(filters.prst_dvcd = 'D' ? true : false)" -->
        <RadioButton
          id="userRadioButton"
          v-model:modelValue="filters.prst_dvcd"
          :value="filters.prst_dvcd"
          name="RadioButton"
          :label="returnLanguageValue('CBR_3')"
          :is-checked="filters.prst_dvcd === 'U' ? true : false"
          @click="handleUserBtn"
        />
        <!-- :checked="(filters.prst_dvcd = 'U' ? true : false)" -->
        <!-- </div> -->
        <div class="select-group">
          <span>{{ returnLanguageValue('SG_1') }}</span>
          <BaseDropdown
            style="width: 160px"
            :data-list="department"
            :default-value="'화상외과'"
            @dropdown-event=""
          />
          <BaseDropdown
            style="width: 160px"
            :data-list="userInfo"
            :default-value="'Admin'"
            @dropdown-event=""
          />
          <!-- class="selected-option1" -->
          <BaseButton size="sm">{{
            returnCommonLanguageValue('search')
          }}</BaseButton>
          <BaseButton size="sm" @click="openModalSearch">{{
            returnLanguageValue('TB_2')
          }}</BaseButton>
          <BaseButton size="sm" @click="openModalCopy">{{
            returnLanguageValue('TB_3')
          }}</BaseButton>
          <BaseButton size="sm" @click="saveAllListsWithApiApi">{{
            returnCommonLanguageValue('save')
          }}</BaseButton>
        </div>
      </div>
    </article>
    <!-- gird1 E -->

    <!-- gird2 S -->
    <article class="grid2">
      <BaseCard title="" :has-footer="true">
        <template #card-header-right>
          <div class="btn-group-left">
            <BaseButton
              variant="badge"
              class="icon icon-up1"
              @click="moveTop"
            ></BaseButton>
            <BaseButton
              variant="badge"
              class="icon icon-up2"
              @click="movePrevious()"
            ></BaseButton>
            <BaseButton
              variant="badge"
              class="icon icon-down1"
              @click="moveBottom()"
            ></BaseButton>
            <BaseButton
              variant="badge"
              class="icon icon-down2"
              @click="moveNext()"
            ></BaseButton>
          </div>
          <div class="btn-group-right">
            <BaseButton
              variant="badge"
              background="primary"
              @click="
                mainList = TableClass.setAddRow({
                  columnList: mainColList,
                  rowList: mainList,
                })
              "
              >{{ returnLanguageValue('TB_1') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="saveMainListWithApi"
              >{{ returnCommonLanguageValue('save') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="() => (mainList = TableClass.setDeleteRow(mainList))"
              >{{ returnCommonLanguageValue('delete') }}</BaseButton
            >
          </div>
        </template>

        <!-- LT_T Main table S -->
        <BaseTable
          ref="mainTableRef"
          v-model:col-list="mainColList"
          v-model:row-list="mainList"
          :index-flag="false"
          :click-row-flag="true"
          @click-row="onPrintMiddleAndDetail"
          @click="resetListsAndRows"
        />
        <!-- LT_T Main table E -->

        <template #card-footer>
          <span class="text-primary3"
            >The total number of cases. :
            {{ mainList ? mainList.length : '' }}</span
          >
        </template>
      </BaseCard>
    </article>
    <!-- gird2 E -->

    <!-- gird3 S -->
    <article class="grid3">
      <BaseCard title="" :has-footer="true">
        <template #card-header-right>
          <div class="btn-group-left">
            <BaseButton
              variant="badge"
              class="icon icon-up1"
              @click="moveTop2()"
            ></BaseButton>
            <BaseButton variant="badge" class="icon icon-up2"></BaseButton>
            <BaseButton variant="badge" class="icon icon-down1"></BaseButton>
            <BaseButton variant="badge" class="icon icon-down2"></BaseButton>
          </div>
          <div class="btn-group-right">
            <BaseButton
              variant="badge"
              background="primary"
              @click="
                middleList = TableClass.setAddRow({
                  columnList: middleColList,
                  rowList: middleList,
                })
              "
              >{{ returnLanguageValue('TB_1') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="saveMiddleListWithApi"
              >{{ returnCommonLanguageValue('save') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="() => (middleList = TableClass.setDeleteRow(middleList))"
              >{{ returnCommonLanguageValue('delete') }}</BaseButton
            >
          </div>
        </template>

        <!-- LB Middle table S -->
        <BaseTable
          ref="middleTableRef"
          v-model:colList="middleColList"
          v-model:rowList="middleList"
          :index-flag="false"
          :click-row-flag="true"
          @click-row="onPrintDetail"
          @click="resetDetailList"
        />
        <!-- LB Middle table E -->

        <template #card-footer>
          <span class="text-primary3"
            >The total number of cases. :
            {{ middleList ? middleList.length : '' }}</span
          >
        </template>
      </BaseCard>
    </article>
    <!-- gird3 E -->

    <!-- gird4 S -->
    <article class="grid4">
      <BaseCard title="" :has-footer="true">
        <template #card-header-right>
          <div class="btn-group-left">
            <BaseButton variant="badge" class="icon icon-up1"></BaseButton>
            <BaseButton variant="badge" class="icon icon-up2"></BaseButton>
            <BaseButton variant="badge" class="icon icon-down1"></BaseButton>
            <BaseButton variant="badge" class="icon icon-down2"></BaseButton>
          </div>
          <div class="btn-group-right">
            <BaseButton
              variant="badge"
              background="primary"
              @click="
                () => {
                  (detailList = TableClass.setAddRow({
                    columnList: detailColList,
                    rowList: detailList,
                  })),
                    (isModalSearchCloseType = true);
                }
              "
              >{{ returnLanguageValue('TB_1') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="saveDetailListWithApi"
              >{{ returnCommonLanguageValue('save') }}</BaseButton
            >
            <BaseButton
              variant="badge"
              background="primary"
              @click="() => (detailList = TableClass.setDeleteRow(detailList))"
              >{{ returnCommonLanguageValue('delete') }}</BaseButton
            >
          </div>
        </template>

        <!-- RT Detail table S -->
        <BaseTable
          ref="detailTableRef"
          v-model:colList="detailColList"
          v-model:rowList="detailList"
          :index-flag="false"
          :click-row-flag="true"
          :double-click-row-flag="false"
          @click-row="findDetailRow"
          @input-enter="modalSearchFilterData(selectedDetailListRow)"
        />
        <!-- @focus-out="focusOut(selectedDetailListRow)" -->
        <!-- RT Detail table E -->

        <template #card-footer>
          <span class="text-primary3"
            >The total number of cases. :
            {{ detailList ? detailList.length : '' }}</span
          >
        </template>
      </BaseCard>
    </article>
    <!-- gird4 E -->
  </main>
  <!-- main E -->
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  defineExpose,
  onMounted,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';

/* Components */
import RadioButton from '@/components/RadioButtons/BaseRadioButton.vue';
import BaseDropdown from '@/components/DropDowns/BaseDropdown.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import BaseCard from '@/components/Cards/BaseCard.vue';
import BaseTable from '@/components/Tables/BaseTable.vue';
import BaseModal from '@/components/Modals/BaseModal.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';

/* Utils */
import {
  computedDate,
  setEdited,
  returnLanguageValue,
  returnCommonLanguageValue,
} from '@/utils/utils';
import { useLangData } from '@/components/Lang/useLangData';
import Table from '@/utils/table';

/* API */
import {
  getMainWithApi,
  getMiddleWithApi,
  getDetailWithApi,
  createPrstUniqNoWithApi,
  bulkMainAndMiddleListWithApi,
  bulkDetailListWithApi,
  getModalAllWithApi,
  getModalTopWithApi,
  getModalMiddleWithApi,
  getModalDiagnosisWithApi,
  getDropDownListWithApi,
} from '@/services/s_or/orAppointmentDiseaseMgtService';
import { getInfocodeDetail } from '@/services/s_pa/dropdown';

const langDataUse = useLangData();
const isDirty = computed(() => {
  return setEdited([detailList.value]);
});

/* *************** ModalSearchS *************** */

const modal = reactive({
  modalSearchType: false,
  modalCopyType: false,
});

const modalSearchTabDatas = ref([
  returnLanguageValue('M_1'),
  returnLanguageValue('M_2'),
]);

const isTabType = ref(true);

// ModalSearch colsConfigs
const modalSearchTotalColsConfigs = reactive({
  R_T1: {
    defaultType: 'baseInput',
    initData: '',
  },
  R_T3: {
    defaultType: 'baseInput',
    initData: '',
  },
});
const modalSearchTopColsConfigs = reactive({
  PLT_1: {
    defaultType: 'baseInput',
    initData: '',
  },
});
const modalSearchMiddleColsConfigs = reactive({
  PRT_1: {
    defaultType: 'baseInput',
    initData: '',
  },
});
const modalSearchDiagnosisColsConfigs = reactive({
  R_T1: {
    defaultType: 'baseInput',
    initData: '',
  },
  R_T3: {
    defaultType: 'baseInput',
    initData: '',
  },
});

// ModalSearch colList
const modalSearchTotalColList = computed(() =>
  TableClass.setColList(langData.value, modalSearchTotalColsConfigs),
);
const modalSearchTopColList = computed(() =>
  TableClass.setColList(langData.value, modalSearchTopColsConfigs),
);
const modalSearchMiddleColList = computed(() =>
  TableClass.setColList(langData.value, modalSearchMiddleColsConfigs),
);
const modalSearchDiagnosisColList = computed(() =>
  TableClass.setColList(langData.value, modalSearchDiagnosisColsConfigs),
);

// ModalSearch Table's list
const modalSearchTotalList = ref([]);
const modalSearchTopList = ref([]);
const modalSearchMiddleList = ref([]);
const modalSearchDiagnosisList = ref([]);

// ModalSearch Table's ref
const modalSearchTotalTableRef = ref(null);
const modalSearchTopTableRef = ref(null);
const modalSearchMiddleTableRef = ref(null);
const modalSearchDiagnosisTableRef = ref(null);

// ModalSearch selectedRow ref
const selectedModalSearchTopListRow = ref(null);
const selectedModalSearchMiddleListRow = ref(null);
const selectedModalSearchDiagnosisListRow = ref(null);

// ModalSearch filters
const modalSearchFilters = reactive({
  standard_date: computedDate(new Date()),
  search_text: null,
  ilns_cd: null,
  ilns_nm: null,
  dsse_cd_1: null,
  dsse_cd: null,
  dsse_clsf_cd: null,
  ilns_dvcd: null,
});

// ModalSearch DetailList input Event
const modalSearchFilterData = async (row) => {
  const loadFunc = async () => {
    try {
      modal.modalSearchType = true;
      modalSearchFilters.search_text = row.ilns_cd || row.ilns_nm;
      detailList.value.splice(0, 1);
      await modalSearchTotalTabSearchData();
      await getModalSearchTopList();
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalSearch Total Tab Filter Event
const modalSearchTotalTabSearchData = async () => {
  const loadFunc = async () => {
    try {
      const query = {
        standard_date: modalSearchFilters.standard_date,
        search_text: modalSearchFilters.search_text,
      };
      modalSearchTotalList.value = await getModalAllWithApi(query);
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalSearch Tab Event
const setModalSearchTab = (index) => {
  index === 0 ? (isTabType.value = true) : (isTabType.value = false);
};

// ModalSearch Open Event
const openModalSearch = async () => {
  try {
    modalSearchFilters.search_text = '';
    modal.modalSearchType = true;
    await getModalSearchTopList();
  } catch (error) {
    console.error(error);
  }
};

// ModalSearch Close Event
const closeModalSearch = () => {
  modal.modalSearchType = false;
  isTabType.value = true;
  isModalSearchCloseType.value = false;
  modalSearchTotalList.value = [];
  modalSearchTopList.value = [];
  modalSearchMiddleList.value = [];
  modalSearchDiagnosisList.value = [];
};

// ModalSearch TopList API Event
const getModalSearchTopList = async () => {
  try {
    modalSearchTopList.value = await getModalTopWithApi();
  } catch (error) {
    console.log(error);
  }
};

// ModalSearch MiddleList API Event
const onPrintModalSearchMiddleAndDiagnosis = async (row) => {
  const loadFunc = async () => {
    try {
      selectedModalSearchTopListRow.value = row;
      const row_dsse_cd_1 = row.dsse_cd_1;
      modalSearchFilters.dsse_cd = row_dsse_cd_1;
      const query = {
        dsse_cd: row_dsse_cd_1,
      };
      modalSearchMiddleList.value = await getModalMiddleWithApi(query);
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalSearch DiagnosisList API Event
const onPrintModalSearchDiagnosis = async (row) => {
  const loadFunc = async () => {
    try {
      selectedModalSearchMiddleListRow.value = row;
      const row_dsse_clsf_cd = row.dsse_clsf_cd;
      modalSearchFilters.dsse_clsf_cd = row_dsse_clsf_cd;
      const query = {
        standard_date: modalSearchFilters.standard_date,
        dsse_clsf_cd: row_dsse_clsf_cd,
      };
      modalSearchDiagnosisList.value = await getModalDiagnosisWithApi(query);
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalSearch DiagnosisList find Event
const findDiagnosisRow = (row) => {
  selectedModalSearchDiagnosisListRow.value = row;
};

const isModalSearchCloseType = ref(false);

// ModalSearch To push the DiagnosticList into the DetailList
const pushDetails = () => {
  const ilns_nm_diagnosis = ref(null);
  Object.keys(selectedModalSearchDiagnosisListRow.value).filter((item) => {
    if (item === 'ilns_nm') {
      selectedModalSearchDiagnosisListRow.value[item];
      ilns_nm_diagnosis.value = selectedModalSearchDiagnosisListRow.value[item];
    }
  });
  // console.log(ilns_nm_diagnosis.value, '&&');

  const ilns_nm_detail = ref(null);
  detailList.value.filter((item) => {
    if (ilns_nm_diagnosis.value === item.ilns_nm) {
      ilns_nm_detail.value = ilns_nm_diagnosis.value;
    }
  });
  // console.log(ilns_nm_detail.value, '**');

  const copiedSelectedModalSearchDiagnosisListRow = {
    ...selectedModalSearchDiagnosisListRow.value,
  };
  for (let index = 0; index < detailList.value.length; index++) {
    // if (!selectedMainListRow.value && !selectedMiddleListRow.value) {
    //   alert('Please, Choose the MainListRow or MiddleListRow');
    // } else
    if (ilns_nm_diagnosis.value === ilns_nm_detail.value) {
      alert(
        '저장하는 상병 값은 한 번에 2개 이상 중복된 값이 될 수 없습니다.\n상병코드 : 코드명\n상병명 : 상병명',
      );
      detailList.value.splice(selectedDetailListRow.value, 1);
      break;
    } else if (ilns_nm_diagnosis.value !== ilns_nm_detail.value) {
      detailList.value[0] = copiedSelectedModalSearchDiagnosisListRow;
      copiedSelectedModalSearchDiagnosisListRow.action = 'POST';
    }
  }

  isModalSearchCloseType.value ? closeModalSearch() : null;
};

/* *************** ModalCopyS *************** */

// ModalCopy colsConfigs
const modalCopyMainColsConfigs = reactive({
  LT_T1: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
  },
});
const modalCopyMiddleColsConfigs = reactive({
  LB_T1: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
  },
});
const modalCopyDetailColsConfigs = reactive({
  R_T1: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
  },
  R_T2: {
    defaultType: 'dropDown',
    readonly: true,
  },
  R_T3: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
  },
});

// ModalCopy colList
const modalCopyMainColList = computed(() =>
  TableClass.setColList(langData.value, modalCopyMainColsConfigs),
);
const modalCopyMiddleColList = computed(() =>
  TableClass.setColList(langData.value, modalCopyMiddleColsConfigs),
);
const modalCopyDetailColList = computed(() =>
  TableClass.setColList(langData.value, modalCopyDetailColsConfigs),
);

// ModalCopy Table's list
const modalCopyMainList = ref([]);
const modalCopyMiddleList = ref([]);
const modalCopyDetailList = ref([]);

// ModalCopy Table's ref
const modalCopyMainTableRef = ref(null);
const modalCopyMiddleTableRef = ref(null);
const modalCopyDetailTableRef = ref(null);

// ModalCopy selectedRow ref
const modalCopySelectedMainListRow = ref(null);
const modalCopySelectedMiddleListRow = ref(null);
const modalCopySelectedDetailListRow = ref(null);

const printedModalCopyDepartmentCode = ref('');

// ModalCopy filters
const modalCopyFilters = reactive({
  prst_dvcd: 'U',
  prst_uniq_no: null,
  uprn_prst_uniq_no: null,
  dept_cd: null,
  user_cd: null,
  top_mid_dtl_type: null,
  lwrn_trds_aply_yn: null,
  prst_ilns_aply_yn: null,
  user_nm: null,
});

const modalCopyDetailTableDropDownList = ref([]);

// 임시
const testDropDownList = ref(null);
const testDropDownEvent = async () => {
  testDropDownList.value = await getDropDownListWithApi();
};
testDropDownEvent();

const openModalCopy = async () => {
  try {
    await handleModalCopyUserBtn();
    modal.modalCopyType = true;
    selectedMainListRow.value = null;
    selectedMiddleListRow.value = null;
    selectedDetailListRow.value = null;
    await setPrstDvcd();
  } catch (error) {
    console.error(error);
  }
};

const closeModalCopy = () => {
  modal.modalCopyType = false;
  modalCopyFilters.user_nm = null;
  testMain.value = [];
  testMiddle.value = [];
  testDetail.value = [];
  resetModalCopyLists();
  setTimeout(() => {
    modalCopySelectedMainListRow.value = null;
  }, 1000);
  modalCopySelectedMiddleListRow.value = null;
  modalCopySelectedDetailListRow.value = null;
};

const resetModalCopyLists = () => {
  printedModalCopyDepartmentCode.value = '';
  modalCopyMiddleList.value = [];
  modalCopyDetailList.value = [];
};

// ModalCopy CommonBtn Event
const handleModalCopyCommonBtn = async () => {
  resetModalCopyLists();
  modalCopyFilters.prst_dvcd = 'A';
  const query = {
    prst_dvcd: modalCopyFilters.prst_dvcd,
  };
  modalCopyMainList.value = await getMainWithApi(query);
};

// ModalCopy DepartmentBtn Event
const handleModalCopyDepartmentBtn = async () => {
  resetModalCopyLists();
  modalCopyFilters.prst_dvcd = 'D';
  modalCopyFilters.dept_cd = '0403';
  const query = {
    prst_dvcd: modalCopyFilters.prst_dvcd,
    dept_cd: modalCopyFilters.dept_cd,
  };
  modalCopyMainList.value = await getMainWithApi(query);
};

// ModalCopy UserBtn Event
const handleModalCopyUserBtn = async () => {
  resetModalCopyLists();
  modalCopyMainList.value = [];
  modalCopyFilters.prst_dvcd = 'U';
};

const modalCopySearchUserName = async () => {
  const loadFunc = async () => {
    try {
      const query = {
        prst_dvcd: modalCopyFilters.prst_dvcd,
        dept_cd: modalCopyFilters.dept_cd,
        user_nm: modalCopyFilters.user_nm,
      };
      modalCopyMainList.value = await getMainWithApi(query);
      const departmentName = await getDropDownListWithApi();

      if (modalCopyMainList.value.length === 0) {
        alert('상병등록 된 사용자가 없습니다.');
        printedModalCopyDepartmentCode.value = '';
      } else {
        printedModalCopyDepartmentCode.value =
          departmentName[modalCopyMainList.value[0].dept_cd];
      }
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

const giveCheckSelected = (row, rowList) => {
  // rowList.value.forEach((item) => {
  //   item.checkSelected = item.checkSelected ?? 'N';
  //   row.checkSelected === 'Y'
  //     ? (item.checkSelected = 'Y')
  //     : (item.checkSelected = 'N');
  // });
};

const receiveCheckSelectedFromMiddle = () => {
  modalCopyMiddleList.value.forEach((item) => {
    if (
      item.uprn_prst_uniq_no === modalCopySelectedMainListRow.value.prst_uniq_no
    ) {
      if (item.checkSelected === 'Y') {
        modalCopySelectedMainListRow.value.checkSelected = 'Y';
        testFunction1();
      }
    }
  });
};

const receiveCheckSelectedFromDetail = () => {
  modalCopyDetailList.value.forEach(async (item) => {
    if (item.prst_uniq_no === modalCopySelectedMainListRow.value.prst_uniq_no) {
      if (item.checkSelected === 'Y') {
        modalCopySelectedMainListRow.value.checkSelected = 'Y';
        await testFunction1();
      }
    } else if (
      item.prst_uniq_no === modalCopySelectedMiddleListRow.value.prst_uniq_no
    ) {
      if (item.checkSelected === 'Y') {
        modalCopySelectedMainListRow.value.checkSelected = 'Y';
        modalCopySelectedMiddleListRow.value.checkSelected = 'Y';
        await testFunction1();
        await testFunction2();
      }
    }
    // else if(item.prst_uniq_no === modalCopySelectedMiddleListRow.value.prst_uniq_no){
    //   if(item.checkSelected === 'Y'){
    //     modalCopySelectedMainListRow.value.checkSelected = 'Y';
    //     modalCopySelectedMiddleListRow.value.checkSelected = 'Y';
    //     testFunction1();
    //     testFunction2();
    //   }
    // }
  });
};

// ModalCopy Middle & DetailLIst API Event
const onPrintModalCopyMiddleAndDetail = async (row) => {
  const loadFunc = async () => {
    try {
      modalCopySelectedMainListRow.value = row;
      row.checkSelected = row.checkSelected ?? 'N';
      const row_prst_uniq_no = row.prst_uniq_no;
      modalCopyFilters.prst_uniq_no = row_prst_uniq_no;
      const query = {
        uprn_prst_uniq_no: row_prst_uniq_no,
        prst_uniq_no: row_prst_uniq_no,
      };
      if (row_prst_uniq_no !== undefined) {
        modalCopyMiddleList.value = await getMiddleWithApi(query);
        modalCopyDetailList.value = await getDetailWithApi(query);
        giveCheckSelected(row, modalCopyMiddleList);
        giveCheckSelected(row, modalCopyDetailList);
      } else {
        resetModalCopyLists();
      }
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalCopy DetailLIst API Event
const onPrintModalCopyDetail = async (row) => {
  const loadFunc = async () => {
    try {
      modalCopySelectedMiddleListRow.value = row;
      row.checkSelected = row.checkSelected ?? 'N';
      const row_prst_uniq_no = row.prst_uniq_no;
      modalCopyFilters.prst_uniq_no = row_prst_uniq_no;
      const row_uprn_prst_uniq_no = row.uprn_prst_uniq_no;
      modalCopyFilters.uprn_prst_uniq_no = row_uprn_prst_uniq_no;
      if (row_prst_uniq_no !== undefined) {
        const query = { prst_uniq_no: row_prst_uniq_no };
        modalCopyDetailList.value = await getDetailWithApi(query);
        giveCheckSelected(row, modalCopyDetailList);
      }
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// ModalCopy DetailList DropDownList Event
const setModalCopyDetailTableDropDownList = async () => {
  modalCopyDetailTableDropDownList.value = await getInfocodeDetail(
    'ILNS_DVCD_FLAG',
  );
  modalCopyDetailColsConfigs.R_T2.dropDownSelectPool = computed(
    () => modalCopyDetailTableDropDownList.value,
  );
};
setModalCopyDetailTableDropDownList();

const testMain = ref([]);
const testMiddle = ref([]);
const testDetail = ref([]);
const testFunction1 = async () => {
  // modalCopyMainList.value.forEach((item) => {
  //   item.checkSelected === 'Y' ? testMain.value.push(item) : null;
  // });
  // testMain.value.filter((item, index) => {
  //   if (item.checkSelected === 'N') {
  //     testMain.value.splice(index, 1);
  //   }
  // });
  // const removeOverlapMain = testMain.value.filter((item1, index) => {
  //   return (
  //     testMain.value.findIndex((item2) => {
  //       return item1.prst_uniq_no === item2.prst_uniq_no;
  //     }) === index
  //   );
  // });
  // testMain.value = removeOverlapMain;
  // console.log(testMain.value, '!!!메인');
  // // await setModalCopyPrstDvcd();
};

const testFunction2 = async () => {
  modalCopyMiddleList.value.forEach((item) => {
    item.checkSelected === 'Y' ? testMiddle.value.push(item) : null;
  });

  testMiddle.value.filter((item, index) => {
    if (item.checkSelected === 'N') {
      testMiddle.value.splice(index, 1);
    }
  });

  const removeOverlapMiddle = testMiddle.value.filter((item1, index) => {
    return (
      testMiddle.value.findIndex((item2) => {
        return item1.prst_uniq_no === item2.prst_uniq_no;
      }) === index
    );
  });
  testMiddle.value = removeOverlapMiddle;
};

const testFunction3 = async () => {
  modalCopyDetailList.value.forEach((item) => {
    item.checkSelected === 'Y' ? testDetail.value.push(item) : null;
  });

  testDetail.value.filter((item, index) => {
    if (item.checkSelected === 'N') {
      testDetail.value.splice(index, 1);
    }
  });

  const removeOverlapDetail = testDetail.value.filter((item1, index) => {
    return (
      testDetail.value.findIndex((item2) => {
        return item1.ilns_nm === item2.ilns_nm;
      }) === index
    );
  });
  testDetail.value = removeOverlapDetail;
};

// ModalCopy 선택Btn Event
const handleModalCopyChoiceBtn = async () => {
  const loadFunc = async () => {
    modalCopyMainList.value.forEach((item) => {
      item.checkSelected === 'Y' ? testMain.value.push(item) : null;
    });

    let old_main_prst_arr = [];
    let new_main_prst_arr = [];
    let newTestMain = await Promise.all(
      testMain.value.map(async (item) => {
        let old_main_prst_uniq_no = item.prst_uniq_no;
        let new_main_prst_uniq_no = await createPrstUniqNoWithApi();
        item.prst_uniq_no = new_main_prst_uniq_no;
        item.action = 'POST';
        old_main_prst_arr.push(old_main_prst_uniq_no);
        new_main_prst_arr.push(new_main_prst_uniq_no);
        // console.log(old_prst_uniq_no, '@올드메인prst');
        // console.log(new_prst_uniq_no, '@뉴메인psrst');
        return item;
      }),
    );
    console.log(old_main_prst_arr, '@올드메인prst');
    console.log(new_main_prst_arr, '@뉴메인prst');
    console.log(newTestMain, '!테스트메인');
    mainList.value = [...mainList.value, ...newTestMain];

    let old_middle_uprn_prst_arr = [];
    let new_middle_prst_arr = [];
    let newTestMiddle = await Promise.all(
      testMiddle.value.map(async (item) => {
        let old_middle_uprn_prst_uniq_no = item.uprn_prst_uniq_no;
        let new_middle_prst_uniq_no = await createPrstUniqNoWithApi();
        item.prst_uniq_no = new_middle_prst_uniq_no;
        item.action = 'POST';
        old_middle_uprn_prst_arr.push(old_middle_uprn_prst_uniq_no);
        new_middle_prst_arr.push(new_middle_prst_uniq_no);
        // console.log(old_uprn_prst_uniq_no, '@올드미들uprn');
        // console.log(new_prst_uniq_no, '@뉴미들prst');

        // [1, 2, 3] old_main_prst_arr
        // [2, 1, 2, 3] old_middle_uprn_prst_arr
        // [3, 4, 5] new_main_prst_arr
        for (let i = 0; i < old_main_prst_arr.length; i++) {
          for (let cnt = 0; cnt < old_middle_uprn_prst_arr.length; cnt++) {
            if (old_main_prst_arr[i] === old_middle_uprn_prst_arr[cnt]) {
              old_middle_uprn_prst_arr[cnt] = new_main_prst_arr[i];
              item.uprn_prst_uniq_no = new_main_prst_arr[i];
            }
          }
        }
        return item;
      }),
    );
    // console.log(old_middle_uprn_prst_arr, '@올드미들uprn배열');
    // console.log(new_middle_prst_arr, '@뉴pr배열');
    console.log(newTestMiddle, '@테스트미들');
    // newTestMiddle.forEach((item) =>
    //   console.log(item.uprn_prst_uniq_no, '#뉴uprn'),
    // );
    middleList.value = [...middleList.value, ...newTestMiddle];

    let old_detail_prst_arr = [];
    const newTestDetail = testDetail.value.map((item) => {
      let old_detail_prst_uniq_no = item.prst_uniq_no;
      item.action = 'POST';

      old_detail_prst_arr.push(old_detail_prst_uniq_no);

      // main => detail
      // [1, 2] old_main_prst_arr
      // [1 ,2 ,1 ,2, 2] old_detail_prst_arr
      // [3, 4] new_main_prst_arr
      for (let i = 0; i < old_main_prst_arr.length; i++) {
        for (let cnt = 0; cnt < old_detail_prst_arr.length; cnt++) {
          if (old_main_prst_arr[i] === old_detail_prst_arr[cnt]) {
            old_detail_prst_arr[cnt] = new_main_prst_arr[i];
            item.prst_uniq_no = new_main_prst_arr[i];
          }
        }
      }

      return item;
    });
    console.log(old_detail_prst_arr, '@올드디테일prst');
    console.log(newTestDetail, '#테스트디테일');

    detailList.value = [...detailList.value, ...newTestDetail];

    // await saveAllListsWithApiApi();
    closeModalCopy();
  };
  store.dispatch('loading', loadFunc);
};

const findModalCopyDetailListRow = (row) => {
  modalCopySelectedDetailListRow.value = row;
};

/* *************** MainPageS *************** */

const store = useStore();
// const emit = defineEmits(['setToolbar']);

const TableClass = new Table();
const langData = computed(() => store.getters['getLangData']);

// MainPage colsConfigs
const mainColsConfigs = reactive({
  LT_T1: {
    defaultType: 'baseInput',
    initData: '',
  },
  LT_T2: {
    defaultType: 'checkBox',
    initData: '',
  },
});
const middleColsConfigs = reactive({
  LB_T1: {
    defaultType: 'baseInput',
    initData: '',
  },
  LB_T2: {
    defaultType: 'checkBox',
    initData: '',
  },
});
const detailColsConfigs = reactive({
  R_T1: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
    postReadonly: false,
  },
  R_T2: {
    defaultType: 'dropDown',
    readonly: false,
    postReadonly: false,
  },
  R_T3: {
    defaultType: 'baseInput',
    initData: '',
    readonly: true,
    postReadonly: false,
  },
});

// MainPage colList
const mainColList = computed(() =>
  TableClass.setColList(langData.value, mainColsConfigs),
);
const middleColList = computed(() =>
  TableClass.setColList(langData.value, middleColsConfigs),
);
const detailColList = computed(() =>
  TableClass.setColList(langData.value, detailColsConfigs),
);

// MainPage Table's list
const mainList = ref([]);
const middleList = ref([]);
const detailList = ref([]);

// MainPage Table's ref
const mainTableRef = ref(null);
const middleTableRef = ref(null);
const detailTableRef = ref(null);

// MainPage selectedRow ref
const selectedMainListRow = ref(null);
const selectedMiddleListRow = ref(null);
const selectedDetailListRow = ref(null);

// MainPage dropDownList
const detailTableDropDownList = ref([]);

const department = reactive(['GS', 'Test']);
const userInfo = reactive(['Admin', 'Test']);

// MainPage filters
const filters = reactive({
  prst_dvcd: 'A',
  prst_uniq_no: null,
  uprn_prst_uniq_no: null,
  dept_cd: null,
  user_cd: null,
  top_mid_dtl_type: null,
  // lwrn_trds_aply_yn = 미들리스트에 묶일 경우 'Y', 묶이지 않을 경우 'N'
  lwrn_trds_aply_yn: null,
  // prst_ilns_aply_yn = 디테일리스트에 묶일 경우 'Y', 묶이지 않을 경우 'N'
  prst_ilns_aply_yn: null,
});

// MoveBtn Event
const moveTop = (rowList) => {
  const checkedMainList = [];
  const unCheckedMainList = [];
  mainList.value.forEach((item) =>
    item.checkSelected === 'Y'
      ? checkedMainList.push(item)
      : unCheckedMainList.push(item),
  );
  const newMainList = [...checkedMainList, ...unCheckedMainList];
  mainList.value = newMainList;
};

const moveTop2 = (rowList) => {
  const checkedMainList = [];
  const unCheckedMainList = [];
  middleList.value.map((item) =>
    item.checkSelected === 'Y'
      ? checkedMainList.push(item)
      : unCheckedMainList.push(item),
  );
  const newMiddleList = [...checkedMainList, ...unCheckedMainList];
  middleList.value = newMiddleList;
};

const moveBottom = (rowList) => {
  const checkedMainList = [];
  const unCheckedMainList = [];
  mainList.value.map((item) =>
    item.checkSelected === 'Y'
      ? checkedMainList.push(item)
      : unCheckedMainList.push(item),
  );
  const newMainList = [...unCheckedMainList, ...checkedMainList];
  mainList.value = newMainList;
};

const moveNext = () => {
  for (let i = 0; i < mainList.value.length; i++) {
    mainList.value[i].isMoved = mainList.value[i].isMoved ?? false;
    if (i === 0) {
      if (mainList.value[i].checkSelected === 'Y') {
        let selectedRow = mainList.value[i];
        mainList.value.splice(i, 1);
        mainList.value.splice(i + 1, 0, selectedRow);
        mainList.value[i + 1].isMoved = true;
      }
    }
    // else if (i === mainList.value.length - 1) {
    // }
    else {
      if (
        mainList.value[i].checkSelected === 'Y' &&
        !mainList.value[i].isMoved
      ) {
        let selectedRow = mainList.value[i];
        mainList.value.splice(i, 1);
        mainList.value.splice(i + 1, 0, selectedRow);
        mainList.value[i + 1].isMoved = true;
      }
    }
    mainList.value[i].isMoved = mainList.value[i].isMoved ?? false;
  }
  // mainList.value.filter((item, index) => {
  //   if (item.checkSelected === 'Y') {
  //     console.log(item, index);

  //     // mainList.value.splice(index, 1);
  //     // mainList.value.splice(index + 2, 0, item);
  //   }
  // });
};

const movePrevious = () => {
  // console.log(modalCopySelectedMainListRow.value.prst_uniq_no, 'main prst');
  // modalCopyDetailList.value.forEach((item) =>
  //   console.log(item.prst_uniq_no, 'detail prst'),
  // );
  // console.log(selectedMiddleListRow.value, 'selected middle');
  // console.log(
  //   modalCopySelectedMainListRow.value.prst_uniq_no,
  //   'modalCopySelectedMainRow',
  // );
  // modalCopyMiddleList.value.forEach((item) => {
  //   console.log(item.uprn_prst_uniq_no, 'middle uprn');
  //   console.log(item.prst_uniq_no, 'middle prst');
  // });
  console.log(modalCopySelectedMainListRow.value.prst_uniq_no, '!메인pr');
  console.log(
    modalCopySelectedMiddleListRow.value?.uprn_prst_uniq_no,
    '@미들upr',
  );
  console.log(modalCopySelectedMiddleListRow.value?.prst_uniq_no, '@미들pr');
  testDetail.value.forEach((item) => {
    console.log(item.prst_uniq_no, '#디테일pr');
  });
  console.log(modalCopySelectedDetailListRow.value, '$셀렉티드디테일');
};

// MainPage middleList & detailList to reset
const resetMiddleAndDetailList = () => {
  middleList.value = [];
  detailList.value = [];
};

// MainPage CommonBtn Event
const handleCommonBtn = async () => {
  try {
    resetMiddleAndDetailList();
    const query = { prst_dvcd: (filters.prst_dvcd = 'A') };
    mainList.value = await getMainWithApi(query);
    // await mainTableRef.value.handleClickRow(0, mainList.value[0]);
  } catch (error) {
    console.error(error);
  }
};

// // MainPage DeraptmentBtn Event
const handleDepartmentBtn = async () => {
  try {
    resetMiddleAndDetailList();
    const query = {
      prst_dvcd: (filters.prst_dvcd = 'D'),
      dept_cd: (filters.dept_cd = '0403'),
    };
    mainList.value = await getMainWithApi(query);
    // await mainTableRef.value.handleClickRow(0, mainList.value[0]);
  } catch (error) {
    console.error(error);
  }
};

// MainPage UserBtn Event
const handleUserBtn = async () => {
  try {
    resetMiddleAndDetailList();
    const query = {
      prst_dvcd: (filters.prst_dvcd = 'U'),
      user_cd: (filters.user_cd = '0000000001'),
    };
    mainList.value = await getMainWithApi(query);
    // await mainTableRef.value.handleClickRow(0, mainList.value[0]);
  } catch (error) {
    console.error(error);
  }
};

// MainPage MainList get API Event
const getMain = async () => {
  try {
    const query = { prst_dvcd: filters.prst_dvcd };
    mainList.value = await getMainWithApi(query);
    // await mainTableRef.value.handleClickRow(0, mainList.value[0]);
  } catch (error) {
    console.log(error);
  }
};

// MainPage Middle & DetailLIst get API Event
const onPrintMiddleAndDetail = async (row) => {
  const loadFunc = async () => {
    try {
      selectedMainListRow.value = row;
      const row_prst_uniq_no = row.prst_uniq_no;
      filters.prst_uniq_no = row_prst_uniq_no;
      const query = {
        uprn_prst_uniq_no: row_prst_uniq_no,
        prst_uniq_no: row_prst_uniq_no,
      };
      if (row_prst_uniq_no !== undefined) {
        middleList.value = await getMiddleWithApi(query);
        detailList.value = await getDetailWithApi(query);
      } else {
        // resetMiddleAndDetailList();
      }
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// MainPage DetailLIst get API Event
const onPrintDetail = async (row) => {
  const loadFunc = async () => {
    try {
      selectedMiddleListRow.value = row;
      const row_prst_uniq_no = row.prst_uniq_no;
      filters.prst_uniq_no = row_prst_uniq_no;
      const row_uprn_prst_uniq_no = row.uprn_prst_uniq_no;
      filters.uprn_prst_uniq_no = row_uprn_prst_uniq_no;
      if (row_prst_uniq_no !== undefined) {
        const query = { prst_uniq_no: row_prst_uniq_no };
        detailList.value = await getDetailWithApi(query);
      }
    } catch (error) {
      console.log(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// MainPage DetailList DropDownList Event
const setDetailTableDropDownList = async () => {
  detailTableDropDownList.value = await getInfocodeDetail('ILNS_DVCD_FLAG');
  detailColsConfigs.R_T2.dropDownSelectPool = computed(
    () => detailTableDropDownList.value,
  );
};
setDetailTableDropDownList();

const setPrstDvcd = async () => {
  if (filters.prst_dvcd === 'A') {
    await handleCommonBtn();
  } else if (filters.prst_dvcd === 'D') {
    await handleDepartmentBtn();
  } else {
    await handleUserBtn();
  }
};

const setSortSequenceNum = async (rowList, item, index) => {
  if (item.action === 'DELETE') {
    item.action = 'DELETE';
  } else if (item.action === 'POST') {
    item.action = 'POST';
    item.srt_seq = rowList.length + 1;
  } else if (!item.action) {
    item.action = 'PUT';
    item.srt_seq = index + 1;
  }
};

const resetSelectedRows = () => {
  selectedMainListRow.value = null;
  selectedMiddleListRow.value = null;
  selectedDetailListRow.value = null;
};

const resetListsAndRows = () => {
  mainList.value.forEach((item) => {
    if (item.prst_prsc_titl === '') {
      resetSelectedRows();
      resetMiddleAndDetailList();
    }
  });
};

const resetDetailList = () => {
  middleList.value.forEach((item) => {
    if (item.prst_prsc_titl === '') {
      detailList.value = [];
    }
  });
};

// MainPage MainList BulkAction Event
const saveMainListWithApi = async () => {
  const loadFunc = async () => {
    try {
      mainList.value.forEach(async (item, index) => {
        item.top_mid_dtl_type = 'T';
        item.prst_dvcd = filters.prst_dvcd;
        item.dept_cd = filters.dept_cd;
        item.user_cd = filters.user_cd;

        setSortSequenceNum(mainList.value, item, index);
        return item;
      });
      await TableClass.save(mainList.value, bulkMainAndMiddleListWithApi);
      await setPrstDvcd();
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// MainPage MiddleList BulkAction Event
const saveMiddleListWithApi = async () => {
  const loadFunc = async () => {
    try {
      middleList.value.map(async (item, index) => {
        item.top_mid_dtl_type = 'M';
        item.uprn_prst_uniq_no = selectedMainListRow.value
          ? selectedMainListRow.value.prst_uniq_no
          : item.uprn_prst_uniq_no;
        item.dept_cd = filters.dept_cd;
        item.user_cd = filters.user_cd;
        setSortSequenceNum(middleList.value, item, index);
        return item;
      });

      await TableClass.save(middleList.value, bulkMainAndMiddleListWithApi);
      // await setPrstDvcd();
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// MainPage DetailList BulkAction Event
const saveDetailListWithApi = async () => {
  const loadFunc = async () => {
    try {
      detailList.value.map(async (item, index) => {
        /* 임시주석 */
        // if (item.action === 'POST' && !modalCopySelectedMainListRow.value) {
        //   item.prst_uniq_no = selectedMainListRow.value?.prst_uniq_no;
        // } else if (selectedMainListRow.value && !selectedMiddleListRow.value) {
        //   item.prst_uniq_no = selectedMainListRow.value.prst_uniq_no;
        // } else if (selectedMainListRow.value && selectedMiddleListRow.value) {
        //   item.prst_uniq_no = selectedMiddleListRow.value.prst_uniq_no;
        // }

        if (item.action === 'POST') {
          if (selectedMainListRow.value) {
            item.prst_uniq_no = selectedMainListRow.value?.prst_uniq_no;
          } else if (item.action === 'POST' && selectedMiddleListRow.value) {
            item.prst_uniq_no = selectedMiddleListRow.value.prst_uniq_no;
          }
        }

        item.top_mid_dtl_type = 'D';
        item.ilns_dvcd = item.ilns_dvcd ?? '';

        setSortSequenceNum(detailList.value, item, index);
        return item;
      });
      await TableClass.save(detailList.value, bulkDetailListWithApi);
      // await setPrstDvcd();
    } catch (error) {
      console.error(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

const findDetailRow = (row) => {
  selectedDetailListRow.value = row;
};

// TotalSave Event
const saveAllListsWithApiApi = async () => {
  const loadFunc = async () => {
    try {
      await saveMainListWithApi();
      await saveMiddleListWithApi();
      await saveDetailListWithApi();
      resetSelectedRows();
    } catch (error) {
      console.log(error);
    }
  };
  store.dispatch('loading', loadFunc);
};

// Reset Event
const handleResetFunction = async () => {
  const loadFunc = async () => {
    filters.prst_dvcd = 'A';
    await setPrstDvcd();
  };
  store.dispatch('loading', loadFunc);
};

// The moment you press the reset button on the header
const resetData = async () => {
  await handleResetFunction();
};

/* 쿼리가 변하면서 리렌더링 발생, api를 2번 요청하는 문제점 */
// watchEffect(getMain);

// Life cycles
onMounted(async () => {
  // setLoading... true & false
  // store.commit('setLoading', false);

  // header's Language dropdown event
  langDataUse.addChangeLanguageListenerWithDirtyChecker(isDirty);
  await handleResetFunction();

  // await mainTableRef.value.handleClickRow(0, mainList.value[0]);
});

// DefineExpose
defineExpose({ handleResetFunction, resetData, isDirty });
</script>

<style lang="scss">
.icon {
  width: 28px;
  height: 28px;
  display: block;
}
.icon-up1 {
  background: url(@/images/icon-up01.svg) no-repeat;
}
.icon-up2 {
  background: url(@/images/icon-up02.svg) no-repeat;
}
.icon-down1 {
  background: url(@/images/icon-down01.svg) no-repeat;
}
.icon-down2 {
  background: url(@/images/icon-down02.svg) no-repeat;
}

.input-select-active {
  background: url(@/images/input-select-active.svg) no-repeat;
}

.select_default {
  display: flex !important;
}

input {
  width: auto;
}

.modal_wrap {
  width: 1260px;
  height: 800px;
  position: absolute;
  top: 35%;
  left: 30%;
  margin: -250px 0 0 -250px;
}

.popup-total .card-header {
  display: none;
}

.popup-cell {
  position: relative;
}

.popup-cell .card-header {
  display: none;
}

.popup-grid1 {
  width: 400px;
  height: 600px;
  position: absolute;
  top: 25px;
  left: -310px;
}

.popup-grid2 {
  width: 700px;
  height: 290px;
  position: absolute;
  top: 25px;
  right: -815px;
}

.popup-grid3 {
  width: 700px;
  height: 295px;
  position: absolute;
  top: 330px;
  right: -815px;
}
</style>
