import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { useRef, useState } from 'react';
import { useGetBrandsList } from '../hooks/inventory-app-hooks';
import { useGetMaterialsList } from '../hooks/peinture-hooks';
import { useGetSalesList } from '../hooks/ecommerce-hooks';
import styles from './produits.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrCheckboxModule.register();
IgrComboModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Produits() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const addNewProduct = useRef<IgrDialog>(null);
  const dropdown = useRef<IgrDropdown>(null);
  const editProductDetails = useRef<IgrDialog>(null);
  const [value, setValue] = useState<string | undefined>('Basic Tee');
  const [value1, setValue1] = useState<string | undefined>('2');
  const [value2, setValue2] = useState<string | undefined>('Here you can add some description of the product in more details');
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const [value3, setValue3] = useState<number | undefined>(15.99);
  const [value4, setValue4] = useState<number | undefined>(99);
  const [value5, setValue5] = useState<string | undefined>('M050');
  const { inventoryAppBrands } = useGetBrandsList();
  const { peintureMaterials } = useGetMaterialsList();
  const { eCommerceSales } = useGetSalesList();

  return (
    <>
      <div className={classes("column-layout produits-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <h6 className={classes("h6")}>
              <span>Products</span>
            </h6>
            <div className={classes("row-layout group_2")}>
              <IgrButton type="button" clicked={() => addNewProduct?.current?.toggle()} className={classes("button button_2")}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>add</span>
                </span>
                <span key={uuid()}>Add New Product</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="outlined" type="button" className={classes("button")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>import_export</span>
                </span>
                <span key={uuid()}>Import Product</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div className={classes("row-layout group_1")}>
            <div className={classes("row-layout group_3")}>
              <IgrCombo data={inventoryAppBrands} label="Category" placeholder="Choose categories" valueVey="name" displayKey="name" outlined="false" className={classes("user-input")}></IgrCombo>
              <IgrInput label="Search" outlined="false" className={classes("user-input")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>search</span>
                  </span>
                </span>
              </IgrInput>
            </div>
            <IgrButton variant="flat" type="button" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button")}>
              <span key={uuid()}>Sort By</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>keyboard_arrow_down</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrDropdown ref={dropdown} className={classes("dropdown")}>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Alphabetically</span>
              </IgrDropdownItem>
              <IgrDropdownItem key={uuid()}>
                <span key={uuid()}>Recently Added</span>
              </IgrDropdownItem>
            </IgrDropdown>
          </div>
          <div className={classes("row-layout products")}>
            {peintureMaterials?.map((item) => (
              <IgrCard className={classes("card")} key={uuid()}>
                <IgrCardHeader key={uuid()}>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>{item.name}</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>{item.price}</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")} key={uuid()}>
                  <p className={classes("typography__body-2 text")} key={uuid()}>
                    <span>Here you can add some description of the product in more details</span>
                  </p>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")} key={uuid()}>
                  <div slot="end" key={uuid()}>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>remove_red_eye</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                    <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                      <span className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>delete</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            ))}
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={addNewProduct}>
          <h5 slot="title" key={uuid()}>
            <span>Add New Product</span>
          </h5>
          <div className={classes("column-layout group_4")} key={uuid()}>
            <div className={classes("column-layout group_5")}>
              <IgrInput label="Product title" placeholder="e.g Blue jeans" outlined="false" className={classes("user-input_2")}></IgrInput>
              <div className={classes("row-layout group_5")}>
                <IgrSelect outlined="false" label="Department" placeholder="Pick a Department" className={classes("select")}>
                  <IgrSelectItem value="1" key="4bd4b365-e688-4bd6-9be0-d620ae784307">
                    <span key={uuid()}>Women's Clothing</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="2" key="d7f719b3-5170-4910-b44f-781728b75ad5">
                    <span key={uuid()}>Men's Clothing</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="3" key="44bc2038-d6cb-4e1f-8bda-f27544feb682">
                    <span key={uuid()}>Children's Clothing</span>
                  </IgrSelectItem>
                </IgrSelect>
                <IgrCombo data={eCommerceSales} label="Category" placeholder="Choose categories" valueKey="Item" displayKey="Item" outlined="false" singleSelect="true" className={classes("single-select-combo")}></IgrCombo>
              </div>
              <IgrTextarea label="Product description" placeholder="e.g.  Blue jeans, regular fit, 100% cotton" outlined="false" className={classes("user-input_2")}></IgrTextarea>
            </div>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Images</span>
              </p>
              <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>photo_camera</span>
                </span>
                <span key={uuid()}>Upload pictures</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <div className={classes("row-layout group_7")}>
              <IgrInput type="number" label="Unit price" outlined="false" className={classes("input")}></IgrInput>
              <IgrInput type="number" label="Units in stock" outlined="false" className={classes("input")}></IgrInput>
              <IgrInput type="number" label="Product #" outlined="false" className={classes("input")}></IgrInput>
            </div>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Select available sizes:</span>
              </p>
              <div className={classes("row-layout checkbox-group")}>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>XS</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>S</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>M</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>L</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>XL</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>XXL</span>
                </IgrCheckbox>
              </div>
            </div>
            <div className={classes("row-layout group_8")}>
              <IgrButton type="button" clicked={() => addNewProduct?.current?.toggle()} className={classes("button button_3")}>
                <span key={uuid()}>ADD PRODUCT</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" type="button" clicked={() => addNewProduct?.current?.toggle()} className={classes("button")}>
                <span key={uuid()}>CANCEL</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div slot="footer" key={uuid()}></div>
        </IgrDialog>
        <IgrDialog closeOnOutsideClick="true" ref={editProductDetails}>
          <h5 slot="title" key={uuid()}>
            <span>Edit Product Details</span>
          </h5>
          <div className={classes("column-layout group_4")} key={uuid()}>
            <div className={classes("column-layout group_5")}>
              <IgrInput label="Product title" placeholder="e.g Blue jeans" outlined="false" value={value} change={(_c, e) => setValue(e.detail)} className={classes("user-input_2")}></IgrInput>
              <div className={classes("row-layout group_5")}>
                <IgrSelect outlined="false" label="Department" placeholder="Pick a Department" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("select")}>
                  <IgrSelectItem value="1" key="d09b25d7-5c76-4dbb-aa65-3d691cd3974b">
                    <span key={uuid()}>Women's Clothing</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="2" key="99b8fee9-1cfc-4b5b-acaa-3020dc5fd624">
                    <span key={uuid()}>Men's Clothing</span>
                  </IgrSelectItem>
                  <IgrSelectItem value="3" key="f5cd579c-0dcc-4a29-93f5-1679f7c3dc8f">
                    <span key={uuid()}>Children's Clothing</span>
                  </IgrSelectItem>
                </IgrSelect>
                <IgrCombo data={eCommerceSales} label="Category" placeholder="Choose categories" valueKey="Item" displayKey="Item" outlined="false" singleSelect="true" className={classes("single-select-combo")}></IgrCombo>
              </div>
              <IgrTextarea label="Product description" placeholder="e.g.  Blue jeans, regular fit, 100% cotton" outlined="false" value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("user-input_2")}></IgrTextarea>
            </div>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Images</span>
              </p>
              <div className={classes("row-layout group_5")}>
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className={classes("image")} />
                <img src="https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className={classes("image")} />
                <img src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className={classes("image")} />
              </div>
              <IgrButton variant="outlined" type="button" className={classes("button_1")}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>photo_camera</span>
                </span>
                <span key={uuid()}>Upload pictures</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <div className={classes("column-layout group_6")}>
              <p className={classes("typography__subtitle-2 text")}>
                <span>Select available sizes:</span>
              </p>
              <div className={classes("row-layout checkbox-group")}>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                  <span key={uuid()}>XS</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                  <span key={uuid()}>S</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                  <span key={uuid()}>M</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                  <span key={uuid()}>L</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                  <span key={uuid()}>XL</span>
                </IgrCheckbox>
                <IgrCheckbox labelPosition="after" className={classes("checkbox")}>
                  <span key={uuid()}>XXL</span>
                </IgrCheckbox>
              </div>
            </div>
            <div className={classes("row-layout group_7")}>
              <IgrInput type="number" label="Unit price" outlined="false" value={value3?.toString()} change={(_c, e) => setValue3(parseFloat(e.detail))} className={classes("input")}></IgrInput>
              <IgrInput type="number" label="Units in stock" outlined="false" value={value4?.toString()} change={(_c, e) => setValue4(parseFloat(e.detail))} className={classes("input")}></IgrInput>
              <IgrInput label="Product #" outlined="false" value={value5} change={(_c, e) => setValue5(e.detail)} className={classes("input")}></IgrInput>
            </div>
            <div className={classes("row-layout group_8")}>
              <IgrButton type="button" clicked={() => editProductDetails?.current?.toggle()} className={classes("button button_4")}>
                <span key={uuid()}>UPDATE</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
              <IgrButton variant="flat" type="button" clicked={() => editProductDetails?.current?.toggle()} className={classes("button")}>
                <span key={uuid()}>CANCEL</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </div>
          <div slot="footer" key={uuid()}></div>
        </IgrDialog>
      </div>
    </>
  );
}
