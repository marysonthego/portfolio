/* eslint-disable */
"use strict";

import KTToggle from "components/dashboard/components/toggle.js";
import { KTUtil } from "components/dashboard/components/util.js";

var KTLayoutHeaderTopbar = function() {
    // Private properties
	var _toggleElement;
    var _toggleObject;

    // Private functions
    var _init = function() {
        _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
            targetState: 'topbar-mobile-off',
            toggleState: 'active',
        });
    }

    // Public methods
	return {
		init: function(id) {
            _toggleElement = KTUtil.getById(id);

			if (!_toggleElement) {
                return;
            }

            // Initialize
            _init();
		},

        getToggleElement: function() {
            return _toggleElement;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	// module.exports = KTLayoutHeaderTopbar;
}

export default KTLayoutHeaderTopbar;
