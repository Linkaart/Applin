import { useGlobalContext } from '../hooks/context-hooks';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCombo, IgrComboModule } from 'igniteui-react';
import { RevenueType } from '../models/ECommerce/revenue-type';
import { useGetRevenueList } from '../hooks/ecommerce-hooks';
import styles from './ventes.module.css';
import createClassTransformer from '../style-utils';

IgrCategoryChartModule.register();
IgrComboModule.register();

export default function Ventes() {
  const classes = createClassTransformer(styles);
  const { globalState, setGlobalState } = useGlobalContext();
  const { eCommerceRevenue } = useGetRevenueList();

  function comboChange(_: IgrCombo, event: any) {
    setGlobalState(prevState => ({...prevState, revenue: event.detail.newValue as RevenueType[]}));
  }

  return (
    <>
      <div className={classes("row-layout ventes-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <h6 className={classes("h6")}>
                <span>Sales</span>
              </h6>
              <div className={classes("row-layout group_3")}></div>
            </div>
            <div className={classes("row-layout group_4")}>
              <div className={classes("row-layout group_5")}>
                <IgrCombo data={eCommerceRevenue} label="Sales" placeholder="Choose a month" displayKey="Month" outlined="false" change={(s, event) => comboChange(s, event)} className={classes("combo")}></IgrCombo>
              </div>
            </div>
            <div className={classes("row-layout group_6")}>
              <div className={classes("group_7")}>
                <IgrCategoryChart dataSource={globalState.revenue} computedPlotAreaMarginMode="Series"></IgrCategoryChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
