import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import AppRoutes from "./components/AppRoutes";
import { Amplify } from "aws-amplify";
import { withAuthenticator, Authenticator} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { FormDataProvider } from './modules/FormDataContext';
import logo from './assets/svg30419.png'; // import the image
const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);

function App() {
  return (
    <FormDataProvider>
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src={logo}
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          FoodCycle Vendor Dashboard ©2023
        </Footer>
      </Layout>
    </Layout>
    </FormDataProvider>
  );
}

export default withAuthenticator(App);