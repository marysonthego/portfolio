import React, {useMemo} from "react";
import objectPath from "object-path";
import {Brand} from "components/dashboard/components/Brand";
import {AsideMenu} from "components/dashboard/components/aside/aside-menu/AsideMenu";
import {useHtmlClassService} from "components/dashboard/components/layout/MetronicLayout";

export function Aside() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      disableScroll:
          objectPath.get(uiService.config, "aside.menu.dropdown") === "true" ||
          false,
      asideClassesFromConfig: uiService.getClasses("aside", true),
      disableAsideSelfDisplay:
          objectPath.get(uiService.config, "aside.self.display") === false,
      headerLogo: uiService.getLogo()
    };
  }, [uiService]);

  return (
      <>
        {/* begin::Aside */}
        <div id="kt_aside"
             className={`aside aside-left  ${layoutProps.asideClassesFromConfig} d-flex flex-column flex-row-auto`}>
          <Brand/>

          {/* begin::Aside Menu */}
          <div id="kt_aside_menu_wrapper" className="aside-menu-wrapper flex-column-fluid">
            <AsideMenu disableScroll={layoutProps.disableScroll}/>
          </div>
          {/* end::Aside Menu */}
        </div>
        {/* end::Aside */}
      </>
  );
}