import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule, IgrPieChart, IgrPieChartModule } from 'igniteui-react-charts';
import { useNavigate } from 'react-router-dom';
import { useGetMaterialsList } from '../hooks/peinture-hooks';
import { useGetNewProductsList } from '../hooks/inventory-app-hooks';
import { useGetProducts } from '../hooks/northwind-hooks';
import { useGetRevenueList } from '../hooks/ecommerce-hooks';
import styles from './accueil.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrCategoryChartModule.register();
IgrListModule.register();
IgrPieChartModule.register();
IgrRippleModule.register();

export default function Accueil() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { inventoryAppNewProducts } = useGetNewProductsList();
  const { northwindProducts } = useGetProducts();
  const { peintureMaterials } = useGetMaterialsList();
  const { eCommerceRevenue } = useGetRevenueList();

  return (
    <>
      <div className={classes("row-layout accueil-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout metrics")}>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}></span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <div className={classes("column-layout group_1")} key={uuid()}>
                  <img src="/src/assets/Sales.svg" className={classes("image")} />
                  <p className={classes("typography__subtitle-1 text")}>
                    <span>Ventes</span>
                  </p>
                  <h4 className={classes("h4")}>
                    <span>250 000€</span>
                  </h4>
                  <p className={classes("typography__subtitle-2 text_1")}></p>
                </div>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div slot="end" key={uuid()}>
                  <IgrButton variant="outlined" type="button" className={classes("button")} key={uuid()}>
                    <span key={uuid()}>View report</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}></span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <div className={classes("column-layout group_1")} key={uuid()}>
                  <img src="/src/assets/Orders.svg" className={classes("image")} />
                  <p className={classes("typography__subtitle-1 text")}>
                    <span>Commandes</span>
                  </p>
                  <h4 className={classes("h4")}>
                    <span>3,612</span>
                  </h4>
                  <p className={classes("typography__subtitle-2 text_2")}>
                    <span>Increased 75%</span>
                  </p>
                </div>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div slot="end" key={uuid()}>
                  <IgrButton variant="outlined" type="button" className={classes("button")} key={uuid()}>
                    <span key={uuid()}>View report</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}></span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <div className={classes("column-layout group_1")} key={uuid()}>
                  <img src="/src/assets/Products.svg" className={classes("image")} />
                  <p className={classes("typography__subtitle-1 text")}>
                    <span>Produits</span>
                  </p>
                  <h4 className={classes("h4")}>
                    <span>1,236</span>
                  </h4>
                  <p className={classes("typography__subtitle-2 text_2")}>
                    <span>Increased 75%</span>
                  </p>
                </div>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div slot="end" key={uuid()}>
                  <IgrButton variant="outlined" type="button" className={classes("button")} key={uuid()}>
                    <span key={uuid()}>View report</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}></span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")} key={uuid()}>
                <div className={classes("column-layout group_1")} key={uuid()}>
                  <img src="/src/assets/Customers.svg" className={classes("image")} />
                  <p className={classes("typography__subtitle-1 text")}>
                    <span>Clients</span>
                  </p>
                  <h4 className={classes("h4")}>
                    <span>49</span>
                  </h4>
                  <p className={classes("typography__subtitle-2 text_2")}>
                    <span>Increased 12%</span>
                  </p>
                </div>
              </IgrCardContent>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div slot="end" key={uuid()}>
                  <IgrButton variant="outlined" type="button" className={classes("button")} key={uuid()}>
                    <span key={uuid()}>View report</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
          <div className={classes("row-layout group_2")}>
            <div className={classes("column-layout new-products")}>
              <div className={classes("row-layout group_3")}>
                <p className={classes("typography__subtitle-2 text_3")}>
                  <span>New Products</span>
                </p>
              </div>
              <div className={classes("column-layout group_4")}>
                <IgrList className={classes("list")}>
                  {inventoryAppNewProducts?.map((item) => (
                    <IgrListItem key={uuid()}>
                      <div slot="start" key={uuid()}>
                        <IgrAvatar className={classes("avatar")} key={uuid()}></IgrAvatar>
                      </div>
                      <div key={uuid()}>
                        <div className={classes("column-layout group_5")} key={uuid()}>
                          {northwindProducts?.map((item1) => (
                            <p className={classes("typography__subtitle-2 text_4")} key={uuid()}>
                              <span>{item.Code}</span>
                            </p>
                          ))}
                          <div className={classes("row-layout group_6")}>
                            <p className={classes("typography__caption text_4")}>
                              <span>{item.Category}</span>
                            </p>
                            <p className={classes("typography__caption text_4")}>
                              <span>|</span>
                            </p>
                            <p className={classes("typography__caption text_4")}>
                              <span>{item.Code}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </IgrListItem>
                  ))}
                </IgrList>
              </div>
            </div>
            <div className={classes("column-layout new-products")}>
              <div className={classes("row-layout group_3")}>
                <p className={classes("typography__subtitle-2 text_3")}>
                  <span>Sales By Category</span>
                </p>
              </div>
              <div className={classes("row-layout group_7")}>
                <div className={classes("group_8")}>
                  <IgrPieChart dataSource={peintureMaterials} labelMemberPath="name" valueMemberPath="id"></IgrPieChart>
                </div>
              </div>
            </div>
            <div className={classes("column-layout new-products")}>
              <div className={classes("row-layout group_3")}>
                <p className={classes("typography__subtitle-2 text_3")}>
                  <span>Total Sales</span>
                </p>
              </div>
              <div className={classes("row-layout group_7")}>
                <div style={{display: 'contents'}} onClick={() => navigate(`/ventes`)}>
                  <div className={classes("group_9")}>
                    <IgrCategoryChart dataSource={eCommerceRevenue} chartType="Column" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
