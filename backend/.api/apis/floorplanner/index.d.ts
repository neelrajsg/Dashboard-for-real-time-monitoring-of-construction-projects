import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * List projects
     *
     * @summary List projects
     */
    listProjects(metadata?: types.ListProjectsMetadataParam): Promise<FetchResponse<200, types.ListProjectsResponse200>>;
    /**
     * Create a project
     *
     * @summary Create Project
     */
    createProject(body?: types.CreateProjectBodyParam): Promise<FetchResponse<200, types.CreateProjectResponse200>>;
    /**
     * Search projects
     *
     * @summary Search projects
     */
    searchProjects(metadata?: types.SearchProjectsMetadataParam): Promise<FetchResponse<200, types.SearchProjectsResponse200>>;
    /**
     * Import a project FML (JSON or XML)<br/> **QUIRK**<br>The `x`, `y`, and `z` coordinates
     * must be specified in meters instead of centimeters. To set any coordinate to 160cm set
     * it to 1.6.
     *
     * @summary Import Project
     */
    importProject(body: types.ImportProjectBodyParam): Promise<FetchResponse<200, types.ImportProjectResponse200>>;
    /**
     * Import roomplan data (JSON) from Apple's Roomplan API. The body should contain a list of
     * points with windows, walls, objects and openings.
     *
     * @summary Import Apple Roomplan
     */
    importRoomplanProject(body: types.ImportRoomplanProjectBodyParam): Promise<FetchResponse<200, types.ImportRoomplanProjectResponse200>>;
    /**
     * List 25 deleted projects
     *
     * @summary List 25 last deleted projects
     */
    deletedProjects(): Promise<FetchResponse<200, types.DeletedProjectsResponse200>>;
    /**
     * Show a project by id
     *
     * @summary Show Project
     */
    showProject(metadata: types.ShowProjectMetadataParam): Promise<FetchResponse<200, types.ShowProjectResponse200>>;
    /**
     * Update a project
     *
     * @summary Update Project
     */
    updateProject(body: types.UpdateProjectBodyParam, metadata: types.UpdateProjectMetadataParam): Promise<FetchResponse<200, types.UpdateProjectResponse200>>;
    updateProject(metadata: types.UpdateProjectMetadataParam): Promise<FetchResponse<200, types.UpdateProjectResponse200>>;
    /**
     * Destroy/delete a project by id
     *
     * @summary Destroy/delete Project
     */
    destroyProject(metadata: types.DestroyProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Change the level of a project
     *
     * @summary Upgrade Project
     */
    upgradeProject(body: types.UpgradeProjectBodyParam, metadata: types.UpgradeProjectMetadataParam): Promise<FetchResponse<200, types.UpgradeProjectResponse200>>;
    upgradeProject(metadata: types.UpgradeProjectMetadataParam): Promise<FetchResponse<200, types.UpgradeProjectResponse200>>;
    /**
     * Duplicate a project and respond with duplicated project
     *
     * @summary Duplicate a project
     */
    duplicateProject(metadata: types.DuplicateProjectMetadataParam): Promise<FetchResponse<200, types.DuplicateProjectResponse200>>;
    /**
     * Copy a project to another user and respond with copied project
     *
     * @summary Copy a project to another user
     */
    copyProject(body: types.CopyProjectBodyParam, metadata: types.CopyProjectMetadataParam): Promise<FetchResponse<200, types.CopyProjectResponse200>>;
    copyProject(metadata: types.CopyProjectMetadataParam): Promise<FetchResponse<200, types.CopyProjectResponse200>>;
    /**
     * This token can be used to embed the editor and only allow access to this specific
     * project
     *
     * @summary Generate project based token
     */
    tokenProject(metadata: types.TokenProjectMetadataParam): Promise<FetchResponse<200, types.TokenProjectResponse200>>;
    /**
     * List the products in a project in CSV or JSON format
     *
     * @summary List products
     */
    productsProject(metadata: types.ProductsProjectMetadataParam): Promise<FetchResponse<200, types.ProductsProjectResponse200>>;
    /**
     * Download a XML based project FML
     *
     * @summary Download FML XML (Legacy)
     */
    downloadProject(metadata: types.DownloadProjectMetadataParam): Promise<FetchResponse<200, types.DownloadProjectResponse200>>;
    /**
     * Fetch based project FML in JSON format
     *
     * @summary Download FML JSON
     */
    fmlProject(metadata: types.FmlProjectMetadataParam): Promise<FetchResponse<200, types.FmlProjectResponse200>>;
    /**
     * Share a link to the editor where you can only decorate
     *
     * @summary Generate share link and e-mail
     */
    sharePlannerProject(body: types.SharePlannerProjectBodyParam, metadata: types.SharePlannerProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    sharePlannerProject(metadata: types.SharePlannerProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Undestroy/recover a project by id
     *
     * @summary Undestroy/recover Project
     */
    undestroyProject(metadata: types.UndestroyProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List the textures in a project in JSON format
     *
     * @summary List textures
     */
    texturesProject(metadata: types.TexturesProjectMetadataParam): Promise<FetchResponse<200, types.TexturesProjectResponse200>>;
    /**
     * This API call sends the FML of a project to the cloud and returns a link which can be
     * used to embed the editor specific project
     *
     * @summary Publishes a project
     */
    publishProject(metadata: types.PublishProjectMetadataParam): Promise<FetchResponse<200, types.PublishProjectResponse200>>;
    /**
     * This API call removes the project FML from the cloud and makes it no longer accessible
     *
     * @summary Unpublish a project
     */
    unpublishProject(metadata: types.UnpublishProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Enable 3D tour exports (this will require a credit transaction)
     *
     * @summary Enable 3D tour exports for a project
     */
    vrtourUpgradeProject(metadata: types.VrtourUpgradeProjectMetadataParam): Promise<FetchResponse<200, types.VrtourUpgradeProjectResponse200>>;
    /**
     * List labels for a project by project id
     *
     * @summary List project labels
     */
    listProjectLabels(metadata: types.ListProjectLabelsMetadataParam): Promise<FetchResponse<200, types.ListProjectLabelsResponse200>>;
    /**
     * Shows detailed information about the lead including exports and products
     *
     * @summary Show data from the lead
     */
    showLeadData(metadata: types.ShowLeadDataMetadataParam): Promise<FetchResponse<200, types.ShowLeadDataResponse200>>;
    /**
     * Returns measurements for all areas and surfaces in all designs in all floors for a
     * specific project
     *
     * @summary Project measurements
     */
    measurementsProject(metadata: types.MeasurementsProjectMetadataParam): Promise<FetchResponse<200, types.MeasurementsProjectResponse200>>;
    /**
     * List all permissions of a project
     *
     * @summary List permissions
     */
    listProjectPermission(metadata: types.ListProjectPermissionMetadataParam): Promise<FetchResponse<200, types.ListProjectPermissionResponse200>>;
    /**
     * Add a permission for a user to utilise a project
     *
     * @summary Add a new permission
     */
    createProjectPermission(body: types.CreateProjectPermissionBodyParam, metadata: types.CreateProjectPermissionMetadataParam): Promise<FetchResponse<200, types.CreateProjectPermissionResponse200>>;
    createProjectPermission(metadata: types.CreateProjectPermissionMetadataParam): Promise<FetchResponse<200, types.CreateProjectPermissionResponse200>>;
    /**
     * Returns a specific permission
     *
     * @summary Show permission
     */
    showProjectPermission(metadata: types.ShowProjectPermissionMetadataParam): Promise<FetchResponse<200, types.ShowProjectPermissionResponse200>>;
    /**
     * Update a permission for a user
     *
     * @summary Update a permission
     */
    updateProjectPermission(body: types.UpdateProjectPermissionBodyParam, metadata: types.UpdateProjectPermissionMetadataParam): Promise<FetchResponse<200, types.UpdateProjectPermissionResponse200>>;
    updateProjectPermission(metadata: types.UpdateProjectPermissionMetadataParam): Promise<FetchResponse<200, types.UpdateProjectPermissionResponse200>>;
    /**
     * Remove a permission from a project
     *
     * @summary Remove a permission
     */
    destroyProjectPermission(metadata: types.DestroyProjectPermissionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List floors of a project
     *
     * @summary List floors
     */
    listFloors(metadata: types.ListFloorsMetadataParam): Promise<FetchResponse<200, types.ListFloorsResponse200>>;
    /**
     * Add a floor to the project
     *
     * @summary Create a floor
     */
    createFloor(body: types.CreateFloorBodyParam, metadata: types.CreateFloorMetadataParam): Promise<FetchResponse<200, types.CreateFloorResponse200>>;
    createFloor(metadata: types.CreateFloorMetadataParam): Promise<FetchResponse<200, types.CreateFloorResponse200>>;
    /**
     * List removed floors of a project
     *
     * @summary List removed floors
     */
    deletedFloors(metadata: types.DeletedFloorsMetadataParam): Promise<FetchResponse<200, types.DeletedFloorsResponse200>>;
    /**
     * Recover a removed floor
     *
     * @summary Recover a removed floor
     */
    recoverFloor(metadata: types.RecoverFloorMetadataParam): Promise<FetchResponse<200, types.RecoverFloorResponse200>>;
    /**
     * Returns a specific floor
     *
     * @summary Show floor
     */
    showFloor(metadata: types.ShowFloorMetadataParam): Promise<FetchResponse<200, types.ShowFloorResponse200>>;
    /**
     * Update the contents of a floor
     *
     * @summary Update floor
     */
    updateFloor(body: types.UpdateFloorBodyParam, metadata: types.UpdateFloorMetadataParam): Promise<FetchResponse<200, types.UpdateFloorResponse200>>;
    updateFloor(metadata: types.UpdateFloorMetadataParam): Promise<FetchResponse<200, types.UpdateFloorResponse200>>;
    /**
     * Remove a floor
     *
     * @summary Remove a floor
     */
    destroyFloor(metadata: types.DestroyFloorMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns measurements for all areas and surfaces in all designs for a specific floor
     *
     * @summary Floor measurements
     */
    measurementsFloor(metadata: types.MeasurementsFloorMetadataParam): Promise<FetchResponse<200, types.MeasurementsFloorResponse200>>;
    /**
     * Show drawing
     *
     * @summary Show drawing data
     */
    showFloorDrawing(metadata: types.ShowFloorDrawingMetadataParam): Promise<FetchResponse<200, types.ShowFloorDrawingResponse200>>;
    /**
     * Add a drawing to a floor
     *
     * @summary Create drawing
     */
    createFloorDrawing(body: types.CreateFloorDrawingBodyParam, metadata: types.CreateFloorDrawingMetadataParam): Promise<FetchResponse<200, types.CreateFloorDrawingResponse200>>;
    createFloorDrawing(metadata: types.CreateFloorDrawingMetadataParam): Promise<FetchResponse<200, types.CreateFloorDrawingResponse200>>;
    /**
     * Update the drawing of a floor
     *
     * @summary Update drawing
     */
    updateFloorDrawing(body: types.UpdateFloorDrawingBodyParam, metadata: types.UpdateFloorDrawingMetadataParam): Promise<FetchResponse<200, types.UpdateFloorDrawingResponse200>>;
    updateFloorDrawing(metadata: types.UpdateFloorDrawingMetadataParam): Promise<FetchResponse<200, types.UpdateFloorDrawingResponse200>>;
    /**
     * Remove a drawing
     *
     * @summary Remove a drawing
     */
    destroyFloorDrawing(metadata: types.DestroyFloorDrawingMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List cameras of a floor
     *
     * @summary List cameras
     */
    listCameras(metadata: types.ListCamerasMetadataParam): Promise<FetchResponse<200, types.ListCamerasResponse200>>;
    /**
     * Add a camera to a floor
     *
     * @summary Create camera
     */
    createFloorCamera(body: types.CreateFloorCameraBodyParam, metadata: types.CreateFloorCameraMetadataParam): Promise<FetchResponse<200, types.CreateFloorCameraResponse200>>;
    createFloorCamera(metadata: types.CreateFloorCameraMetadataParam): Promise<FetchResponse<200, types.CreateFloorCameraResponse200>>;
    /**
     * Updates the order of cameras for a floor
     *
     * @summary Update order for cameras
     */
    orderFloorCameras(body: types.OrderFloorCamerasBodyParam, metadata: types.OrderFloorCamerasMetadataParam): Promise<FetchResponse<200, types.OrderFloorCamerasResponse200>>;
    orderFloorCameras(metadata: types.OrderFloorCamerasMetadataParam): Promise<FetchResponse<200, types.OrderFloorCamerasResponse200>>;
    /**
     * Show camera of a floor
     *
     * @summary Show camera
     */
    showFloorCamera(metadata: types.ShowFloorCameraMetadataParam): Promise<FetchResponse<200, types.ShowFloorCameraResponse200>>;
    /**
     * Update the camera
     *
     * @summary Update a camera
     */
    updateFloorCamera(body: types.UpdateFloorCameraBodyParam, metadata: types.UpdateFloorCameraMetadataParam): Promise<FetchResponse<200, types.UpdateFloorCameraResponse200>>;
    updateFloorCamera(metadata: types.UpdateFloorCameraMetadataParam): Promise<FetchResponse<200, types.UpdateFloorCameraResponse200>>;
    /**
     * Remove a camera
     *
     * @summary Remove a camera
     */
    destroyFloorCamera(metadata: types.DestroyFloorCameraMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List designs of a floor
     *
     * @summary List designs
     */
    listDesigns(metadata: types.ListDesignsMetadataParam): Promise<FetchResponse<200, types.ListDesignsResponse200>>;
    /**
     * Add a design to the floor
     *
     * @summary Create a design
     */
    createDesign(body: types.CreateDesignBodyParam, metadata: types.CreateDesignMetadataParam): Promise<FetchResponse<200, types.CreateDesignResponse200>>;
    createDesign(metadata: types.CreateDesignMetadataParam): Promise<FetchResponse<200, types.CreateDesignResponse200>>;
    /**
     * List removed designs of a floor
     *
     * @summary List removed designs
     */
    deletedDesigns(metadata: types.DeletedDesignsMetadataParam): Promise<FetchResponse<200, types.DeletedDesignsResponse200>>;
    /**
     * Recover a removed design
     *
     * @summary Recover a removed design
     */
    recoverDesign(metadata: types.RecoverDesignMetadataParam): Promise<FetchResponse<200, types.RecoverDesignResponse200>>;
    /**
     * Returns a specific design
     *
     * @summary Show design
     */
    showDesign(metadata: types.ShowDesignMetadataParam): Promise<FetchResponse<200, types.ShowDesignResponse200>>;
    /**
     * Update the contents of a design
     *
     * @summary Update design
     */
    updateDesign(body: types.UpdateDesignBodyParam, metadata: types.UpdateDesignMetadataParam): Promise<FetchResponse<200, types.UpdateDesignResponse200>>;
    updateDesign(metadata: types.UpdateDesignMetadataParam): Promise<FetchResponse<200, types.UpdateDesignResponse200>>;
    /**
     * Remove a design
     *
     * @summary Remove a design
     */
    destroyDesign(metadata: types.DestroyDesignMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Returns measurements for all areas and surfaces in a specific design
     *
     * @summary Design measurements
     */
    measurementsDesign(metadata: types.MeasurementsDesignMetadataParam): Promise<FetchResponse<200, types.MeasurementsDesignResponse200>>;
    /**
     * List users
     *
     * @summary List users
     */
    listUsers(): Promise<FetchResponse<200, types.ListUsersResponse200>>;
    /**
     * Add a user to your account
     *
     * @summary Create a sub-user
     */
    createUser(body?: types.CreateUserBodyParam): Promise<FetchResponse<200, types.CreateUserResponse200>>;
    /**
     * Search users
     *
     * @summary Search users
     */
    searchUsers(metadata?: types.SearchUsersMetadataParam): Promise<FetchResponse<200, types.SearchUsersResponse200>>;
    /**
     * Invite user by email
     *
     * @summary Invite a users to become a sub-user
     */
    inviteUser(body?: types.InviteUserBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Invite multiple users by link
     *
     * @summary Invite a user by a link
     */
    sharedInviteUser(): Promise<FetchResponse<200, types.SharedInviteUserResponse200>>;
    /**
     * Returns a specific user
     *
     * @summary Show user
     */
    showUser(metadata: types.ShowUserMetadataParam): Promise<FetchResponse<200, types.ShowUserResponse200>>;
    /**
     * Update the user
     *
     * @summary Update user
     */
    updateUser(body: types.UpdateUserBodyParam, metadata: types.UpdateUserMetadataParam): Promise<FetchResponse<200, types.UpdateUserResponse200>>;
    updateUser(metadata: types.UpdateUserMetadataParam): Promise<FetchResponse<200, types.UpdateUserResponse200>>;
    /**
     * Remove a user
     *
     * @summary Remove a user
     */
    destroyUser(metadata: types.DestroyUserMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This token can be used to embed the editor and only allow access to this the sub-users
     * data
     *
     * @summary Generate user based token
     */
    tokenUser(metadata: types.TokenUserMetadataParam): Promise<FetchResponse<200, types.TokenUserResponse200>>;
    /**
     * Returns the profile
     *
     * @summary Show user's profile
     */
    showProfile(metadata: types.ShowProfileMetadataParam): Promise<FetchResponse<200, types.ShowProfileResponse200>>;
    /**
     * Update the user's profile
     *
     * @summary Update profile
     */
    updateProfile(body: types.UpdateProfileBodyParam, metadata: types.UpdateProfileMetadataParam): Promise<FetchResponse<200, types.UpdateProfileResponse200>>;
    updateProfile(metadata: types.UpdateProfileMetadataParam): Promise<FetchResponse<200, types.UpdateProfileResponse200>>;
    /**
     * Returns the company
     *
     * @summary Show company
     */
    showCompany(metadata: types.ShowCompanyMetadataParam): Promise<FetchResponse<200, types.ShowCompanyResponse200>>;
    /**
     * Update the company
     *
     * @summary Update company
     */
    updateCompany(body: types.UpdateCompanyBodyParam, metadata: types.UpdateCompanyMetadataParam): Promise<FetchResponse<200, types.UpdateCompanyResponse200>>;
    updateCompany(metadata: types.UpdateCompanyMetadataParam): Promise<FetchResponse<200, types.UpdateCompanyResponse200>>;
    /**
     * List labels for a user by user id
     *
     * @summary List user labels
     */
    listUserLabels(metadata: types.ListUserLabelsMetadataParam): Promise<FetchResponse<200, types.ListUserLabelsResponse200>>;
    /**
     * List all roles
     *
     * @summary List roles
     */
    listRoles(): Promise<FetchResponse<200, types.ListRolesResponse200>>;
    /**
     * Add a new user role
     *
     * @summary Create a new role
     */
    createRole(body?: types.CreateRoleBodyParam): Promise<FetchResponse<200, types.CreateRoleResponse200>>;
    /**
     * Returns a specific role
     *
     * @summary Show role
     */
    showRole(metadata: types.ShowRoleMetadataParam): Promise<FetchResponse<200, types.ShowRoleResponse200>>;
    /**
     * Update the role
     *
     * @summary Update a role
     */
    updateRole(body: types.UpdateRoleBodyParam, metadata: types.UpdateRoleMetadataParam): Promise<FetchResponse<200, types.UpdateRoleResponse200>>;
    updateRole(metadata: types.UpdateRoleMetadataParam): Promise<FetchResponse<200, types.UpdateRoleResponse200>>;
    /**
     * Remove a role
     *
     * @summary Remove a role
     */
    destroyRole(metadata: types.DestroyRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Unassign a user's role
     *
     * @summary Remove a role from a user
     */
    unassignRole(body: types.UnassignRoleBodyParam, metadata: types.UnassignRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    unassignRole(metadata: types.UnassignRoleMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List exports last 100 exports
     *
     * @summary List exports
     */
    listExport(): Promise<FetchResponse<200, types.ListExportResponse200>>;
    /**
     * Returns a specific export
     *
     * @summary Show export
     */
    showExport(metadata: types.ShowExportMetadataParam): Promise<FetchResponse<200, types.ShowExportResponse200>>;
    /**
     * List labels for an export by export id
     *
     * @summary List export labels
     */
    listExportLabels(metadata: types.ListExportLabelsMetadataParam): Promise<FetchResponse<200, types.ListExportLabelsResponse200>>;
    /**
     * Search exports
     *
     * @summary Search exports
     */
    searchExport(metadata?: types.SearchExportMetadataParam): Promise<FetchResponse<200, types.SearchExportResponse200>>;
    /**
     * Export a project to 2D / 3D images or Virtual staging. There are lot of options but most
     * of them are not required
     *
     * @summary Export a project
     * @throws FetchError<422, types.ExportProjectResponse422> Throttled
     */
    exportProject(body: types.ExportProjectBodyParam, metadata: types.ExportProjectMetadataParam): Promise<FetchResponse<200, types.ExportProjectResponse200>>;
    exportProject(metadata: types.ExportProjectMetadataParam): Promise<FetchResponse<200, types.ExportProjectResponse200>>;
    /**
     * Creates a panorama based based a specific camera and specific design
     *
     * @summary Export a panorama
     * @throws FetchError<422, types.ExportPanoramaProjectResponse422> Throttled
     */
    exportPanoramaProject(body: types.ExportPanoramaProjectBodyParam, metadata: types.ExportPanoramaProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    exportPanoramaProject(metadata: types.ExportPanoramaProjectMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List template
     *
     * @summary List templates
     */
    listTemplate(metadata?: types.ListTemplateMetadataParam): Promise<FetchResponse<200, types.ListTemplateResponse200>>;
    /**
     * Add a template
     *
     * @summary Create a template
     */
    createTemplate(body?: types.CreateTemplateBodyParam): Promise<FetchResponse<200, types.CreateTemplateResponse200>>;
    /**
     * Returns a specific template
     *
     * @summary Show template
     */
    showTemplate(metadata: types.ShowTemplateMetadataParam): Promise<FetchResponse<200, types.ShowTemplateResponse200>>;
    /**
     * Update the template
     *
     * @summary Update template
     */
    updateTemplate(body: types.UpdateTemplateBodyParam, metadata: types.UpdateTemplateMetadataParam): Promise<FetchResponse<200, types.UpdateTemplateResponse200>>;
    updateTemplate(metadata: types.UpdateTemplateMetadataParam): Promise<FetchResponse<200, types.UpdateTemplateResponse200>>;
    /**
     * Remove a template
     *
     * @summary Remove a template
     */
    destroyTemplate(metadata: types.DestroyTemplateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Search leads
     *
     * @summary Search leads
     */
    searchLeads(metadata?: types.SearchLeadsMetadataParam): Promise<FetchResponse<200, types.SearchLeadsResponse200>>;
    /**
     * Assigns when the user is not assigned to a lead and unassigns the user when it is
     * assigned to the lead
     *
     * @summary Assigns and unassigns a user from a lead
     */
    assignLead(body?: types.AssignLeadBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Export Leads
     *
     * @summary Export Leads as CSV as JSON
     */
    exportLeads(metadata: types.ExportLeadsMetadataParam): Promise<FetchResponse<200, types.ExportLeadsResponse200>>;
    /**
     * Remove a lead by id
     *
     * @summary Remove a lead
     */
    destroyLoad(metadata: types.DestroyLoadMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List sponsorships
     *
     * @summary List sponsorships
     */
    listSponsorship(metadata?: types.ListSponsorshipMetadataParam): Promise<FetchResponse<200, types.ListSponsorshipResponse200>>;
    /**
     * Add a sponsorship
     *
     * @summary Create a sponsorship
     */
    createSponsorship(body?: types.CreateSponsorshipBodyParam): Promise<FetchResponse<200, types.CreateSponsorshipResponse200>>;
    /**
     * Returns a specific sponsorship
     *
     * @summary Show sponsorship
     */
    showSponsorship(metadata: types.ShowSponsorshipMetadataParam): Promise<FetchResponse<200, types.ShowSponsorshipResponse200>>;
    /**
     * Update a sponsorship
     *
     * @summary Update a sponsorship
     */
    updateSponsorship(body: types.UpdateSponsorshipBodyParam, metadata: types.UpdateSponsorshipMetadataParam): Promise<FetchResponse<200, types.UpdateSponsorshipResponse200>>;
    updateSponsorship(metadata: types.UpdateSponsorshipMetadataParam): Promise<FetchResponse<200, types.UpdateSponsorshipResponse200>>;
    /**
     * Remove a sponsorship
     *
     * @summary Remove a sponsorship
     */
    destroySponsorship(metadata: types.DestroySponsorshipMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Creates a sponsorship for existing or non-existing users
     *
     * @summary Create a sponsorship through an invite
     */
    createInviteSponsorship(body?: types.CreateInviteSponsorshipBodyParam): Promise<FetchResponse<200, types.CreateInviteSponsorshipResponse200>>;
    /**
     * List labels by object
     *
     * @summary List labels by object
     */
    listLabels(metadata: types.ListLabelsMetadataParam): Promise<FetchResponse<200, types.ListLabelsResponse200>>;
    /**
     * Add a label to an object
     *
     * @summary Add labels to an object
     */
    createLabels(body?: types.CreateLabelsBodyParam): Promise<FetchResponse<200, types.CreateLabelsResponse200>>;
    /**
     * Remove a label from an object
     *
     * @summary Remove a label from an object
     */
    deleteLabels(metadata: types.DeleteLabelsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List services
     *
     * @summary List services
     */
    listServices(): Promise<FetchResponse<200, types.ListServicesResponse200>>;
    /**
     * List subusers with assigned services
     *
     * @summary List subusers with assigned services
     */
    listUserServices(): Promise<FetchResponse<200, types.ListUserServicesResponse200>>;
    /**
     * Enable usage of a service for a user
     *
     * @summary Connect a user to a service
     */
    connectService(metadata: types.ConnectServiceMetadataParam): Promise<FetchResponse<200, types.ConnectServiceResponse200>>;
    /**
     * Disable a service for a user
     *
     * @summary Disconnect a user from a service
     */
    disconnectService(metadata: types.DisconnectServiceMetadataParam): Promise<FetchResponse<200, types.DisconnectServiceResponse200>>;
    /**
     * Product analytics
     *
     * @summary Product analytics
     */
    productAnalytics(metadata?: types.ProductAnalyticsMetadataParam): Promise<FetchResponse<200, types.ProductAnalyticsResponse200>>;
    /**
     * Popular products by action
     *
     * @summary Popular products by action
     */
    popularProductsByAction(metadata?: types.PopularProductsByActionMetadataParam): Promise<FetchResponse<200, types.PopularProductsByActionResponse200>>;
    /**
     * List and search styleboards
     *
     * @summary List and search styleboards
     */
    listStyleboards(metadata?: types.ListStyleboardsMetadataParam): Promise<FetchResponse<200, types.ListStyleboardsResponse200>>;
    /**
     * Create a styleboard
     *
     * @summary Create Styleboard
     */
    createStyleboard(body?: types.CreateStyleboardBodyParam): Promise<FetchResponse<200, types.CreateStyleboardResponse200>>;
    /**
     * Show a styleboard by id
     *
     * @summary Show styleboard
     */
    showStyleboard(metadata: types.ShowStyleboardMetadataParam): Promise<FetchResponse<200, types.ShowStyleboardResponse200>>;
    /**
     * Update a styleboard
     *
     * @summary Update Styleboard
     */
    updateStyleboard(body: types.UpdateStyleboardBodyParam, metadata: types.UpdateStyleboardMetadataParam): Promise<FetchResponse<200, types.UpdateStyleboardResponse200>>;
    updateStyleboard(metadata: types.UpdateStyleboardMetadataParam): Promise<FetchResponse<200, types.UpdateStyleboardResponse200>>;
    /**
     * Destroy/delete a styleboard by id
     *
     * @summary Destroy/delete styleboard
     */
    destroyStyleboard(metadata: types.DestroyStyleboardMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Duplicate a styleboard and respond with duplicated styleboard
     *
     * @summary Duplicate a styleboard
     */
    duplicateStyleboard(metadata: types.DuplicateStyleboardMetadataParam): Promise<FetchResponse<200, types.DuplicateStyleboardResponse200>>;
    /**
     * Copy a styleboard to another user and respond with copied styleboard
     *
     * @summary Copy a styleboard to another user
     */
    copyStyleboard(body: types.CopyStyleboardBodyParam, metadata: types.CopyStyleboardMetadataParam): Promise<FetchResponse<200, types.CopyStyleboardResponse200>>;
    copyStyleboard(metadata: types.CopyStyleboardMetadataParam): Promise<FetchResponse<200, types.CopyStyleboardResponse200>>;
    /**
     * List all permissions of a styleboard
     *
     * @summary List permissions
     */
    listStyleboardPermission(metadata: types.ListStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.ListStyleboardPermissionResponse200>>;
    /**
     * Add a permission for user/s to utilise a styleboard. An email will be sent to the user/s
     * containing a link to the styleboard and the comment (if provided).
     *
     * @summary Add a new styleboard permission
     */
    createStyleboardPermission(body: types.CreateStyleboardPermissionBodyParam, metadata: types.CreateStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.CreateStyleboardPermissionResponse200>>;
    createStyleboardPermission(metadata: types.CreateStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.CreateStyleboardPermissionResponse200>>;
    /**
     * Returns a specific permission
     *
     * @summary Show permission
     */
    showStyleboardPermission(metadata: types.ShowStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.ShowStyleboardPermissionResponse200>>;
    /**
     * Update a permission for a styleboard
     *
     * @summary Update a permission
     */
    updateStyleboardPermission(body: types.UpdateStyleboardPermissionBodyParam, metadata: types.UpdateStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.UpdateStyleboardPermissionResponse200>>;
    updateStyleboardPermission(metadata: types.UpdateStyleboardPermissionMetadataParam): Promise<FetchResponse<200, types.UpdateStyleboardPermissionResponse200>>;
    /**
     * Remove a permission from a styleboard
     *
     * @summary Remove a permission
     */
    destroyStyleboardPermission(metadata: types.DestroyStyleboardPermissionMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List and search documents
     *
     * @summary List and search documents
     */
    listDocuments(metadata?: types.ListDocumentsMetadataParam): Promise<FetchResponse<200, types.ListDocumentsResponse200>>;
    /**
     * Create a document
     *
     * @summary Create Document
     */
    createDocument(body?: types.CreateDocumentBodyParam): Promise<FetchResponse<200, types.CreateDocumentResponse200>>;
    /**
     * Remove a document by id
     *
     * @summary Remove document
     */
    destroyDocument(metadata: types.DestroyDocumentMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Search products that are available in the productviewer
     *
     * @summary Search products
     */
    searchViewerProducts(metadata?: types.SearchViewerProductsMetadataParam): Promise<FetchResponse<200, types.SearchViewerProductsResponse200>>;
    /**
     * Search room type set
     *
     * @summary Search room type set
     */
    searchRoomTypeSet(metadata?: types.SearchRoomTypeSetMetadataParam): Promise<FetchResponse<200, types.SearchRoomTypeSetResponse200>>;
    /**
     * Create a room type set
     *
     * @summary Create a room type set
     */
    createRoomTypeSet(body?: types.CreateRoomTypeSetBodyParam): Promise<FetchResponse<200, types.CreateRoomTypeSetResponse200>>;
    /**
     * Returns a specific room type set
     *
     * @summary Show room type set
     */
    showRoomTypeSet(metadata: types.ShowRoomTypeSetMetadataParam): Promise<FetchResponse<200, types.ShowRoomTypeSetResponse200>>;
    /**
     * Update the room type set
     *
     * @summary Update room type set
     */
    updateRoomTypeSet(body: types.UpdateRoomTypeSetBodyParam, metadata: types.UpdateRoomTypeSetMetadataParam): Promise<FetchResponse<200, types.UpdateRoomTypeSetResponse200>>;
    updateRoomTypeSet(metadata: types.UpdateRoomTypeSetMetadataParam): Promise<FetchResponse<200, types.UpdateRoomTypeSetResponse200>>;
    /**
     * Remove room type set
     *
     * @summary Remove room type set
     */
    destroyRoomTypeSet(metadata: types.DestroyRoomTypeSetMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List roomtypes by room type set
     *
     * @summary List roomtypes
     */
    listRoomTypes(metadata: types.ListRoomTypesMetadataParam): Promise<FetchResponse<200, types.ListRoomTypesResponse200>>;
    /**
     * Create a room type
     *
     * @summary Create a room type
     */
    createRoomType(body: types.CreateRoomTypeBodyParam, metadata: types.CreateRoomTypeMetadataParam): Promise<FetchResponse<200, types.CreateRoomTypeResponse200>>;
    createRoomType(metadata: types.CreateRoomTypeMetadataParam): Promise<FetchResponse<200, types.CreateRoomTypeResponse200>>;
    /**
     * Returns a specific room type
     *
     * @summary Show room type
     */
    showRoomType(metadata: types.ShowRoomTypeMetadataParam): Promise<FetchResponse<200, types.ShowRoomTypeResponse200>>;
    /**
     * Update the room type
     *
     * @summary Update room type
     */
    updateRoomType(body: types.UpdateRoomTypeBodyParam, metadata: types.UpdateRoomTypeMetadataParam): Promise<FetchResponse<200, types.UpdateRoomTypeResponse200>>;
    updateRoomType(metadata: types.UpdateRoomTypeMetadataParam): Promise<FetchResponse<200, types.UpdateRoomTypeResponse200>>;
    /**
     * Remove room type
     *
     * @summary Remove room type
     */
    destroyRoomType(metadata: types.DestroyRoomTypeMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Show a product by id or SKU
     *
     * @summary Show Product
     */
    showProduct(metadata: types.ShowProductMetadataParam): Promise<FetchResponse<200, types.ShowProductResponse200>>;
    /**
     * List and search product groups, shows all product groups belonging to current user or
     * for which they have permissions plus shared product groups belonging to account user
     *
     * @summary List and search current user's product groups
     */
    listProductGroups(metadata?: types.ListProductGroupsMetadataParam): Promise<FetchResponse<200, types.ListProductGroupsResponse200>>;
    /**
     * Create a product group
     *
     * @summary Create ProductGroup
     */
    createProductGroup(body?: types.CreateProductGroupBodyParam): Promise<FetchResponse<200, types.CreateProductGroupResponse200>>;
    /**
     * List and search all the account's product groups, shows all product groups belonging to
     * account user, if current user is a subuser they must have a role with manage_products
     * permission
     *
     * @summary List and search account user's product groups
     */
    listAdminProductGroups(metadata?: types.ListAdminProductGroupsMetadataParam): Promise<FetchResponse<200, types.ListAdminProductGroupsResponse200>>;
    /**
     * Show a product group by id
     *
     * @summary Show product group
     */
    showProductGroup(metadata: types.ShowProductGroupMetadataParam): Promise<FetchResponse<200, types.ShowProductGroupResponse200>>;
    /**
     * Update a product_group
     *
     * @summary Update ProductGroup
     */
    updateProductGroup(body: types.UpdateProductGroupBodyParam, metadata: types.UpdateProductGroupMetadataParam): Promise<FetchResponse<200, types.UpdateProductGroupResponse200>>;
    updateProductGroup(metadata: types.UpdateProductGroupMetadataParam): Promise<FetchResponse<200, types.UpdateProductGroupResponse200>>;
    /**
     * Destroy/delete a product group by id
     *
     * @summary Destroy/delete product group
     */
    destroyProductGroup(metadata: types.DestroyProductGroupMetadataParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
