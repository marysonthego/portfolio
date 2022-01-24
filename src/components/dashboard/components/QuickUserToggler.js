/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import objectPath from 'object-path';
import { useHtmlClassService } from 'components/dashboard/components/layout/MetronicLayout';
import { UserProfileDropdown } from 'components/dashboard/pages/UserProfileDropdown';

//import { useStickyState } from 'components/dashboard/components/AuthInit';
import { initUser } from 'components/dashboard/helpers/Initializers';

export function QuickUserToggler() {
  const [customer] = useState(initUser);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      offcanvas:
        objectPath.get(uiService.config, 'extras.customer.layout') ===
        'offcanvas',
    };
  }, [uiService]);

  return (
    <>
      {layoutProps.offcanvas && (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="quick-user-tooltip">View user</Tooltip>}>
          <div className="topbar-item">
            <div
              className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
              id="kt_quick_user_toggle">
              <>
                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                  Hi,
                </span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                  {customer.firstname}
                </span>
                <span className="symbol symbol-35 symbol-light-success">
                  <span className="symbol-label font-size-h5 font-weight-bold">
                    {customer.firstname[0]}
                  </span>
                </span>
              </>
            </div>
          </div>
        </OverlayTrigger>
      )}

      {!layoutProps.offcanvas && <UserProfileDropdown />}
    </>
  );
}
