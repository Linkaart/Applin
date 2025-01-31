import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useGetOrders } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './commandes.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();

export default function Commandes() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindOrders } = useGetOrders();

  return (
    <>
      <div className={classes("row-layout commandes-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <h6 className={classes("h6")}>
                <span>Orders</span>
              </h6>
              <div className={classes("row-layout group_3")}>
                <IgrButton type="button" className={classes("button button_1")}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>add</span>
                  </span>
                  <span key={uuid()}>New Order</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="outlined" type="button" className={classes("button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>picture_as_pdf</span>
                  </span>
                  <span key={uuid()}>Download PDF</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="outlined" type="button" className={classes("button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>print</span>
                  </span>
                  <span key={uuid()}>Print</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <div className={classes("row-layout group_4")}>
              <div className={classes("row-layout group_5")}>
                <IgrInput label="Search orders" outlined="false" className={classes("input")}>
                  <span slot="prefix" key={uuid()}>
                    <span className={classes("material-icons icon_1")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                  </span>
                </IgrInput>
                <IgrButton variant="outlined" type="button" className={classes("button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>filter_alt</span>
                  </span>
                  <span key={uuid()}>Filter</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </div>
            <div className={classes("row-layout group_6")}>
              <IgrGrid data={northwindOrders} primaryKey="employeeID" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="orderID" dataType="number" header="orderID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="orderDate" dataType="date" header="orderDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="requiredDate" dataType="date" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shippedDate" dataType="date" header="shippedDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
