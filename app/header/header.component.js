"use strict";
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "<ActionBar title=\"Scrum Poker\">\n             <StackLayout orientation=\"horizontal\" ios:horizontalAlignment=\"center\" android:horizontalAlignment=\"left\">\n             </StackLayout>\n             </ActionBar>",
            styleUrls: ["header/header.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map