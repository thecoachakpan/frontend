import AuthLayout from "./AuthLayout";
import BusinessLayout from "./BusinessLayout";
import CustomerLayout from "./CustomerLayout";
import DefaultLayout from "./DefaultLayout";
import OnboardLayout from "./OnboardLayout";
import ShopLandingLayout from "./ShopLandingLayout";
import ShopLayout from "./ShopLayout";

const layouts = {
  default: DefaultLayout,
  auth: AuthLayout,
  shop: ShopLayout,
  shoplanding: ShopLandingLayout,
  customer: CustomerLayout,
  onboarding: OnboardLayout,
  business: BusinessLayout,
};

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;
