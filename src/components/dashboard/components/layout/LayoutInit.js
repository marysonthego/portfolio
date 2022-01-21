import React, {useLayoutEffect} from "react";
import {KTUtil} from "app/components/util";
import KTLayoutHeader from "app/components/base/header";
import KTLayoutHeaderMenu from "app/components/base/header-menu";
import KTLayoutHeaderTopbar from "app/components/base/header-topbar";
import KTLayoutBrand from "app/components/base/brand";
import KTLayoutAside from "app/components/base/aside";
import KTLayoutAsideToggle from "app/components/base/aside-toggle";
import KTLayoutAsideMenu from "app/components/base/aside-menu";
import KTLayoutContent from "app/components/base/content";
import KTLayoutFooter from "app/components/base/footer";
import KTLayoutSubheader from "app/components/base/subheader";
import KTLayoutScrolltop from "app/components/layout/scrolltop";
import KTLayoutStickyCard from "app/components/base/sticky-card";
import KTLayoutStretchedCard from "app/components/base/stretched-card";
import KTLayoutQuickPanel from "app/components/base/quick-panel";
import KTLayoutQuickUser from "app/components/base/quick-user";

export function LayoutInit() {
  useLayoutEffect(() => {
    // Initialization
    KTUtil.ready(function () {
      ////////////////////////////////////////////////////
      // Layout Base Partials(mandatory for core layout)//
      ////////////////////////////////////////////////////
      // Init Desktop & Mobile Headers
      KTLayoutHeader.init('kt_header', 'kt_header_mobile');

      // Init Header Menu
      KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
      // Init Header Topbar For Mobile Mode
      //KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');
      // Init Brand Panel For Logo
      KTLayoutBrand.init('kt_brand');
      // Init Aside
      KTLayoutAside.init('kt_aside');

      // Init Aside Menu Toggle
      KTLayoutAsideToggle.init('kt_aside_toggle');
      //
      // Init Aside Menu
      KTLayoutAsideMenu.init('kt_aside_menu');

      // Init Content
      KTLayoutContent.init('kt_content');

      // Init Footer
      KTLayoutFooter.init('kt_footer');


      //////////////////////////////////////////////
      // Layout Extended Partials(optional to use)//
      //////////////////////////////////////////////
      KTLayoutSubheader.init('kt_subheader');

      // Init Scrolltop
      KTLayoutScrolltop.init('kt_scrolltop');

      // Init Sticky Card
      KTLayoutStickyCard.init('kt_page_sticky_card');

      // Init Stretched Card
      KTLayoutStretchedCard.init('kt_page_stretched_card');

      // Init Quick Offcanvas Panel
      //KTLayoutQuickPanel.init('kt_quick_panel');

      // Init Quick User Panel
      KTLayoutQuickUser.init('kt_quick_user');
    });
  }, []);
  return <></>;
}
