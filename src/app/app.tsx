import { GlobalContext, useGlobalState } from './hooks/context-hooks';
import { IgrAvatar, IgrAvatarModule, IgrList, IgrListItem, IgrListModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrListModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <GlobalContext.Provider value ={{ globalState, setGlobalState}}>
      <div className={classes("row-layout master-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/accueil`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/5aed45c45d47c3b644ce9a0d61561e1b.gif" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Mikail</div>
                <div slot="subtitle" key={uuid()}>SUPER ADMIN</div>
                <span slot="end" className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>keyboard_arrow_down</span>
                </span>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/accueil`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Store_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Dashboard</div>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/produits`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Inventory_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Produits</div>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/commandes`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Orders_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Commandes</div>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/ventes`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Sales_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Ventes</div>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/clients`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Customers_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Client</div>
              </IgrListItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/devis`)} key={uuid()}>
              <IgrListItem>
                <div slot="start" key={uuid()}>
                  <IgrAvatar src="/src/assets/Customers_Icon_Small.svg" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Devis</div>
              </IgrListItem>
            </div>
          </IgrList>
          <div className={classes("column-layout group_1")}>
            <img src="/src/assets/logo.png" className={classes("image")} />
          </div>
        </div>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
