"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'floorplanner/2.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * List projects
     *
     * @summary List projects
     */
    SDK.prototype.listProjects = function (metadata) {
        return this.core.fetch('/projects.json', 'get', metadata);
    };
    /**
     * Create a project
     *
     * @summary Create Project
     */
    SDK.prototype.createProject = function (body) {
        return this.core.fetch('/projects.json', 'post', body);
    };
    /**
     * Search projects
     *
     * @summary Search projects
     */
    SDK.prototype.searchProjects = function (metadata) {
        return this.core.fetch('/projects/search.json', 'get', metadata);
    };
    /**
     * Import a project FML (JSON or XML)<br/> **QUIRK**<br>The `x`, `y`, and `z` coordinates
     * must be specified in meters instead of centimeters. To set any coordinate to 160cm set
     * it to 1.6.
     *
     * @summary Import Project
     */
    SDK.prototype.importProject = function (body) {
        return this.core.fetch('/projects/import.json', 'post', body);
    };
    /**
     * Import roomplan data (JSON) from Apple's Roomplan API. The body should contain a list of
     * points with windows, walls, objects and openings.
     *
     * @summary Import Apple Roomplan
     */
    SDK.prototype.importRoomplanProject = function (body) {
        return this.core.fetch('/projects/import_roomplan.json', 'post', body);
    };
    /**
     * List 25 deleted projects
     *
     * @summary List 25 last deleted projects
     */
    SDK.prototype.deletedProjects = function () {
        return this.core.fetch('/projects/deleted.json', 'post');
    };
    /**
     * Show a project by id
     *
     * @summary Show Project
     */
    SDK.prototype.showProject = function (metadata) {
        return this.core.fetch('/projects/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}.json', 'post', body, metadata);
    };
    /**
     * Destroy/delete a project by id
     *
     * @summary Destroy/delete Project
     */
    SDK.prototype.destroyProject = function (metadata) {
        return this.core.fetch('/projects/{id}.json', 'delete', metadata);
    };
    SDK.prototype.upgradeProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}/upgrade.json', 'post', body, metadata);
    };
    /**
     * Duplicate a project and respond with duplicated project
     *
     * @summary Duplicate a project
     */
    SDK.prototype.duplicateProject = function (metadata) {
        return this.core.fetch('/projects/{id}/duplicate.json', 'post', metadata);
    };
    SDK.prototype.copyProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}/copy.json', 'post', body, metadata);
    };
    /**
     * This token can be used to embed the editor and only allow access to this specific
     * project
     *
     * @summary Generate project based token
     */
    SDK.prototype.tokenProject = function (metadata) {
        return this.core.fetch('/projects/{id}/token.json', 'get', metadata);
    };
    /**
     * List the products in a project in CSV or JSON format
     *
     * @summary List products
     */
    SDK.prototype.productsProject = function (metadata) {
        return this.core.fetch('/projects/{id}/products.{format}', 'get', metadata);
    };
    /**
     * Download a XML based project FML
     *
     * @summary Download FML XML (Legacy)
     */
    SDK.prototype.downloadProject = function (metadata) {
        return this.core.fetch('/projects/{id}/download.json', 'get', metadata);
    };
    /**
     * Fetch based project FML in JSON format
     *
     * @summary Download FML JSON
     */
    SDK.prototype.fmlProject = function (metadata) {
        return this.core.fetch('/projects/{id}/fml', 'get', metadata);
    };
    SDK.prototype.sharePlannerProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}/share_planner.json', 'post', body, metadata);
    };
    /**
     * Undestroy/recover a project by id
     *
     * @summary Undestroy/recover Project
     */
    SDK.prototype.undestroyProject = function (metadata) {
        return this.core.fetch('/projects/{id}/undestroy.json', 'post', metadata);
    };
    /**
     * List the textures in a project in JSON format
     *
     * @summary List textures
     */
    SDK.prototype.texturesProject = function (metadata) {
        return this.core.fetch('/projects/{id}/textures.json', 'get', metadata);
    };
    /**
     * This API call sends the FML of a project to the cloud and returns a link which can be
     * used to embed the editor specific project
     *
     * @summary Publishes a project
     */
    SDK.prototype.publishProject = function (metadata) {
        return this.core.fetch('/projects/{id}/publish.json', 'post', metadata);
    };
    /**
     * This API call removes the project FML from the cloud and makes it no longer accessible
     *
     * @summary Unpublish a project
     */
    SDK.prototype.unpublishProject = function (metadata) {
        return this.core.fetch('/projects/{id}/unpublish.json', 'delete', metadata);
    };
    /**
     * Enable 3D tour exports (this will require a credit transaction)
     *
     * @summary Enable 3D tour exports for a project
     */
    SDK.prototype.vrtourUpgradeProject = function (metadata) {
        return this.core.fetch('/projects/{id}/vrtour_upgrade.json', 'delete', metadata);
    };
    /**
     * List labels for a project by project id
     *
     * @summary List project labels
     */
    SDK.prototype.listProjectLabels = function (metadata) {
        return this.core.fetch('/projects/{id}/labels.json', 'get', metadata);
    };
    /**
     * Shows detailed information about the lead including exports and products
     *
     * @summary Show data from the lead
     */
    SDK.prototype.showLeadData = function (metadata) {
        return this.core.fetch('/projects/{id}/lead_data.json', 'get', metadata);
    };
    /**
     * Returns measurements for all areas and surfaces in all designs in all floors for a
     * specific project
     *
     * @summary Project measurements
     */
    SDK.prototype.measurementsProject = function (metadata) {
        return this.core.fetch('/projects/{id}/measurements.json', 'get', metadata);
    };
    /**
     * List all permissions of a project
     *
     * @summary List permissions
     */
    SDK.prototype.listProjectPermission = function (metadata) {
        return this.core.fetch('/projects/{project_id}/permissions.json', 'get', metadata);
    };
    SDK.prototype.createProjectPermission = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/permissions.json', 'post', body, metadata);
    };
    /**
     * Returns a specific permission
     *
     * @summary Show permission
     */
    SDK.prototype.showProjectPermission = function (metadata) {
        return this.core.fetch('/projects/{project_id}/permissions/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateProjectPermission = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/permissions/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a permission from a project
     *
     * @summary Remove a permission
     */
    SDK.prototype.destroyProjectPermission = function (metadata) {
        return this.core.fetch('/projects/{project_id}/permissions/{id}.json', 'delete', metadata);
    };
    /**
     * List floors of a project
     *
     * @summary List floors
     */
    SDK.prototype.listFloors = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors.json', 'get', metadata);
    };
    SDK.prototype.createFloor = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors.json', 'post', body, metadata);
    };
    /**
     * List removed floors of a project
     *
     * @summary List removed floors
     */
    SDK.prototype.deletedFloors = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/deleted.json', 'get', metadata);
    };
    /**
     * Recover a removed floor
     *
     * @summary Recover a removed floor
     */
    SDK.prototype.recoverFloor = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/undestroy.json', 'post', metadata);
    };
    /**
     * Returns a specific floor
     *
     * @summary Show floor
     */
    SDK.prototype.showFloor = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateFloor = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a floor
     *
     * @summary Remove a floor
     */
    SDK.prototype.destroyFloor = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{id}.json', 'delete', metadata);
    };
    /**
     * Returns measurements for all areas and surfaces in all designs for a specific floor
     *
     * @summary Floor measurements
     */
    SDK.prototype.measurementsFloor = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{id}/measurements.json', 'get', metadata);
    };
    /**
     * Show drawing
     *
     * @summary Show drawing data
     */
    SDK.prototype.showFloorDrawing = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/drawing.json', 'get', metadata);
    };
    SDK.prototype.createFloorDrawing = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/drawing.json', 'post', body, metadata);
    };
    SDK.prototype.updateFloorDrawing = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/drawing.json', 'put', body, metadata);
    };
    /**
     * Remove a drawing
     *
     * @summary Remove a drawing
     */
    SDK.prototype.destroyFloorDrawing = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/drawing.json', 'delete', metadata);
    };
    /**
     * List cameras of a floor
     *
     * @summary List cameras
     */
    SDK.prototype.listCameras = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras.json', 'get', metadata);
    };
    SDK.prototype.createFloorCamera = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras.json', 'post', body, metadata);
    };
    SDK.prototype.orderFloorCameras = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras/order.json', 'post', body, metadata);
    };
    /**
     * Show camera of a floor
     *
     * @summary Show camera
     */
    SDK.prototype.showFloorCamera = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateFloorCamera = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a camera
     *
     * @summary Remove a camera
     */
    SDK.prototype.destroyFloorCamera = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/cameras/{id}.json', 'delete', metadata);
    };
    /**
     * List designs of a floor
     *
     * @summary List designs
     */
    SDK.prototype.listDesigns = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs.json', 'get', metadata);
    };
    SDK.prototype.createDesign = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs.json', 'post', body, metadata);
    };
    /**
     * List removed designs of a floor
     *
     * @summary List removed designs
     */
    SDK.prototype.deletedDesigns = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/deleted.json', 'get', metadata);
    };
    /**
     * Recover a removed design
     *
     * @summary Recover a removed design
     */
    SDK.prototype.recoverDesign = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/undestroy.json', 'post', metadata);
    };
    /**
     * Returns a specific design
     *
     * @summary Show design
     */
    SDK.prototype.showDesign = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateDesign = function (body, metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a design
     *
     * @summary Remove a design
     */
    SDK.prototype.destroyDesign = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/{id}.json', 'delete', metadata);
    };
    /**
     * Returns measurements for all areas and surfaces in a specific design
     *
     * @summary Design measurements
     */
    SDK.prototype.measurementsDesign = function (metadata) {
        return this.core.fetch('/projects/{project_id}/floors/{floor_id}/designs/{id}/measurements.json', 'get', metadata);
    };
    /**
     * List users
     *
     * @summary List users
     */
    SDK.prototype.listUsers = function () {
        return this.core.fetch('/users.json', 'get');
    };
    /**
     * Add a user to your account
     *
     * @summary Create a sub-user
     */
    SDK.prototype.createUser = function (body) {
        return this.core.fetch('/users.json', 'post', body);
    };
    /**
     * Search users
     *
     * @summary Search users
     */
    SDK.prototype.searchUsers = function (metadata) {
        return this.core.fetch('/users/search.json', 'get', metadata);
    };
    /**
     * Invite user by email
     *
     * @summary Invite a users to become a sub-user
     */
    SDK.prototype.inviteUser = function (body) {
        return this.core.fetch('/users/invite.json', 'post', body);
    };
    /**
     * Invite multiple users by link
     *
     * @summary Invite a user by a link
     */
    SDK.prototype.sharedInviteUser = function () {
        return this.core.fetch('/users/shared_invite.json', 'get');
    };
    /**
     * Returns a specific user
     *
     * @summary Show user
     */
    SDK.prototype.showUser = function (metadata) {
        return this.core.fetch('/users/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateUser = function (body, metadata) {
        return this.core.fetch('/users/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a user
     *
     * @summary Remove a user
     */
    SDK.prototype.destroyUser = function (metadata) {
        return this.core.fetch('/users/{id}.json', 'delete', metadata);
    };
    /**
     * This token can be used to embed the editor and only allow access to this the sub-users
     * data
     *
     * @summary Generate user based token
     */
    SDK.prototype.tokenUser = function (metadata) {
        return this.core.fetch('/users/{id}/token.json', 'get', metadata);
    };
    /**
     * Returns the profile
     *
     * @summary Show user's profile
     */
    SDK.prototype.showProfile = function (metadata) {
        return this.core.fetch('/users/{id}/profile.json', 'get', metadata);
    };
    SDK.prototype.updateProfile = function (body, metadata) {
        return this.core.fetch('/users/{id}/profile.json', 'post', body, metadata);
    };
    /**
     * Returns the company
     *
     * @summary Show company
     */
    SDK.prototype.showCompany = function (metadata) {
        return this.core.fetch('/users/{id}/company.json', 'get', metadata);
    };
    SDK.prototype.updateCompany = function (body, metadata) {
        return this.core.fetch('/users/{id}/company.json', 'post', body, metadata);
    };
    /**
     * List labels for a user by user id
     *
     * @summary List user labels
     */
    SDK.prototype.listUserLabels = function (metadata) {
        return this.core.fetch('/users/{id}/labels.json', 'get', metadata);
    };
    /**
     * List all roles
     *
     * @summary List roles
     */
    SDK.prototype.listRoles = function () {
        return this.core.fetch('/roles.json', 'get');
    };
    /**
     * Add a new user role
     *
     * @summary Create a new role
     */
    SDK.prototype.createRole = function (body) {
        return this.core.fetch('/roles.json', 'post', body);
    };
    /**
     * Returns a specific role
     *
     * @summary Show role
     */
    SDK.prototype.showRole = function (metadata) {
        return this.core.fetch('/roles/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateRole = function (body, metadata) {
        return this.core.fetch('/roles/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a role
     *
     * @summary Remove a role
     */
    SDK.prototype.destroyRole = function (metadata) {
        return this.core.fetch('/roles/{id}.json', 'delete', metadata);
    };
    SDK.prototype.unassignRole = function (body, metadata) {
        return this.core.fetch('/roles/{id}/assign.json', 'post', body, metadata);
    };
    /**
     * List exports last 100 exports
     *
     * @summary List exports
     */
    SDK.prototype.listExport = function () {
        return this.core.fetch('/exports.json', 'get');
    };
    /**
     * Returns a specific export
     *
     * @summary Show export
     */
    SDK.prototype.showExport = function (metadata) {
        return this.core.fetch('/exports/{id}.json', 'get', metadata);
    };
    /**
     * List labels for an export by export id
     *
     * @summary List export labels
     */
    SDK.prototype.listExportLabels = function (metadata) {
        return this.core.fetch('/exports/{id}/labels.json', 'get', metadata);
    };
    /**
     * Search exports
     *
     * @summary Search exports
     */
    SDK.prototype.searchExport = function (metadata) {
        return this.core.fetch('/exports/search.json', 'get', metadata);
    };
    SDK.prototype.exportProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}/export.json', 'post', body, metadata);
    };
    SDK.prototype.exportPanoramaProject = function (body, metadata) {
        return this.core.fetch('/projects/{id}/export_panorama.json', 'post', body, metadata);
    };
    /**
     * List template
     *
     * @summary List templates
     */
    SDK.prototype.listTemplate = function (metadata) {
        return this.core.fetch('/templates.json', 'get', metadata);
    };
    /**
     * Add a template
     *
     * @summary Create a template
     */
    SDK.prototype.createTemplate = function (body) {
        return this.core.fetch('/templates.json', 'post', body);
    };
    /**
     * Returns a specific template
     *
     * @summary Show template
     */
    SDK.prototype.showTemplate = function (metadata) {
        return this.core.fetch('/templates/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateTemplate = function (body, metadata) {
        return this.core.fetch('/templates/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a template
     *
     * @summary Remove a template
     */
    SDK.prototype.destroyTemplate = function (metadata) {
        return this.core.fetch('/templates/{id}.json', 'delete', metadata);
    };
    /**
     * Search leads
     *
     * @summary Search leads
     */
    SDK.prototype.searchLeads = function (metadata) {
        return this.core.fetch('/leads/search.json', 'get', metadata);
    };
    /**
     * Assigns when the user is not assigned to a lead and unassigns the user when it is
     * assigned to the lead
     *
     * @summary Assigns and unassigns a user from a lead
     */
    SDK.prototype.assignLead = function (body) {
        return this.core.fetch('/leads/assign_subuser.json', 'post', body);
    };
    /**
     * Export Leads
     *
     * @summary Export Leads as CSV as JSON
     */
    SDK.prototype.exportLeads = function (metadata) {
        return this.core.fetch('/leads/export.{format}', 'get', metadata);
    };
    /**
     * Remove a lead by id
     *
     * @summary Remove a lead
     */
    SDK.prototype.destroyLoad = function (metadata) {
        return this.core.fetch('/leads/{id}.json', 'delete', metadata);
    };
    /**
     * List sponsorships
     *
     * @summary List sponsorships
     */
    SDK.prototype.listSponsorship = function (metadata) {
        return this.core.fetch('/sponsorships.json', 'get', metadata);
    };
    /**
     * Add a sponsorship
     *
     * @summary Create a sponsorship
     */
    SDK.prototype.createSponsorship = function (body) {
        return this.core.fetch('/sponsorships.json', 'post', body);
    };
    /**
     * Returns a specific sponsorship
     *
     * @summary Show sponsorship
     */
    SDK.prototype.showSponsorship = function (metadata) {
        return this.core.fetch('/sponsorships/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateSponsorship = function (body, metadata) {
        return this.core.fetch('/sponsorships/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a sponsorship
     *
     * @summary Remove a sponsorship
     */
    SDK.prototype.destroySponsorship = function (metadata) {
        return this.core.fetch('/sponsorships/{id}.json', 'delete', metadata);
    };
    /**
     * Creates a sponsorship for existing or non-existing users
     *
     * @summary Create a sponsorship through an invite
     */
    SDK.prototype.createInviteSponsorship = function (body) {
        return this.core.fetch('/sponsorships/invite.json', 'post', body);
    };
    /**
     * List labels by object
     *
     * @summary List labels by object
     */
    SDK.prototype.listLabels = function (metadata) {
        return this.core.fetch('/labels.json', 'get', metadata);
    };
    /**
     * Add a label to an object
     *
     * @summary Add labels to an object
     */
    SDK.prototype.createLabels = function (body) {
        return this.core.fetch('/labels.json', 'post', body);
    };
    /**
     * Remove a label from an object
     *
     * @summary Remove a label from an object
     */
    SDK.prototype.deleteLabels = function (metadata) {
        return this.core.fetch('/labels.json', 'delete', metadata);
    };
    /**
     * List services
     *
     * @summary List services
     */
    SDK.prototype.listServices = function () {
        return this.core.fetch('/services.json', 'get');
    };
    /**
     * List subusers with assigned services
     *
     * @summary List subusers with assigned services
     */
    SDK.prototype.listUserServices = function () {
        return this.core.fetch('/services/users.json', 'get');
    };
    /**
     * Enable usage of a service for a user
     *
     * @summary Connect a user to a service
     */
    SDK.prototype.connectService = function (metadata) {
        return this.core.fetch('/services/{id}/assign.json', 'post', metadata);
    };
    /**
     * Disable a service for a user
     *
     * @summary Disconnect a user from a service
     */
    SDK.prototype.disconnectService = function (metadata) {
        return this.core.fetch('/services/{id}/assign.json', 'delete', metadata);
    };
    /**
     * Product analytics
     *
     * @summary Product analytics
     */
    SDK.prototype.productAnalytics = function (metadata) {
        return this.core.fetch('/reports/product_analytics.json', 'get', metadata);
    };
    /**
     * Popular products by action
     *
     * @summary Popular products by action
     */
    SDK.prototype.popularProductsByAction = function (metadata) {
        return this.core.fetch('/reports/popular_products_by_action.json', 'get', metadata);
    };
    /**
     * List and search styleboards
     *
     * @summary List and search styleboards
     */
    SDK.prototype.listStyleboards = function (metadata) {
        return this.core.fetch('/styleboards.json', 'get', metadata);
    };
    /**
     * Create a styleboard
     *
     * @summary Create Styleboard
     */
    SDK.prototype.createStyleboard = function (body) {
        return this.core.fetch('/styleboards.json', 'post', body);
    };
    /**
     * Show a styleboard by id
     *
     * @summary Show styleboard
     */
    SDK.prototype.showStyleboard = function (metadata) {
        return this.core.fetch('/styleboards/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateStyleboard = function (body, metadata) {
        return this.core.fetch('/styleboards/{id}.json', 'post', body, metadata);
    };
    /**
     * Destroy/delete a styleboard by id
     *
     * @summary Destroy/delete styleboard
     */
    SDK.prototype.destroyStyleboard = function (metadata) {
        return this.core.fetch('/styleboards/{id}.json', 'delete', metadata);
    };
    /**
     * Duplicate a styleboard and respond with duplicated styleboard
     *
     * @summary Duplicate a styleboard
     */
    SDK.prototype.duplicateStyleboard = function (metadata) {
        return this.core.fetch('/styleboards/{id}/duplicate.json', 'post', metadata);
    };
    SDK.prototype.copyStyleboard = function (body, metadata) {
        return this.core.fetch('/styleboards/{id}/copy.json', 'post', body, metadata);
    };
    /**
     * List all permissions of a styleboard
     *
     * @summary List permissions
     */
    SDK.prototype.listStyleboardPermission = function (metadata) {
        return this.core.fetch('/styleboards/{styleboard_id}/permissions.json', 'get', metadata);
    };
    SDK.prototype.createStyleboardPermission = function (body, metadata) {
        return this.core.fetch('/styleboards/{styleboard_id}/permissions.json', 'post', body, metadata);
    };
    /**
     * Returns a specific permission
     *
     * @summary Show permission
     */
    SDK.prototype.showStyleboardPermission = function (metadata) {
        return this.core.fetch('/styleboards/{styleboard_id}/permissions/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateStyleboardPermission = function (body, metadata) {
        return this.core.fetch('/styleboards/{styleboard_id}/permissions/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove a permission from a styleboard
     *
     * @summary Remove a permission
     */
    SDK.prototype.destroyStyleboardPermission = function (metadata) {
        return this.core.fetch('/styleboards/{styleboard_id}/permissions/{id}.json', 'delete', metadata);
    };
    /**
     * List and search documents
     *
     * @summary List and search documents
     */
    SDK.prototype.listDocuments = function (metadata) {
        return this.core.fetch('/documents/search.json', 'get', metadata);
    };
    /**
     * Create a document
     *
     * @summary Create Document
     */
    SDK.prototype.createDocument = function (body) {
        return this.core.fetch('/documents.json', 'post', body);
    };
    /**
     * Remove a document by id
     *
     * @summary Remove document
     */
    SDK.prototype.destroyDocument = function (metadata) {
        return this.core.fetch('/documents/{id}.json', 'delete', metadata);
    };
    /**
     * Search products that are available in the productviewer
     *
     * @summary Search products
     */
    SDK.prototype.searchViewerProducts = function (metadata) {
        return this.core.fetch('/productviewer/search.json', 'get', metadata);
    };
    /**
     * Search room type set
     *
     * @summary Search room type set
     */
    SDK.prototype.searchRoomTypeSet = function (metadata) {
        return this.core.fetch('/room_type_sets/search.json', 'get', metadata);
    };
    /**
     * Create a room type set
     *
     * @summary Create a room type set
     */
    SDK.prototype.createRoomTypeSet = function (body) {
        return this.core.fetch('/room_type_sets.json', 'post', body);
    };
    /**
     * Returns a specific room type set
     *
     * @summary Show room type set
     */
    SDK.prototype.showRoomTypeSet = function (metadata) {
        return this.core.fetch('/room_type_sets/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateRoomTypeSet = function (body, metadata) {
        return this.core.fetch('/room_type_sets/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove room type set
     *
     * @summary Remove room type set
     */
    SDK.prototype.destroyRoomTypeSet = function (metadata) {
        return this.core.fetch('/room_type_sets/{id}.json', 'delete', metadata);
    };
    /**
     * List roomtypes by room type set
     *
     * @summary List roomtypes
     */
    SDK.prototype.listRoomTypes = function (metadata) {
        return this.core.fetch('/room_type_sets/{room_type_set_id}/room_types.json', 'get', metadata);
    };
    SDK.prototype.createRoomType = function (body, metadata) {
        return this.core.fetch('/room_type_sets/{room_type_set_id}/room_types.json', 'post', body, metadata);
    };
    /**
     * Returns a specific room type
     *
     * @summary Show room type
     */
    SDK.prototype.showRoomType = function (metadata) {
        return this.core.fetch('/room_type_sets/{room_type_set_id}/room_types/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateRoomType = function (body, metadata) {
        return this.core.fetch('/room_type_sets/{room_type_set_id}/room_types/{id}.json', 'post', body, metadata);
    };
    /**
     * Remove room type
     *
     * @summary Remove room type
     */
    SDK.prototype.destroyRoomType = function (metadata) {
        return this.core.fetch('/room_type_sets/{room_type_set_id}/room_types/{id}.json', 'delete', metadata);
    };
    /**
     * Show a product by id or SKU
     *
     * @summary Show Product
     */
    SDK.prototype.showProduct = function (metadata) {
        return this.core.fetch('/products/{id}.json', 'get', metadata);
    };
    /**
     * List and search product groups, shows all product groups belonging to current user or
     * for which they have permissions plus shared product groups belonging to account user
     *
     * @summary List and search current user's product groups
     */
    SDK.prototype.listProductGroups = function (metadata) {
        return this.core.fetch('/product_groups.json', 'get', metadata);
    };
    /**
     * Create a product group
     *
     * @summary Create ProductGroup
     */
    SDK.prototype.createProductGroup = function (body) {
        return this.core.fetch('/product_groups.json', 'post', body);
    };
    /**
     * List and search all the account's product groups, shows all product groups belonging to
     * account user, if current user is a subuser they must have a role with manage_products
     * permission
     *
     * @summary List and search account user's product groups
     */
    SDK.prototype.listAdminProductGroups = function (metadata) {
        return this.core.fetch('/product_groups/list_admin.json', 'get', metadata);
    };
    /**
     * Show a product group by id
     *
     * @summary Show product group
     */
    SDK.prototype.showProductGroup = function (metadata) {
        return this.core.fetch('/product_groups/{id}.json', 'get', metadata);
    };
    SDK.prototype.updateProductGroup = function (body, metadata) {
        return this.core.fetch('/product_groups/{id}.json', 'post', body, metadata);
    };
    /**
     * Destroy/delete a product group by id
     *
     * @summary Destroy/delete product group
     */
    SDK.prototype.destroyProductGroup = function (metadata) {
        return this.core.fetch('/product_groups/{id}.json', 'delete', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
