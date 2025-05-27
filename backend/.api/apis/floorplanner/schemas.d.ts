declare const AssignLead: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "ID of the lead";
            };
            readonly email: {
                readonly type: "string";
                readonly description: "E-mail of the sub-user";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
};
declare const ConnectService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the service";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["user_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the call";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CopyProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the user you want to send the project to";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CopyStyleboard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the user you want to send the styleboard to";
            };
            readonly message: {
                readonly type: "string";
                readonly description: "The message you wish to include in the notification email to the user";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                    readonly description: "`hidden` `viewable` `shared` `published`";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly role_id: {
                    readonly type: "number";
                };
                readonly thumbnail_url: {
                    readonly type: "string";
                };
                readonly data_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateDesign: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly design: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the design";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly thumb_2d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly thumb_3d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly design_type: {
                    readonly type: "string";
                    readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                    readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                };
                readonly design_hash: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateDocument: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly document: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the document";
                    };
                    readonly file: {
                        readonly type: "object";
                        readonly properties: {
                            readonly data: {
                                readonly type: "string";
                                readonly description: "A base64 encoded string which contains the document";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the document including extension";
                            };
                        };
                    };
                    readonly remote_file_url: {
                        readonly type: "string";
                        readonly description: "URL of the remote file location";
                    };
                    readonly reference_id: {
                        readonly type: "number";
                        readonly description: "The ID of the reference object";
                    };
                    readonly reference_type: {
                        readonly type: "string";
                        readonly enum: readonly ["Styleboard", "Template", "Project::Presentation", "User::Branding"];
                        readonly description: "The class definition of the reference object";
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly description: "Additional meta data object";
                        readonly additionalProperties: true;
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly file: {
                    readonly type: "string";
                };
                readonly reference_id: {
                    readonly type: "number";
                };
                readonly reference_type: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateFloor: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly floor: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the floor";
                    };
                    readonly level: {
                        readonly type: "number";
                        readonly description: "The floor level";
                    };
                    readonly height: {
                        readonly type: "number";
                        readonly description: "Height of the floor";
                    };
                    readonly drawing_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly remote_filename_url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly level: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateFloorCamera: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the camera";
            };
            readonly type_name: {
                readonly type: "string";
                readonly enum: readonly ["walkthrough", "orbital"];
            };
            readonly list_order: {
                readonly type: "number";
                readonly description: "Order of the cameras";
            };
            readonly fov: {
                readonly type: "number";
                readonly description: "Field of view in degrees";
            };
            readonly sky_id: {
                readonly type: "number";
                readonly description: "ID of the Sky image";
            };
            readonly u_vector: {
                readonly type: "string";
                readonly description: "U Vector";
                readonly default: "0.000000 0.000000 0.000000";
            };
            readonly points: {
                readonly type: "string";
                readonly description: "Points are {x,y,z} coordinates in metres";
                readonly default: "0.000000 0.000000 0.000000";
            };
            readonly direction: {
                readonly type: "string";
                readonly description: "Direction is set of normalized values {dx,dy,dz} in range -1..1";
                readonly default: "0 0 0";
            };
            readonly light_settings: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly remote_background_image_url: {
                readonly type: "string";
                readonly description: "A remote url which holds the scenery background image";
            };
            readonly file: {
                readonly type: "object";
                readonly properties: {
                    readonly data: {
                        readonly type: "string";
                        readonly description: "A base64 encoded string which contains the background image";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the background image including extension";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly type_name: {
                    readonly type: "string";
                };
                readonly list_order: {
                    readonly type: "number";
                };
                readonly fov: {
                    readonly type: "number";
                };
                readonly points: {
                    readonly type: "string";
                };
                readonly direction: {
                    readonly type: "string";
                };
                readonly u_vector: {
                    readonly type: "string";
                };
                readonly sky_id: {
                    readonly type: "number";
                };
                readonly background_image: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly light_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly day: {
                            readonly type: "boolean";
                        };
                        readonly intensity: {
                            readonly type: "number";
                        };
                        readonly azimuth: {
                            readonly type: "number";
                        };
                        readonly altitude: {
                            readonly type: "number";
                        };
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateFloorDrawing: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly drawing: {
                readonly type: "object";
                readonly properties: {
                    readonly filename: {
                        readonly type: "string";
                        readonly description: "Uploaded file io, either in png, jpg or pdf format";
                    };
                    readonly remote_filename_url: {
                        readonly type: "string";
                        readonly description: "Remote url location of an image, opposite of filename file io";
                    };
                    readonly placement_width: {
                        readonly type: "number";
                        readonly description: "Size of the drawing in the editor";
                    };
                    readonly placement_height: {
                        readonly type: "number";
                        readonly description: "Size of the drawing in the editor";
                    };
                    readonly alpha: {
                        readonly type: "number";
                        readonly default: 50;
                        readonly description: "Transparency of the drawing in the editor in percentage";
                    };
                    readonly position: {
                        readonly type: "string";
                        readonly default: "0.00 0.00 0.00";
                        readonly description: "Position offset of the drawing in the editor. Only first two values are used, X and Y";
                    };
                    readonly rotation: {
                        readonly type: "string";
                        readonly default: "0.00 0.00 0.00";
                        readonly description: "Rotation of the drawing in the editor";
                    };
                    readonly visible: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly description: "A true or false value for displaying the drawing";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly filename: {
                    readonly type: "string";
                };
                readonly size: {
                    readonly type: "number";
                };
                readonly alpha: {
                    readonly type: "number";
                };
                readonly position: {
                    readonly type: "string";
                };
                readonly rotation: {
                    readonly type: "string";
                };
                readonly visible: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateInviteSponsorship: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sponsorship: {
                readonly type: "object";
                readonly properties: {
                    readonly template_id: {
                        readonly type: "number";
                        readonly description: "ID an existing template";
                    };
                    readonly invite_email: {
                        readonly type: "string";
                        readonly description: "The email of the existing or non-existing user";
                    };
                    readonly projects_given: {
                        readonly type: "number";
                        readonly description: "How many credits the sponsored user will receive";
                    };
                    readonly allowed_project_levels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                            readonly description: "ID of the allowed project level";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly owner_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly projects_given: {
                    readonly type: "number";
                };
                readonly projects_used: {
                    readonly type: "number";
                };
                readonly allowed_project_levels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly invite_email: {
                    readonly type: "string";
                };
                readonly user_email: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateLabels: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly model_name: {
                readonly type: "string";
                readonly description: "The name of the object";
                readonly enum: readonly ["Project", "User", "Export"];
            };
            readonly model_id: {
                readonly type: "number";
                readonly description: "ID of the object";
            };
            readonly label_name: {
                readonly type: "string";
                readonly description: "A new label";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateProductGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly product_group: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the product group";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly enum: readonly ["hidden", "shared"];
                        readonly default: "hidden";
                        readonly description: "The product group state";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "shared"];
                    readonly description: "`hidden` `shared`";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly project: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the project";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Project description";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                        readonly description: "External identifier which must start with a character, not a number and must be unique per project";
                    };
                    readonly creator_email: {
                        readonly type: "string";
                        readonly description: "Add permissions to a project for user with email. (Address must be present in our database)";
                    };
                    readonly enable_vr_tour: {
                        readonly type: "boolean";
                        readonly description: "Automatically adds 3D tour to the project (This requires a credit transaction)";
                    };
                    readonly public: {
                        readonly type: "boolean";
                        readonly description: "Sets the project public or private";
                    };
                    readonly labelings: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A label you want to attach to a project";
                        };
                    };
                    readonly project_template_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly template_id: {
                                readonly type: "number";
                                readonly description: "The ID of the template you would like to use";
                            };
                        };
                    };
                    readonly floors_attributes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the floor";
                                };
                                readonly level: {
                                    readonly type: "number";
                                    readonly description: "The floor level";
                                };
                                readonly height: {
                                    readonly type: "number";
                                    readonly description: "Height of the floor";
                                };
                                readonly drawing_attributes: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly remote_filename_url: {
                                            readonly type: "string";
                                            readonly description: "URL to the background image";
                                        };
                                    };
                                };
                                readonly designs_attributes: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the design";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly location_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly city: {
                                readonly type: "string";
                                readonly description: "The city in which the project is located";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "The country in which the project is located";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "The address at which the project is located";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                                readonly description: "The zipcode in which the project is located";
                            };
                            readonly building: {
                                readonly type: "string";
                                readonly description: "The building in which the project is located";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "The state in which the project is located";
                            };
                            readonly coords: {
                                readonly type: "string";
                                readonly description: "The longitude and latitude at which the project is located, separated by a comma";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateProjectPermission: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
                readonly description: "ID of the user";
            };
            readonly comment: {
                readonly type: "string";
                readonly description: "Additional comment to explain the reason of the permission";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateRole: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
            };
            readonly name: {
                readonly type: "string";
            };
            readonly project_level_id: {
                readonly type: "number";
            };
            readonly upgrade_to_level_id: {
                readonly type: "number";
            };
            readonly room_type_set_id: {
                readonly type: "number";
            };
            readonly template_id: {
                readonly type: "number";
            };
            readonly permissions: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly max_projects: {
                readonly type: "number";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly project_level_id: {
                    readonly type: "number";
                };
                readonly upgrade_to_level_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly permissions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly max_projects: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateRoomType: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly room_type: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of room type";
                    };
                    readonly style: {
                        readonly type: "string";
                        readonly description: "The name of the style";
                    };
                    readonly color: {
                        readonly type: "string";
                        readonly description: "Hexidecimal color code";
                    };
                    readonly material: {
                        readonly type: "string";
                        readonly description: "ID of material";
                    };
                    readonly role: {
                        readonly type: "number";
                        readonly description: "Role of the room";
                    };
                    readonly row_order_position: {
                        readonly type: "number";
                        readonly description: "Position of the room type";
                    };
                    readonly roomstyle_id: {
                        readonly type: "string";
                        readonly description: "Styleboard ID";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly room_type_set_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
            };
            readonly required: readonly ["room_type_set_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly role: {
                    readonly type: "number";
                };
                readonly roomstyle_id: {
                    readonly type: "string";
                    readonly description: "Styleboard ID, no longer a roomstyle ID";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly style: {
                    readonly type: "string";
                };
                readonly material: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly row_order: {
                    readonly type: "number";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateRoomTypeSet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly room_type_set: {
                readonly type: "object";
                readonly properties: {
                    readonly set_name: {
                        readonly type: "string";
                        readonly description: "The name of room type set";
                    };
                    readonly room_types_attributes: {
                        readonly type: "array";
                        readonly description: "A list of room types";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "number";
                                };
                                readonly user_id: {
                                    readonly type: "number";
                                };
                                readonly room_type_set_id: {
                                    readonly type: "number";
                                };
                                readonly role: {
                                    readonly type: "number";
                                };
                                readonly roomstyle_id: {
                                    readonly type: "string";
                                    readonly description: "Styleboard ID, no longer a roomstyle ID";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly style: {
                                    readonly type: "string";
                                };
                                readonly material: {
                                    readonly type: "string";
                                };
                                readonly color: {
                                    readonly type: "string";
                                };
                                readonly row_order: {
                                    readonly type: "number";
                                };
                                readonly deleted_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly is_default: {
                    readonly type: "boolean";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly set_name: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly room_type_set_id: {
                                readonly type: "number";
                            };
                            readonly role: {
                                readonly type: "number";
                            };
                            readonly roomstyle_id: {
                                readonly type: "string";
                                readonly description: "Styleboard ID, no longer a roomstyle ID";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly style: {
                                readonly type: "string";
                            };
                            readonly material: {
                                readonly type: "string";
                            };
                            readonly color: {
                                readonly type: "string";
                            };
                            readonly row_order: {
                                readonly type: "number";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateSponsorship: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sponsorship: {
                readonly type: "object";
                readonly properties: {
                    readonly template_id: {
                        readonly type: "number";
                        readonly description: "ID an existing template";
                    };
                    readonly user_id: {
                        readonly type: "number";
                        readonly description: "The ID of the user that needs the sponsorship";
                    };
                    readonly projects_given: {
                        readonly type: "number";
                        readonly description: "How many projects the sponsored user will receive";
                    };
                    readonly allowed_project_levels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                            readonly description: "ID of the allowed project level";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly owner_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly projects_given: {
                    readonly type: "number";
                };
                readonly projects_used: {
                    readonly type: "number";
                };
                readonly allowed_project_levels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly invite_email: {
                    readonly type: "string";
                };
                readonly user_email: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateStyleboard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly styleboard: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the styleboard";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                        readonly default: "hidden";
                        readonly description: "The styleboard state";
                    };
                    readonly role_id: {
                        readonly type: "number";
                        readonly description: "The room role ID";
                    };
                    readonly level_id: {
                        readonly type: "number";
                        readonly description: "The level ID of the styleboard";
                    };
                    readonly thumbnail: {
                        readonly type: "string";
                        readonly description: "The base64 encoded representation of a PNG image";
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly description: "JSON object of the styleboard";
                        readonly additionalProperties: true;
                    };
                    readonly labelings: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A label you want to attach to a styleboard";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                    readonly description: "`hidden` `viewable` `shared` `published`";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly role_id: {
                    readonly type: "number";
                };
                readonly thumbnail_url: {
                    readonly type: "string";
                };
                readonly data_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateStyleboardPermission: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly permission: {
                readonly type: "object";
                readonly properties: {
                    readonly emails: {
                        readonly type: "string";
                        readonly description: "Comma separated list of emails for the users which will have the permission granted, users must exist in floorplanner database";
                    };
                    readonly comment: {
                        readonly type: "string";
                        readonly description: "Additional comment to explain the reason of the permission";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly styleboard_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["styleboard_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly styleboard_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly can_view: {
                    readonly type: "boolean";
                };
                readonly can_edit: {
                    readonly type: "boolean";
                };
                readonly can_delete: {
                    readonly type: "boolean";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly is_owner: {
                    readonly type: "boolean";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTemplate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly template: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Name of the template";
                    };
                    readonly settings: {
                        readonly type: "object";
                        readonly properties: {
                            readonly font: {
                                readonly type: "string";
                                readonly description: "Font face used in the editor";
                            };
                            readonly showIntro: {
                                readonly type: "boolean";
                                readonly description: "Boolean for showing intro in editor";
                            };
                            readonly introMagicLayout: {
                                readonly type: "boolean";
                                readonly description: "Enable/disable showing magic layout in intro";
                            };
                            readonly introOwnRoomstyles: {
                                readonly type: "boolean";
                                readonly description: "Enable/disable showing roomstyles in intro";
                            };
                            readonly useMetric: {
                                readonly type: "boolean";
                                readonly description: "Use metric of imperial system by default";
                            };
                            readonly scaleMultiplierDimensions: {
                                readonly type: "number";
                                readonly description: "Scale the labels by multiplier";
                            };
                            readonly scaleMultiplierComments: {
                                readonly type: "number";
                                readonly description: "Scale comments by multiplier";
                            };
                            readonly areaLabelMultiplier: {
                                readonly type: "number";
                                readonly description: "Scale the area labels by multiplier";
                            };
                            readonly roomTypeSet: {
                                readonly type: "array";
                                readonly description: "List of Room Type Sets available in editor";
                                readonly items: {
                                    readonly type: "number";
                                };
                            };
                            readonly exports: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly backgrounds: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly floorplanPortrait: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly backgroundImage: {
                                                        readonly type: "string";
                                                        readonly description: "URL to a background image";
                                                    };
                                                    readonly margins: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly top: {
                                                                readonly type: "number";
                                                            };
                                                            readonly right: {
                                                                readonly type: "number";
                                                            };
                                                            readonly bottom: {
                                                                readonly type: "number";
                                                            };
                                                            readonly left: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly floorplanLandscape: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly backgroundImage: {
                                                        readonly type: "string";
                                                        readonly description: "URL to a background image";
                                                    };
                                                    readonly margins: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly top: {
                                                                readonly type: "number";
                                                            };
                                                            readonly right: {
                                                                readonly type: "number";
                                                            };
                                                            readonly bottom: {
                                                                readonly type: "number";
                                                            };
                                                            readonly left: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly dimensions: {
                                        readonly type: "string";
                                        readonly description: "dimensions of the export";
                                    };
                                    readonly disclaimer: {
                                        readonly type: "string";
                                        readonly description: "disclaimer text";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "default callback in editor dialog";
                                    };
                                    readonly logoUrl: {
                                        readonly type: "string";
                                        readonly description: "URL to a logo";
                                    };
                                    readonly north: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                            };
                                            readonly type: {
                                                readonly type: "number";
                                                readonly description: "North arrow type";
                                                readonly enum: readonly [1, 2, 3, 4];
                                            };
                                            readonly corner: {
                                                readonly type: "string";
                                                readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                                readonly description: "position of the north arrow, bottom-Left, bottom-right, top-left and top-right";
                                            };
                                            readonly size: {
                                                readonly type: "number";
                                                readonly description: "Size of the north arrow";
                                            };
                                        };
                                    };
                                    readonly logo3D: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "URL to logo for 3d exports";
                                            };
                                            readonly corner: {
                                                readonly type: "string";
                                                readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                                readonly description: "position of the logo, bottom-Left, bottom-right, top-left and top-right";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly useSection3D: {
                                readonly type: "boolean";
                                readonly description: "Use section in 3d";
                            };
                            readonly wallSectionHeight: {
                                readonly type: "number";
                                readonly description: "Wall section height";
                            };
                            readonly wallThickness: {
                                readonly type: "number";
                                readonly description: "Default wall thickness";
                            };
                            readonly wallOuterThickness: {
                                readonly type: "number";
                                readonly description: "Default wall thickness outside a room";
                            };
                            readonly wallTopColor2D: {
                                readonly type: "string";
                                readonly description: "Color of the wall on top in 2d";
                            };
                            readonly wallTopColor3D: {
                                readonly type: "string";
                                readonly description: "Color of the wall on top in 3d";
                            };
                            readonly blueprintBGColor: {
                                readonly type: "string";
                                readonly description: "Color of the wall on in blueprint mode";
                            };
                            readonly showObjects: {
                                readonly type: "boolean";
                                readonly description: "Display or hide objects";
                            };
                            readonly showObjectColour: {
                                readonly type: "boolean";
                                readonly description: "Show or hide object colours";
                            };
                            readonly showItemOutline: {
                                readonly type: "boolean";
                                readonly description: "Show or hide item outlines";
                            };
                            readonly showStructuralColour: {
                                readonly type: "boolean";
                                readonly description: "Show or hide structural colours";
                            };
                            readonly showFixtures: {
                                readonly type: "boolean";
                                readonly description: "Show or hide fixtures";
                            };
                            readonly showDropShadows: {
                                readonly type: "boolean";
                                readonly description: "Show drop shadows on objects";
                            };
                            readonly showLights: {
                                readonly type: "boolean";
                                readonly description: "Show or hide lights";
                            };
                            readonly showLabels: {
                                readonly type: "boolean";
                                readonly description: "Show or hide labels";
                            };
                            readonly showDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide dimensions";
                            };
                            readonly showAreaDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide area dimensions";
                            };
                            readonly showShortDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide short dimensions";
                            };
                            readonly showSymbols: {
                                readonly type: "boolean";
                                readonly description: "Show or hide symbols";
                            };
                            readonly dimLineLabelHorizontal: {
                                readonly type: "boolean";
                                readonly description: "Show dimension label horizontal";
                            };
                            readonly highResolutionRenderer: {
                                readonly type: "boolean";
                                readonly description: "Use high resolution renderer";
                            };
                            readonly tour: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly logo_image: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Remote URL to a logo for 3d tours";
                                            };
                                        };
                                    };
                                    readonly "background-color": {
                                        readonly type: "string";
                                        readonly description: "Tour background color in loading screen";
                                    };
                                    readonly project_name: {
                                        readonly type: "boolean";
                                        readonly description: "Show project name in tour preloader";
                                    };
                                    readonly project_creator: {
                                        readonly type: "boolean";
                                        readonly description: "Show project creator in tour preloader";
                                    };
                                    readonly project_location: {
                                        readonly type: "boolean";
                                        readonly description: "Show project location in tour preloader";
                                    };
                                    readonly project_last_updated: {
                                        readonly type: "boolean";
                                        readonly description: "Show project last updated date in tour preloader";
                                    };
                                    readonly font_family: {
                                        readonly type: "string";
                                        readonly description: "Use specific font in tour preloader";
                                    };
                                    readonly font_color: {
                                        readonly type: "string";
                                        readonly description: "Font color used on tour preloader";
                                    };
                                };
                            };
                            readonly prestation: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly background: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Remote URL to a logo on the presentation";
                                            };
                                        };
                                    };
                                    readonly margins: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly top: {
                                                readonly type: "number";
                                            };
                                            readonly right: {
                                                readonly type: "number";
                                            };
                                            readonly bottom: {
                                                readonly type: "number";
                                            };
                                            readonly left: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                    readonly includePageNumber: {
                                        readonly type: "boolean";
                                        readonly description: "Show pages numbers in presentation";
                                    };
                                    readonly pageTitleSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family on the title page";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color on the title page";
                                            };
                                            readonly fontSize: {
                                                readonly type: "string";
                                                readonly description: "Font size on the title page";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Title position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly pageNumberSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family of page numbers";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color of page numbers";
                                            };
                                            readonly fontSize: {
                                                readonly type: "number";
                                                readonly description: "Font size of page numbers";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Page number position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly pageDisclaimerSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family of the disclaimer";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color of the disclaimer";
                                            };
                                            readonly fontSize: {
                                                readonly type: "number";
                                                readonly description: "Font size of the disclaimer";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Disclaimer position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly text: {
                                                readonly type: "string";
                                                readonly description: "The disclaimer text";
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly xRayWalls: {
                                readonly type: "boolean";
                                readonly description: "X-ray wall on/off";
                            };
                            readonly showCeilings3D: {
                                readonly type: "boolean";
                                readonly description: "Show or hide ceilings in 3d";
                            };
                            readonly showShadows3D: {
                                readonly type: "boolean";
                                readonly description: "Show or hide shadows in 3d";
                            };
                            readonly showFloorsBelow: {
                                readonly type: "boolean";
                                readonly description: "Show or hide floors below";
                            };
                            readonly explodeDistance: {
                                readonly type: "number";
                                readonly description: "Explode distance";
                            };
                            readonly areaLabelLetterSpacing: {
                                readonly type: "number";
                                readonly description: "Distance between characters in area labels";
                            };
                            readonly areaLabelOutline: {
                                readonly type: "boolean";
                                readonly description: "Show/hide area label text outlines";
                            };
                            readonly hideItemsAbove: {
                                readonly type: "boolean";
                                readonly description: "Hide items above each other";
                            };
                            readonly hideItemsAboveHeight: {
                                readonly type: "number";
                                readonly description: "Hide items above a certain height";
                            };
                            readonly engineAutoDims: {
                                readonly type: "boolean";
                                readonly description: "Generate dimensions automatically";
                            };
                            readonly generateOuterDimension: {
                                readonly type: "boolean";
                                readonly description: "Generate outer dimensions automatically";
                            };
                            readonly arrowHeadType: {
                                readonly type: "string";
                                readonly description: "Arrow head type";
                                readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly font: {
                    readonly type: "string";
                };
                readonly showIntro: {
                    readonly type: "boolean";
                };
                readonly introMagicLayout: {
                    readonly type: "boolean";
                };
                readonly introOwnRoomstyles: {
                    readonly type: "boolean";
                };
                readonly useMetric: {
                    readonly type: "boolean";
                };
                readonly scaleMultiplierDimensions: {
                    readonly type: "number";
                };
                readonly scaleMultiplierComments: {
                    readonly type: "number";
                };
                readonly areaLabelMultiplier: {
                    readonly type: "number";
                };
                readonly roomTypeSet: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly exports: {
                    readonly type: "object";
                    readonly properties: {
                        readonly backgrounds: {
                            readonly type: "object";
                            readonly properties: {
                                readonly floorplanPortrait: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly floorplanLandscape: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly dimensions: {
                            readonly type: "string";
                        };
                        readonly disclaimer: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly logoUrl: {
                            readonly type: "string";
                        };
                        readonly north: {
                            readonly type: "object";
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                };
                                readonly type: {
                                    readonly type: "number";
                                    readonly enum: readonly [1, 2, 3, 4];
                                    readonly description: "`1` `2` `3` `4`";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                                readonly size: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly logo3D: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                            };
                        };
                    };
                };
                readonly useSection3D: {
                    readonly type: "boolean";
                };
                readonly wallSectionHeight: {
                    readonly type: "number";
                };
                readonly wallThickness: {
                    readonly type: "number";
                };
                readonly wallOuterThickness: {
                    readonly type: "number";
                };
                readonly wallTopColor2D: {
                    readonly type: "string";
                };
                readonly wallTopColor3D: {
                    readonly type: "string";
                };
                readonly blueprintBGColor: {
                    readonly type: "string";
                };
                readonly showObjects: {
                    readonly type: "boolean";
                };
                readonly showObjectColour: {
                    readonly type: "boolean";
                };
                readonly showItemOutline: {
                    readonly type: "boolean";
                };
                readonly showStructuralColour: {
                    readonly type: "boolean";
                };
                readonly showFixtures: {
                    readonly type: "boolean";
                };
                readonly showDropShadows: {
                    readonly type: "boolean";
                };
                readonly showLights: {
                    readonly type: "boolean";
                };
                readonly showLabels: {
                    readonly type: "boolean";
                };
                readonly showDims: {
                    readonly type: "boolean";
                };
                readonly showAreaDims: {
                    readonly type: "boolean";
                };
                readonly showShortDims: {
                    readonly type: "boolean";
                };
                readonly showSymbols: {
                    readonly type: "boolean";
                };
                readonly dimLineLabelHorizontal: {
                    readonly type: "boolean";
                };
                readonly highResolutionRenderer: {
                    readonly type: "boolean";
                };
                readonly tour: {
                    readonly type: "object";
                    readonly properties: {
                        readonly logo_image: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly "background-color": {
                            readonly type: "string";
                        };
                        readonly project_name: {
                            readonly type: "boolean";
                        };
                        readonly project_creator: {
                            readonly type: "boolean";
                        };
                        readonly project_location: {
                            readonly type: "boolean";
                        };
                        readonly project_last_updated: {
                            readonly type: "boolean";
                        };
                        readonly font_family: {
                            readonly type: "string";
                        };
                        readonly font_color: {
                            readonly type: "string";
                        };
                    };
                };
                readonly prestation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly background: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly margins: {
                            readonly type: "object";
                            readonly properties: {
                                readonly top: {
                                    readonly type: "number";
                                };
                                readonly right: {
                                    readonly type: "number";
                                };
                                readonly bottom: {
                                    readonly type: "number";
                                };
                                readonly left: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly includePageNumber: {
                            readonly type: "boolean";
                        };
                        readonly pageTitleSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "string";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageNumberSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageDisclaimerSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly text: {
                                    readonly type: "string";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly xRayWalls: {
                    readonly type: "boolean";
                };
                readonly showCeilings3D: {
                    readonly type: "boolean";
                };
                readonly showShadows3D: {
                    readonly type: "boolean";
                };
                readonly showFloorsBelow: {
                    readonly type: "boolean";
                };
                readonly explodeDistance: {
                    readonly type: "number";
                };
                readonly areaLabelLetterSpacing: {
                    readonly type: "number";
                };
                readonly areaLabelOutline: {
                    readonly type: "boolean";
                };
                readonly hideItemsAbove: {
                    readonly type: "boolean";
                };
                readonly hideItemsAboveHeight: {
                    readonly type: "number";
                };
                readonly engineAutoDims: {
                    readonly type: "boolean";
                };
                readonly generateOuterDimension: {
                    readonly type: "boolean";
                };
                readonly arrowHeadType: {
                    readonly type: "string";
                    readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                    readonly description: "`arrow reverse-arrow arrow-top reverse-arrow-top`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user: {
                readonly type: "object";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                        readonly description: "The email of the user";
                    };
                    readonly password: {
                        readonly type: "string";
                        readonly description: "Set a password";
                    };
                    readonly password_confirmation: {
                        readonly type: "string";
                        readonly description: "Confirmation of the password";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                        readonly description: "External ID of the user, needs to start with a string";
                    };
                    readonly profile_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly username: {
                                readonly type: "string";
                            };
                            readonly avatar: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly firstname: {
                                readonly type: "string";
                            };
                            readonly lastname: {
                                readonly type: "string";
                            };
                            readonly gender: {
                                readonly type: "string";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly type: "string";
                            };
                            readonly measurements: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly type: "string";
                            };
                            readonly building: {
                                readonly type: "string";
                            };
                            readonly country_code: {
                                readonly type: "string";
                            };
                            readonly phonenumber: {
                                readonly type: "string";
                            };
                            readonly phone_country: {
                                readonly type: "string";
                            };
                            readonly birthdate: {
                                readonly type: "string";
                            };
                            readonly website: {
                                readonly type: "string";
                            };
                            readonly currency: {
                                readonly type: "string";
                            };
                            readonly newsletter: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly parent_id: {
                    readonly type: "number";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
                readonly features: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly model_name: {
                    readonly type: "string";
                    readonly enum: readonly ["Project", "User", "Export"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the object";
                };
                readonly model_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the object";
                };
                readonly label_name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the label";
                };
            };
            readonly required: readonly ["model_name", "model_id", "label_name"];
        }];
    };
};
declare const DeletedDesigns: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly floor_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly thumb_2d_generated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly thumb_3d_generated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly design_type: {
                        readonly type: "string";
                        readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                        readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                    };
                    readonly design_hash: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeletedFloors: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly level: {
                        readonly type: "number";
                    };
                    readonly height: {
                        readonly type: "number";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeletedProjects: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "Deleted project";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly level_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly project_url: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly enable_autosave: {
                        readonly type: "boolean";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                    };
                    readonly exported_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly public: {
                        readonly type: "boolean";
                    };
                    readonly floors: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "number";
                                };
                                readonly project_id: {
                                    readonly type: "number";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly level: {
                                    readonly type: "number";
                                };
                                readonly height: {
                                    readonly type: "number";
                                };
                                readonly created_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly updated_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                                readonly designs: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "number";
                                            };
                                            readonly floor_id: {
                                                readonly type: "number";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly thumb_2d_generated_at: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly thumb_3d_generated_at: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly user_id: {
                                                readonly type: "number";
                                            };
                                            readonly design_type: {
                                                readonly type: "string";
                                                readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                                readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                            };
                                            readonly design_hash: {
                                                readonly type: "string";
                                            };
                                            readonly created_at: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                            readonly updated_at: {
                                                readonly type: "string";
                                                readonly format: "date-time";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DestroyDesign: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the design";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
};
declare const DestroyDocument: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the document";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyFloor: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
};
declare const DestroyFloorCamera: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the camera";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
};
declare const DestroyFloorDrawing: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
};
declare const DestroyLoad: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the lead";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyProductGroup: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the product group";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyProjectPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
};
declare const DestroyRole: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the role";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyRoomType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly room_type_set_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type";
                };
            };
            readonly required: readonly ["room_type_set_id", "id"];
        }];
    };
};
declare const DestroyRoomTypeSet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroySponsorship: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the sponsorship";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyStyleboard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyStyleboardPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly styleboard_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["styleboard_id", "id"];
        }];
    };
};
declare const DestroyTemplate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the template";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DestroyUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const DisconnectService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the service";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["user_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the call";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DownloadProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DuplicateProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DuplicateStyleboard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                    readonly description: "`hidden` `viewable` `shared` `published`";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly role_id: {
                    readonly type: "number";
                };
                readonly thumbnail_url: {
                    readonly type: "string";
                };
                readonly data_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ExportLeads: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["csv", "json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Export leads format";
                };
            };
            readonly required: readonly ["format"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly from: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
                readonly to: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_branding_id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly design_id: {
                                readonly type: "number";
                            };
                            readonly hash_id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly email: {
                                readonly type: "string";
                            };
                            readonly country: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly phonenumber: {
                                readonly type: "string";
                            };
                            readonly contact_time: {
                                readonly type: "string";
                            };
                            readonly contact_method: {
                                readonly type: "string";
                            };
                            readonly message: {
                                readonly type: "string";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly project_token: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ExportPanoramaProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly designs: {
                readonly type: "array";
                readonly description: "A design id inside an array";
                readonly items: {
                    readonly type: "number";
                };
            };
            readonly fmt: {
                readonly type: "array";
                readonly description: "Format of the export";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["jpg"];
                };
            };
            readonly width: {
                readonly type: "number";
                readonly description: "Width of the panorama";
            };
            readonly height: {
                readonly type: "number";
                readonly description: "Height of the panorama";
            };
            readonly type: {
                readonly type: "string";
                readonly enum: readonly ["3d"];
            };
            readonly views: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["panorama", "stereo"];
                            readonly description: "One of 'Panorama' or 'Stereo', (for left and right use 'panorama')";
                        };
                        readonly camera_id: {
                            readonly type: "number";
                            readonly description: "ID of the camera";
                        };
                    };
                };
            };
            readonly callback: {
                readonly type: "string";
                readonly description: "Specify a http endpoint or valid email address";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly throttled: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly description: "Throttle message";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ExportProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly designs: {
                readonly type: "array";
                readonly description: "A design id inside an array";
                readonly items: {
                    readonly type: "number";
                };
            };
            readonly fmt: {
                readonly type: "array";
                readonly description: "Format of the export";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                };
            };
            readonly width: {
                readonly type: "number";
                readonly description: "Width of the panorama";
            };
            readonly height: {
                readonly type: "number";
                readonly description: "Height of the panorama";
            };
            readonly type: {
                readonly type: "string";
                readonly description: "Type of export, baked is virtual staging and mesh is a 3D object in GLB format";
                readonly enum: readonly ["2d", "3d", "3d_iray", "photo_iray", "panorama_iray", "stereo_iray", "photo", "panorama", "stereo", "baked", "mesh"];
            };
            readonly disclaimer: {
                readonly type: "object";
                readonly properties: {
                    readonly text: {
                        readonly type: "string";
                        readonly description: "Text of the disclaimer";
                    };
                    readonly size: {
                        readonly type: "number";
                        readonly description: "Text size of the disclaimer";
                    };
                };
            };
            readonly paper: {
                readonly type: "object";
                readonly properties: {
                    readonly combine: {
                        readonly type: "boolean";
                        readonly description: "A boolean value to choose between merging the export on one page or exporting multiple pages";
                    };
                    readonly stamp_names: {
                        readonly type: "boolean";
                        readonly description: "A boolean value to show or hide the name of the floor on the export.";
                        readonly default: false;
                    };
                    readonly orientation: {
                        readonly type: "string";
                        readonly enum: readonly ["landscape", "portrait"];
                        readonly description: "Either landscape or portrait, orientation of the export";
                        readonly default: "landscape";
                    };
                    readonly size: {
                        readonly type: "string";
                        readonly description: "One of A4, A3, A2, A1, A0, LETTER, LEGAL - overrides width and height when used with fmt of pdf";
                        readonly enum: readonly ["A4", "A3", "A2", "A1", "A0", "LETTER", "LEGAL"];
                    };
                    readonly scale: {
                        readonly type: "number";
                        readonly description: "Use a fixed scale, either 50, 100, 200 or 500, the value represents a scale of 1:[N] where [N] is the supplied integer. Only available for fmt of pdf, default auto (auto fit)";
                        readonly enum: readonly [50, 100, 200, 500];
                    };
                    readonly fit: {
                        readonly type: "boolean";
                        readonly description: "By default all the designs of a project will have the same scale. If you want to scale all the design to fit the paper set this param to true";
                        readonly default: false;
                    };
                    readonly background_image: {
                        readonly type: "string";
                        readonly description: "Specify the URL of a background image";
                    };
                    readonly north: {
                        readonly type: "object";
                        readonly properties: {
                            readonly url: {
                                readonly type: "string";
                                readonly description: "Specify the URL of a custom north arrow image";
                            };
                            readonly size: {
                                readonly type: "number";
                                readonly description: "Specify the size of the compass, default 15";
                            };
                            readonly corner: {
                                readonly type: "string";
                                readonly description: "Specify the corner of the compass. Bottom positions: BL, BC, BR. Top positions: TL, TC, TR";
                                readonly enum: readonly ["BL", "BC", "BR", "TL", "TC", "TR"];
                            };
                        };
                    };
                    readonly logo3d: {
                        readonly type: "object";
                        readonly properties: {
                            readonly url: {
                                readonly type: "string";
                                readonly description: "Specify the URL of a custom logo";
                            };
                            readonly position: {
                                readonly type: "string";
                                readonly description: "Specify the position of the logo. Bottom positions: BL, BC, BR. Top positions: TL, TC, TR";
                                readonly enum: readonly ["BL", "BC", "BR", "TL", "TC", "TR"];
                            };
                            readonly scale: {
                                readonly type: "number";
                                readonly description: "Specify the scale of the logo. Quirck: the value 1 is used for auto scaling, please use 0.99 instead";
                            };
                        };
                    };
                    readonly logo: {
                        readonly type: "object";
                        readonly properties: {
                            readonly url: {
                                readonly type: "string";
                                readonly description: "Specify the URL of a custom logo";
                            };
                            readonly position: {
                                readonly type: "string";
                                readonly description: "Specify the position of the logo. Bottom positions: BL, BC, BR. Top positions: TL, TC, TR";
                                readonly enum: readonly ["BL", "BC", "BR", "TL", "TC", "TR"];
                            };
                            readonly scale: {
                                readonly type: "number";
                                readonly description: "Specify the scale of the logo. Quirck: the value 1 is used for auto scaling, please use 0.99 instead";
                            };
                        };
                    };
                    readonly margins: {
                        readonly type: "object";
                        readonly properties: {
                            readonly top: {
                                readonly type: "number";
                                readonly default: 15;
                                readonly description: "Specify top margin in mm";
                            };
                            readonly left: {
                                readonly type: "number";
                                readonly default: 15;
                                readonly description: "Specify left margin in mm";
                            };
                            readonly bottom: {
                                readonly type: "number";
                                readonly default: 15;
                                readonly description: "Specify bottom margin in mm";
                            };
                            readonly right: {
                                readonly type: "number";
                                readonly default: 15;
                                readonly description: "Specify right margin in mm";
                            };
                        };
                    };
                    readonly scalebar: {
                        readonly type: "object";
                        readonly properties: {
                            readonly width: {
                                readonly type: "number";
                                readonly description: "Width of the scalebar in px";
                                readonly default: 100;
                            };
                            readonly height: {
                                readonly type: "number";
                                readonly description: "Height of the scalebar in px";
                                readonly default: 4;
                            };
                            readonly div: {
                                readonly type: "number";
                                readonly description: "Divisions in the scalebar in px";
                                readonly default: 5;
                            };
                        };
                    };
                };
            };
            readonly fml_overrides: {
                readonly type: "object";
                readonly properties: {
                    readonly showDims: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding dimensions on the rendering, true or false";
                    };
                    readonly showLabels: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding labels on the rendering, true or false";
                    };
                    readonly showLights: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding lights on the rendering, true or false";
                    };
                    readonly showSymbols: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding symbols on the rendering, true or false";
                    };
                    readonly showDropShadows: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding drop shadows on the rendering, true or false";
                    };
                    readonly showFixtures: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding fixtures on the rendering, true or false";
                    };
                    readonly showObjects: {
                        readonly type: "boolean";
                        readonly description: "Showing or hiding furniture on the rendering, true or false";
                    };
                    readonly showObjectColour: {
                        readonly type: "boolean";
                        readonly description: "Showing furniture in colour or in black & white on the rendering, true or false";
                    };
                    readonly showStructuralColour: {
                        readonly type: "boolean";
                        readonly description: "Showing structural items (like staircases) in colour or in black & white on the rendering, true or false";
                    };
                    readonly showSurfaceAreaSize: {
                        readonly type: "boolean";
                        readonly description: "Toggles showing area sizes for all the areas in a design, true of false";
                    };
                    readonly visuals: {
                        readonly type: "string";
                        readonly description: "Showing the whole rendering in black & white, fully coloured or a combination";
                        readonly enum: readonly ["BW", "BWC", "ALL"];
                    };
                };
            };
            readonly views: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["photo", "top", "se", "ne", "sw", "nw", "tilted", "panorama", "stereo"];
                            readonly description: "One of 'Photo', 'Panorama' or 'Stereo' (for left and right use 'panorama')";
                        };
                        readonly hide_first_wall: {
                            readonly type: "boolean";
                            readonly description: "Hide first wall";
                        };
                        readonly show_floors_below: {
                            readonly type: "boolean";
                            readonly description: "Renders the floors below";
                        };
                        readonly floors_explode_distance: {
                            readonly type: "number";
                            readonly description: "Distance between floors below for 'show floors below'";
                        };
                        readonly camera_id: {
                            readonly type: "number";
                            readonly description: "ID of the camera";
                        };
                        readonly section: {
                            readonly type: "number";
                            readonly description: "The height of the wall until cut-off";
                        };
                    };
                };
            };
            readonly callback: {
                readonly type: "string";
                readonly description: "Specify a http endpoint or valid email address";
            };
            readonly template_id: {
                readonly type: "number";
                readonly description: "Overwite project template for export";
            };
            readonly include_overlay_info: {
                readonly type: "boolean";
                readonly description: "Return overlay information in the response, this includes camera poses with world to screen and export rectangles";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly designs: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly project: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly level_id: {
                                readonly type: "number";
                            };
                            readonly public: {
                                readonly type: "number";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly creator: {
                        readonly type: "object";
                        readonly properties: {
                            readonly email: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly fmt: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                            readonly description: "`jpg` `png` `pdf` `dxf`";
                        };
                    };
                    readonly width: {
                        readonly type: "number";
                    };
                    readonly height: {
                        readonly type: "number";
                    };
                    readonly combine: {
                        readonly type: "boolean";
                    };
                    readonly type_name: {
                        readonly type: "string";
                    };
                    readonly state: {
                        readonly type: "string";
                    };
                    readonly settings: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly roomstyler_room_id: {
                        readonly type: "number";
                    };
                    readonly result: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly preview: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            }, {
                readonly type: "object";
                readonly properties: {
                    readonly export_id: {
                        readonly type: "number";
                    };
                    readonly designs: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly fmt: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                            readonly description: "`jpg` `png` `pdf` `dxf`";
                        };
                    };
                    readonly width: {
                        readonly type: "number";
                    };
                    readonly height: {
                        readonly type: "number";
                    };
                    readonly combine: {
                        readonly type: "boolean";
                    };
                    readonly type: {
                        readonly type: "string";
                    };
                    readonly state: {
                        readonly type: "string";
                    };
                    readonly images: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly download: {
                        readonly type: "string";
                    };
                    readonly vr360_url: {
                        readonly type: "string";
                    };
                    readonly panorama_url: {
                        readonly type: "string";
                    };
                    readonly zip_url: {
                        readonly type: "string";
                    };
                    readonly project_external_identifier: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly throttled: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly description: "Throttle message";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FmlProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ImportProject: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ImportRoomplanProject: {
    readonly body: {
        readonly type: "string";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const InviteUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email of the user";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
};
declare const ListAdminProductGroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by name";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by state";
                };
                readonly creator_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by id of creator user";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly enum: readonly ["hidden", "shared"];
                                readonly description: "`hidden` `shared`";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListCameras: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly floor_id: {
                        readonly type: "number";
                    };
                    readonly type_name: {
                        readonly type: "string";
                    };
                    readonly list_order: {
                        readonly type: "number";
                    };
                    readonly fov: {
                        readonly type: "number";
                    };
                    readonly points: {
                        readonly type: "string";
                    };
                    readonly direction: {
                        readonly type: "string";
                    };
                    readonly u_vector: {
                        readonly type: "string";
                    };
                    readonly sky_id: {
                        readonly type: "number";
                    };
                    readonly background_image: {
                        readonly type: "object";
                        readonly properties: {
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly light_settings: {
                        readonly type: "object";
                        readonly properties: {
                            readonly day: {
                                readonly type: "boolean";
                            };
                            readonly intensity: {
                                readonly type: "number";
                            };
                            readonly azimuth: {
                                readonly type: "number";
                            };
                            readonly altitude: {
                                readonly type: "number";
                            };
                        };
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListDesigns: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly floor_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly thumb_2d_generated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly thumb_3d_generated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly design_type: {
                        readonly type: "string";
                        readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                        readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                    };
                    readonly design_hash: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListDocuments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for documents by name";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly file: {
                                readonly type: "string";
                            };
                            readonly reference_id: {
                                readonly type: "number";
                            };
                            readonly reference_type: {
                                readonly type: "string";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListExport: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly designs: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly project: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly level_id: {
                                readonly type: "number";
                            };
                            readonly public: {
                                readonly type: "number";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly creator: {
                        readonly type: "object";
                        readonly properties: {
                            readonly email: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly fmt: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                            readonly description: "`jpg` `png` `pdf` `dxf`";
                        };
                    };
                    readonly width: {
                        readonly type: "number";
                    };
                    readonly height: {
                        readonly type: "number";
                    };
                    readonly combine: {
                        readonly type: "boolean";
                    };
                    readonly type_name: {
                        readonly type: "string";
                    };
                    readonly state: {
                        readonly type: "string";
                    };
                    readonly settings: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly roomstyler_room_id: {
                        readonly type: "number";
                    };
                    readonly result: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly preview: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListExportLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the export";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListFloors: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly level: {
                        readonly type: "number";
                    };
                    readonly height: {
                        readonly type: "number";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly model_name: {
                    readonly type: "string";
                    readonly enum: readonly ["Project", "User", "Export"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the object";
                };
                readonly model_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the object";
                };
            };
            readonly required: readonly ["model_name", "model_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListProductGroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by name";
                };
                readonly state: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by state";
                };
                readonly creator_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for product groups by id of creator user";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly enum: readonly ["hidden", "shared"];
                                readonly description: "`hidden` `shared`";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListProjectLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListProjectPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly project_id: {
                        readonly type: "number";
                    };
                    readonly comment: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListProjects: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListRoles: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly project_level_id: {
                        readonly type: "number";
                    };
                    readonly upgrade_to_level_id: {
                        readonly type: "number";
                    };
                    readonly room_type_set_id: {
                        readonly type: "number";
                    };
                    readonly template_id: {
                        readonly type: "number";
                    };
                    readonly permissions: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly max_projects: {
                        readonly type: "number";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListRoomTypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly room_type_set_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
            };
            readonly required: readonly ["room_type_set_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly room_type_set_id: {
                        readonly type: "number";
                    };
                    readonly role: {
                        readonly type: "number";
                    };
                    readonly roomstyle_id: {
                        readonly type: "string";
                        readonly description: "Styleboard ID, no longer a roomstyle ID";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly style: {
                        readonly type: "string";
                    };
                    readonly material: {
                        readonly type: "string";
                    };
                    readonly color: {
                        readonly type: "string";
                    };
                    readonly row_order: {
                        readonly type: "number";
                    };
                    readonly deleted_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListServices: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly identifier: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly developer_name: {
                        readonly type: "string";
                    };
                    readonly contact_email: {
                        readonly type: "string";
                    };
                    readonly contact_phone: {
                        readonly type: "string";
                    };
                    readonly logo_url: {
                        readonly type: "string";
                    };
                    readonly enabled: {
                        readonly type: "boolean";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly developer_id: {
                        readonly type: "number";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListSponsorship: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set the current page";
                };
                readonly per_page: {
                    readonly default: 50;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set the amount of results to show per page as an integer, defaults to 50. Everything higher than 50 will be ingored and the default will be used instead";
                };
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Find sponsorship by email";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly owner_id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly template_id: {
                        readonly type: "number";
                    };
                    readonly projects_given: {
                        readonly type: "number";
                    };
                    readonly projects_used: {
                        readonly type: "number";
                    };
                    readonly allowed_project_levels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly invite_email: {
                        readonly type: "string";
                    };
                    readonly user_email: {
                        readonly type: "string";
                    };
                    readonly logo: {
                        readonly type: "string";
                    };
                    readonly color: {
                        readonly type: "string";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListStyleboardPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly styleboard_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["styleboard_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly styleboard_id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly can_view: {
                        readonly type: "boolean";
                    };
                    readonly can_edit: {
                        readonly type: "boolean";
                    };
                    readonly can_delete: {
                        readonly type: "boolean";
                    };
                    readonly comment: {
                        readonly type: "string";
                    };
                    readonly is_owner: {
                        readonly type: "boolean";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListStyleboards: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for styleboards by name";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                                readonly description: "`hidden` `viewable` `shared` `published`";
                            };
                            readonly level_id: {
                                readonly type: "number";
                            };
                            readonly role_id: {
                                readonly type: "number";
                            };
                            readonly thumbnail_url: {
                                readonly type: "string";
                            };
                            readonly data_url: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListTemplate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly default: 1;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set the current page";
                };
                readonly per_page: {
                    readonly default: 50;
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set the amount of results to show per page as an integer, defaults to 50. Everything higher than 50 will be ingored and the default will be used instead";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly font: {
                        readonly type: "string";
                    };
                    readonly showIntro: {
                        readonly type: "boolean";
                    };
                    readonly introMagicLayout: {
                        readonly type: "boolean";
                    };
                    readonly introOwnRoomstyles: {
                        readonly type: "boolean";
                    };
                    readonly useMetric: {
                        readonly type: "boolean";
                    };
                    readonly scaleMultiplierDimensions: {
                        readonly type: "number";
                    };
                    readonly scaleMultiplierComments: {
                        readonly type: "number";
                    };
                    readonly areaLabelMultiplier: {
                        readonly type: "number";
                    };
                    readonly roomTypeSet: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                        };
                    };
                    readonly exports: {
                        readonly type: "object";
                        readonly properties: {
                            readonly backgrounds: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly floorplanPortrait: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly backgroundImage: {
                                                readonly type: "string";
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly floorplanLandscape: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly backgroundImage: {
                                                readonly type: "string";
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly dimensions: {
                                readonly type: "string";
                            };
                            readonly disclaimer: {
                                readonly type: "string";
                            };
                            readonly email: {
                                readonly type: "string";
                            };
                            readonly logoUrl: {
                                readonly type: "string";
                            };
                            readonly north: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                    };
                                    readonly type: {
                                        readonly type: "number";
                                        readonly enum: readonly [1, 2, 3, 4];
                                        readonly description: "`1` `2` `3` `4`";
                                    };
                                    readonly corner: {
                                        readonly type: "string";
                                        readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                        readonly description: "`BL` `BR` `TL` `TR`";
                                    };
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly logo3D: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly corner: {
                                        readonly type: "string";
                                        readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                        readonly description: "`BL` `BR` `TL` `TR`";
                                    };
                                };
                            };
                        };
                    };
                    readonly useSection3D: {
                        readonly type: "boolean";
                    };
                    readonly wallSectionHeight: {
                        readonly type: "number";
                    };
                    readonly wallThickness: {
                        readonly type: "number";
                    };
                    readonly wallOuterThickness: {
                        readonly type: "number";
                    };
                    readonly wallTopColor2D: {
                        readonly type: "string";
                    };
                    readonly wallTopColor3D: {
                        readonly type: "string";
                    };
                    readonly blueprintBGColor: {
                        readonly type: "string";
                    };
                    readonly showObjects: {
                        readonly type: "boolean";
                    };
                    readonly showObjectColour: {
                        readonly type: "boolean";
                    };
                    readonly showItemOutline: {
                        readonly type: "boolean";
                    };
                    readonly showStructuralColour: {
                        readonly type: "boolean";
                    };
                    readonly showFixtures: {
                        readonly type: "boolean";
                    };
                    readonly showDropShadows: {
                        readonly type: "boolean";
                    };
                    readonly showLights: {
                        readonly type: "boolean";
                    };
                    readonly showLabels: {
                        readonly type: "boolean";
                    };
                    readonly showDims: {
                        readonly type: "boolean";
                    };
                    readonly showAreaDims: {
                        readonly type: "boolean";
                    };
                    readonly showShortDims: {
                        readonly type: "boolean";
                    };
                    readonly showSymbols: {
                        readonly type: "boolean";
                    };
                    readonly dimLineLabelHorizontal: {
                        readonly type: "boolean";
                    };
                    readonly highResolutionRenderer: {
                        readonly type: "boolean";
                    };
                    readonly tour: {
                        readonly type: "object";
                        readonly properties: {
                            readonly logo_image: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly "background-color": {
                                readonly type: "string";
                            };
                            readonly project_name: {
                                readonly type: "boolean";
                            };
                            readonly project_creator: {
                                readonly type: "boolean";
                            };
                            readonly project_location: {
                                readonly type: "boolean";
                            };
                            readonly project_last_updated: {
                                readonly type: "boolean";
                            };
                            readonly font_family: {
                                readonly type: "string";
                            };
                            readonly font_color: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly prestation: {
                        readonly type: "object";
                        readonly properties: {
                            readonly background: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly margins: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly top: {
                                        readonly type: "number";
                                    };
                                    readonly right: {
                                        readonly type: "number";
                                    };
                                    readonly bottom: {
                                        readonly type: "number";
                                    };
                                    readonly left: {
                                        readonly type: "number";
                                    };
                                };
                            };
                            readonly includePageNumber: {
                                readonly type: "boolean";
                            };
                            readonly pageTitleSettings: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly fontFamily: {
                                        readonly type: "string";
                                    };
                                    readonly fontColor: {
                                        readonly type: "string";
                                    };
                                    readonly fontSize: {
                                        readonly type: "string";
                                    };
                                    readonly position: {
                                        readonly type: "string";
                                        readonly enum: readonly ["br", "bl", "tr", "tl"];
                                        readonly description: "`br` `bl` `tr` `tl`";
                                    };
                                    readonly margins: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly top: {
                                                readonly type: "number";
                                            };
                                            readonly right: {
                                                readonly type: "number";
                                            };
                                            readonly bottom: {
                                                readonly type: "number";
                                            };
                                            readonly left: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly pageNumberSettings: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly fontFamily: {
                                        readonly type: "string";
                                    };
                                    readonly fontColor: {
                                        readonly type: "string";
                                    };
                                    readonly fontSize: {
                                        readonly type: "number";
                                    };
                                    readonly position: {
                                        readonly type: "string";
                                        readonly enum: readonly ["br", "bl", "tr", "tl"];
                                        readonly description: "`br` `bl` `tr` `tl`";
                                    };
                                    readonly margins: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly top: {
                                                readonly type: "number";
                                            };
                                            readonly right: {
                                                readonly type: "number";
                                            };
                                            readonly bottom: {
                                                readonly type: "number";
                                            };
                                            readonly left: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly pageDisclaimerSettings: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly fontFamily: {
                                        readonly type: "string";
                                    };
                                    readonly fontColor: {
                                        readonly type: "string";
                                    };
                                    readonly fontSize: {
                                        readonly type: "number";
                                    };
                                    readonly position: {
                                        readonly type: "string";
                                        readonly enum: readonly ["br", "bl", "tr", "tl"];
                                        readonly description: "`br` `bl` `tr` `tl`";
                                    };
                                    readonly text: {
                                        readonly type: "string";
                                    };
                                    readonly margins: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly top: {
                                                readonly type: "number";
                                            };
                                            readonly right: {
                                                readonly type: "number";
                                            };
                                            readonly bottom: {
                                                readonly type: "number";
                                            };
                                            readonly left: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly xRayWalls: {
                        readonly type: "boolean";
                    };
                    readonly showCeilings3D: {
                        readonly type: "boolean";
                    };
                    readonly showShadows3D: {
                        readonly type: "boolean";
                    };
                    readonly showFloorsBelow: {
                        readonly type: "boolean";
                    };
                    readonly explodeDistance: {
                        readonly type: "number";
                    };
                    readonly areaLabelLetterSpacing: {
                        readonly type: "number";
                    };
                    readonly areaLabelOutline: {
                        readonly type: "boolean";
                    };
                    readonly hideItemsAbove: {
                        readonly type: "boolean";
                    };
                    readonly hideItemsAboveHeight: {
                        readonly type: "number";
                    };
                    readonly engineAutoDims: {
                        readonly type: "boolean";
                    };
                    readonly generateOuterDimension: {
                        readonly type: "boolean";
                    };
                    readonly arrowHeadType: {
                        readonly type: "string";
                        readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                        readonly description: "`arrow reverse-arrow arrow-top reverse-arrow-top`";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListUserLabels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListUserServices: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly service_id: {
                        readonly type: "number";
                    };
                    readonly no_credits: {
                        readonly type: "boolean";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListUsers: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly parent_id: {
                        readonly type: "number";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                    };
                    readonly avatar: {
                        readonly type: "string";
                    };
                    readonly features: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MeasurementsDesign: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the design";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly disclaimer: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly areas: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly custom_name: {
                                readonly type: "string";
                            };
                            readonly square_meters: {
                                readonly type: "number";
                            };
                            readonly square_feet: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MeasurementsFloor: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly disclaimer: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "number";
                };
                readonly designs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly areas: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly custom_name: {
                                            readonly type: "string";
                                        };
                                        readonly square_meters: {
                                            readonly type: "number";
                                        };
                                        readonly square_feet: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MeasurementsProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly disclaimer: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly areas: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly custom_name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly square_meters: {
                                                        readonly type: "number";
                                                    };
                                                    readonly square_feet: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrderFloorCameras: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly cameras: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "ID of the camera";
                        };
                        readonly list_order: {
                            readonly type: "number";
                            readonly description: "Order of the camera";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly type_name: {
                    readonly type: "string";
                };
                readonly list_order: {
                    readonly type: "number";
                };
                readonly fov: {
                    readonly type: "number";
                };
                readonly points: {
                    readonly type: "string";
                };
                readonly direction: {
                    readonly type: "string";
                };
                readonly u_vector: {
                    readonly type: "string";
                };
                readonly sky_id: {
                    readonly type: "number";
                };
                readonly background_image: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly light_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly day: {
                            readonly type: "boolean";
                        };
                        readonly intensity: {
                            readonly type: "number";
                        };
                        readonly azimuth: {
                            readonly type: "number";
                        };
                        readonly altitude: {
                            readonly type: "number";
                        };
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PopularProductsByAction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly interval: {
                    readonly type: "string";
                    readonly default: "month";
                    readonly enum: readonly ["hour", "day", "week", "month", "year"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Interval";
                };
                readonly from: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
                readonly to: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
                readonly user_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["brand_user", "sponsored_user", "other_user"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of user included in search.";
                };
                readonly sources: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["editor", "roomplanner"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Origin of events included in search.";
                };
                readonly event_actions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["place", "favorite", "link"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of event included in search.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly results: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly histogram: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly key_as_string: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly key: {
                                                    readonly type: "number";
                                                };
                                                readonly actions: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly place: {
                                                            readonly type: "number";
                                                        };
                                                        readonly link: {
                                                            readonly type: "number";
                                                        };
                                                        readonly favorite: {
                                                            readonly type: "number";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly event_search: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly actions: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly place: {
                                                        readonly type: "number";
                                                    };
                                                    readonly link: {
                                                        readonly type: "number";
                                                    };
                                                    readonly favorite: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                            readonly source: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly editor: {
                                                        readonly type: "number";
                                                    };
                                                    readonly roomplanner: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                            readonly most_used_own_products: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly all: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly place: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly link: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly favorite: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly brand_users: {
                                                readonly type: "number";
                                            };
                                            readonly sponsored_users: {
                                                readonly type: "number";
                                            };
                                            readonly other_users: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ProductAnalytics: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly interval: {
                    readonly type: "string";
                    readonly default: "month";
                    readonly enum: readonly ["hour", "day", "week", "month", "year"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Interval";
                };
                readonly from: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
                readonly to: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp mulitplied by 1000";
                };
                readonly user_types: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["brand_user", "sponsored_user", "other_user"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Types of user included in search.";
                };
                readonly sources: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["editor", "roomplanner"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Origin of events included in search.";
                };
                readonly event_actions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["place", "favorite", "link"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Type of event included in search.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly results: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly histogram: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly key_as_string: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                };
                                                readonly key: {
                                                    readonly type: "number";
                                                };
                                                readonly actions: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly place: {
                                                            readonly type: "number";
                                                        };
                                                        readonly link: {
                                                            readonly type: "number";
                                                        };
                                                        readonly favorite: {
                                                            readonly type: "number";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly event_search: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly actions: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly place: {
                                                        readonly type: "number";
                                                    };
                                                    readonly link: {
                                                        readonly type: "number";
                                                    };
                                                    readonly favorite: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                            readonly source: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly editor: {
                                                        readonly type: "number";
                                                    };
                                                    readonly roomplanner: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                            readonly most_used_own_products: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly all: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly place: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly link: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                    readonly favorite: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly count: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly sku: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly model: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly actions: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly place: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly link: {
                                                                            readonly type: "number";
                                                                        };
                                                                        readonly favorite: {
                                                                            readonly type: "number";
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly brand_users: {
                                                readonly type: "number";
                                            };
                                            readonly sponsored_users: {
                                                readonly type: "number";
                                            };
                                            readonly other_users: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ProductsProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly format: {
                    readonly type: "string";
                    readonly enum: readonly ["csv", "json"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Export products format";
                };
            };
            readonly required: readonly ["id", "format"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "Products";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly product_image: {
                        readonly type: "string";
                    };
                    readonly price: {
                        readonly type: "number";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly model: {
                        readonly type: "string";
                    };
                    readonly sku: {
                        readonly type: "string";
                    };
                    readonly supplier_name: {
                        readonly type: "string";
                    };
                    readonly supplier_id: {
                        readonly type: "number";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PublishProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly publish_id: {
                    readonly type: "number";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RecoverDesign: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly deleted_design_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the removed design";
                };
            };
            readonly required: readonly ["deleted_design_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly thumb_2d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly thumb_3d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly design_type: {
                    readonly type: "string";
                    readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                    readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                };
                readonly design_hash: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RecoverFloor: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["project_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly deleted_floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the removed floor";
                };
            };
            readonly required: readonly ["deleted_floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly level: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchExport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for projects by name";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
                readonly user_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for exports of sub-user by ID";
                };
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for exports of project by ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "number";
                                };
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly project: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly updated_at: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly level_id: {
                                        readonly type: "number";
                                    };
                                    readonly public: {
                                        readonly type: "number";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly creator: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly email: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly fmt: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                                    readonly description: "`jpg` `png` `pdf` `dxf`";
                                };
                            };
                            readonly width: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly combine: {
                                readonly type: "boolean";
                            };
                            readonly type_name: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly settings: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly roomstyler_room_id: {
                                readonly type: "number";
                            };
                            readonly result: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly preview: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchLeads: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly from: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp";
                };
                readonly to: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search between time. Value is a timestamp";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_branding_id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly design_id: {
                                readonly type: "number";
                            };
                            readonly hash_id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly email: {
                                readonly type: "string";
                            };
                            readonly country: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly phonenumber: {
                                readonly type: "string";
                            };
                            readonly contact_time: {
                                readonly type: "string";
                            };
                            readonly contact_method: {
                                readonly type: "string";
                            };
                            readonly message: {
                                readonly type: "string";
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly project_token: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchProjects: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for projects by name";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
                readonly user_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search for projects of sub-user by ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly level_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly project_url: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly enable_autosave: {
                                readonly type: "boolean";
                            };
                            readonly external_identifier: {
                                readonly type: "string";
                            };
                            readonly exported_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly public: {
                                readonly type: "boolean";
                            };
                            readonly floors: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly project_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly level: {
                                            readonly type: "number";
                                        };
                                        readonly height: {
                                            readonly type: "number";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly designs: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "number";
                                                    };
                                                    readonly floor_id: {
                                                        readonly type: "number";
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly thumb_2d_generated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly thumb_3d_generated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly user_id: {
                                                        readonly type: "number";
                                                    };
                                                    readonly design_type: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                                        readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                                    };
                                                    readonly design_hash: {
                                                        readonly type: "string";
                                                    };
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchRoomTypeSet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for room type sets name";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly is_default: {
                                readonly type: "boolean";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly set_name: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly room_type_set_id: {
                                            readonly type: "number";
                                        };
                                        readonly role: {
                                            readonly type: "number";
                                        };
                                        readonly roomstyle_id: {
                                            readonly type: "string";
                                            readonly description: "Styleboard ID, no longer a roomstyle ID";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly style: {
                                            readonly type: "string";
                                        };
                                        readonly material: {
                                            readonly type: "string";
                                        };
                                        readonly color: {
                                            readonly type: "string";
                                        };
                                        readonly row_order: {
                                            readonly type: "number";
                                        };
                                        readonly deleted_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchUsers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for users by email";
                };
                readonly page: {
                    readonly type: "number";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page to paginate to";
                };
                readonly per_page: {
                    readonly type: "number";
                    readonly default: 50;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of results to show per page";
                };
                readonly sort_field: {
                    readonly type: "string";
                    readonly default: "id";
                    readonly enum: readonly ["id", "created_at", "updated_at", "name"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by field";
                };
                readonly sort_order: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly enum: readonly ["desc", "asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort the results by order";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly search_after: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly total: {
                    readonly type: "number";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly parent_id: {
                                readonly type: "number";
                            };
                            readonly email: {
                                readonly type: "string";
                            };
                            readonly external_identifier: {
                                readonly type: "string";
                            };
                            readonly avatar: {
                                readonly type: "string";
                            };
                            readonly features: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchViewerProducts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for products by name";
                };
                readonly sku: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query for products by SKU";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "number";
                    };
                    readonly user_id: {
                        readonly type: "number";
                    };
                    readonly hash_id: {
                        readonly type: "string";
                    };
                    readonly product_id: {
                        readonly type: "string";
                    };
                    readonly materials_enabled: {
                        readonly type: "boolean";
                    };
                    readonly dimensions_enabled: {
                        readonly type: "boolean";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly image_iso: {
                        readonly type: "string";
                    };
                    readonly image_left: {
                        readonly type: "string";
                    };
                    readonly image_right: {
                        readonly type: "string";
                    };
                    readonly image_top: {
                        readonly type: "string";
                    };
                    readonly image_back: {
                        readonly type: "string";
                    };
                    readonly image_front: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly sku: {
                        readonly type: "string";
                    };
                    readonly supplier_id: {
                        readonly type: "number";
                    };
                    readonly viewer_url: {
                        readonly type: "string";
                    };
                    readonly token: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SharePlannerProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email of the person you want to send it to";
            };
            readonly message: {
                readonly type: "string";
                readonly description: "The message you want to send along with the project";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const SharedInviteUser: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly link: {
                    readonly type: "string";
                };
                readonly code: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowCompany: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly vat_number: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly address: {
                    readonly type: "string";
                };
                readonly address2: {
                    readonly type: "string";
                };
                readonly building: {
                    readonly type: "string";
                };
                readonly city: {
                    readonly type: "string";
                };
                readonly zipcode: {
                    readonly type: "string";
                };
                readonly country_code: {
                    readonly type: "string";
                };
                readonly phonenumber: {
                    readonly type: "string";
                };
                readonly phone_country: {
                    readonly type: "string";
                };
                readonly faxnumber: {
                    readonly type: "string";
                };
                readonly company_size: {
                    readonly type: "string";
                };
                readonly billing_email: {
                    readonly type: "string";
                };
                readonly verified_vat_at: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowDesign: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the design";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly thumb_2d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly thumb_3d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly design_type: {
                    readonly type: "string";
                    readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                    readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                };
                readonly design_hash: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowExport: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the export";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly designs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly project: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly level_id: {
                            readonly type: "number";
                        };
                        readonly public: {
                            readonly type: "number";
                        };
                        readonly status: {
                            readonly type: "string";
                        };
                    };
                };
                readonly creator: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                        };
                    };
                };
                readonly fmt: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["jpg", "png", "pdf", "dxf"];
                        readonly description: "`jpg` `png` `pdf` `dxf`";
                    };
                };
                readonly width: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly combine: {
                    readonly type: "boolean";
                };
                readonly type_name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                };
                readonly settings: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly roomstyler_room_id: {
                    readonly type: "number";
                };
                readonly result: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly preview: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowFloor: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly level: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowFloorCamera: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the camera";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly type_name: {
                    readonly type: "string";
                };
                readonly list_order: {
                    readonly type: "number";
                };
                readonly fov: {
                    readonly type: "number";
                };
                readonly points: {
                    readonly type: "string";
                };
                readonly direction: {
                    readonly type: "string";
                };
                readonly u_vector: {
                    readonly type: "string";
                };
                readonly sky_id: {
                    readonly type: "number";
                };
                readonly background_image: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly light_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly day: {
                            readonly type: "boolean";
                        };
                        readonly intensity: {
                            readonly type: "number";
                        };
                        readonly azimuth: {
                            readonly type: "number";
                        };
                        readonly altitude: {
                            readonly type: "number";
                        };
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowFloorDrawing: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly filename: {
                    readonly type: "string";
                };
                readonly size: {
                    readonly type: "number";
                };
                readonly alpha: {
                    readonly type: "number";
                };
                readonly position: {
                    readonly type: "string";
                };
                readonly rotation: {
                    readonly type: "string";
                };
                readonly visible: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowLeadData: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly project: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly description: "ID of the roomplan / lead";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Lead's name";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Lead's email address";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "Lead's city";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Lead's country";
                        };
                        readonly phonenumber: {
                            readonly type: "string";
                            readonly description: "Lead's phone number";
                        };
                        readonly contact_time: {
                            readonly type: "string";
                            readonly description: "Time when to contact the lead";
                        };
                        readonly contact_method: {
                            readonly type: "string";
                            readonly description: "What method to contact the lead";
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly description: "Various extra data collected";
                            readonly additionalProperties: true;
                        };
                        readonly identifier: {
                            readonly type: "string";
                            readonly description: "A custom identifier for the lead";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "A message the lead has sent in the save form";
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Time when the lead was added";
                        };
                        readonly project_name: {
                            readonly type: "string";
                            readonly description: "Name of the project";
                        };
                        readonly project_url: {
                            readonly type: "string";
                            readonly description: "Link to the project";
                        };
                        readonly export_2d_link: {
                            readonly type: "string";
                            readonly description: "Link to the 2D exported image";
                        };
                        readonly export_3d_link: {
                            readonly type: "string";
                            readonly description: "Link to the 3D exported image";
                        };
                        readonly export_interior_link: {
                            readonly type: "string";
                            readonly description: "Unused link, but will useful in the future";
                        };
                        readonly products: {
                            readonly type: "array";
                            readonly description: "List of products used in the project";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly product_name: {
                                        readonly type: "string";
                                        readonly description: "Name of the product";
                                    };
                                    readonly product_image: {
                                        readonly type: "string";
                                        readonly description: "Link to a image of the product";
                                    };
                                    readonly click_url: {
                                        readonly type: "string";
                                        readonly description: "Link for tracking clicks on the product";
                                    };
                                    readonly materials: {
                                        readonly type: "array";
                                        readonly description: "List of materials used for the product";
                                        readonly items: {};
                                    };
                                    readonly product_url: {
                                        readonly type: "string";
                                        readonly description: "Link to the store";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowProduct: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID or SKU of the product";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly url: {
                    readonly type: "string";
                };
                readonly company_id: {
                    readonly type: "number";
                };
                readonly out_of_stock: {
                    readonly type: "boolean";
                };
                readonly sku: {
                    readonly type: "string";
                };
                readonly brand: {
                    readonly type: "string";
                };
                readonly is_private: {
                    readonly type: "boolean";
                };
                readonly scaleable: {
                    readonly type: "boolean";
                };
                readonly status: {
                    readonly type: "string";
                };
                readonly store_image: {
                    readonly type: "string";
                };
                readonly rollable: {
                    readonly type: "boolean";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly tracked: {
                    readonly type: "boolean";
                };
                readonly productviewer: {
                    readonly type: "boolean";
                };
                readonly width: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly depth: {
                    readonly type: "number";
                };
                readonly model: {
                    readonly type: "string";
                };
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly surface_height: {
                    readonly type: "number";
                };
                readonly parent: {
                    readonly type: "string";
                };
                readonly level: {
                    readonly type: "number";
                };
                readonly bbox_min: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly bbox_max: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly supplier_id: {
                    readonly type: "number";
                };
                readonly supplier_name: {
                    readonly type: "string";
                };
                readonly supplier_rank: {
                    readonly type: "number";
                };
                readonly flags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly completed_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly product_image: {
                    readonly type: "string";
                };
                readonly supplier_dims: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly is_glb: {
                    readonly type: "boolean";
                };
                readonly color_h: {
                    readonly type: "number";
                };
                readonly color_s: {
                    readonly type: "number";
                };
                readonly color_l: {
                    readonly type: "number";
                };
                readonly price: {
                    readonly type: "number";
                };
                readonly has_special_price: {
                    readonly type: "boolean";
                };
                readonly lab_l: {
                    readonly type: "number";
                };
                readonly lab_a: {
                    readonly type: "number";
                };
                readonly labl_b: {
                    readonly type: "number";
                };
                readonly palette_color: {
                    readonly type: "string";
                };
                readonly id: {
                    readonly type: "string";
                };
                readonly glb_url: {
                    readonly type: "string";
                };
                readonly usdz_url: {
                    readonly type: "string";
                };
                readonly images: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "bw.top": {
                            readonly type: "string";
                        };
                        readonly top: {
                            readonly type: "string";
                        };
                        readonly "top.x3": {
                            readonly type: "string";
                        };
                        readonly perspective: {
                            readonly type: "string";
                        };
                        readonly "iso.540": {
                            readonly type: "string";
                        };
                        readonly "top.540": {
                            readonly type: "string";
                        };
                        readonly "front.540": {
                            readonly type: "string";
                        };
                        readonly "back.540": {
                            readonly type: "string";
                        };
                        readonly "left.540": {
                            readonly type: "string";
                        };
                        readonly "right.540": {
                            readonly type: "string";
                        };
                        readonly "iso.1080": {
                            readonly type: "string";
                        };
                        readonly "top.1080": {
                            readonly type: "string";
                        };
                        readonly "front.1080": {
                            readonly type: "string";
                        };
                        readonly "back.1080": {
                            readonly type: "string";
                        };
                        readonly "left.1080": {
                            readonly type: "string";
                        };
                        readonly "right.1080": {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowProductGroup: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the product group";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "shared"];
                    readonly description: "`hidden` `shared`";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowProfile: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly username: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly firstname: {
                    readonly type: "string";
                };
                readonly lastname: {
                    readonly type: "string";
                };
                readonly gender: {
                    readonly type: "string";
                };
                readonly zipcode: {
                    readonly type: "string";
                };
                readonly city: {
                    readonly type: "string";
                };
                readonly language: {
                    readonly type: "string";
                };
                readonly measurements: {
                    readonly type: "string";
                };
                readonly address: {
                    readonly type: "string";
                };
                readonly address2: {
                    readonly type: "string";
                };
                readonly building: {
                    readonly type: "string";
                };
                readonly country_code: {
                    readonly type: "string";
                };
                readonly phonenumber: {
                    readonly type: "string";
                };
                readonly phone_country: {
                    readonly type: "string";
                };
                readonly birthdate: {
                    readonly type: "string";
                };
                readonly website: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly newsletter: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowProjectPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowRole: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the role";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly project_level_id: {
                    readonly type: "number";
                };
                readonly upgrade_to_level_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly permissions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly max_projects: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowRoomType: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly room_type_set_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type";
                };
            };
            readonly required: readonly ["room_type_set_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly role: {
                    readonly type: "number";
                };
                readonly roomstyle_id: {
                    readonly type: "string";
                    readonly description: "Styleboard ID, no longer a roomstyle ID";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly style: {
                    readonly type: "string";
                };
                readonly material: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly row_order: {
                    readonly type: "number";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowRoomTypeSet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly is_default: {
                    readonly type: "boolean";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly set_name: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly room_type_set_id: {
                                readonly type: "number";
                            };
                            readonly role: {
                                readonly type: "number";
                            };
                            readonly roomstyle_id: {
                                readonly type: "string";
                                readonly description: "Styleboard ID, no longer a roomstyle ID";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly style: {
                                readonly type: "string";
                            };
                            readonly material: {
                                readonly type: "string";
                            };
                            readonly color: {
                                readonly type: "string";
                            };
                            readonly row_order: {
                                readonly type: "number";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowSponsorship: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the sponsorship";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly owner_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly projects_given: {
                    readonly type: "number";
                };
                readonly projects_used: {
                    readonly type: "number";
                };
                readonly allowed_project_levels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly invite_email: {
                    readonly type: "string";
                };
                readonly user_email: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowStyleboard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                    readonly description: "`hidden` `viewable` `shared` `published`";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly role_id: {
                    readonly type: "number";
                };
                readonly thumbnail_url: {
                    readonly type: "string";
                };
                readonly data_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowStyleboardPermission: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly styleboard_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["styleboard_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly styleboard_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly can_view: {
                    readonly type: "boolean";
                };
                readonly can_edit: {
                    readonly type: "boolean";
                };
                readonly can_delete: {
                    readonly type: "boolean";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly is_owner: {
                    readonly type: "boolean";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowTemplate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the template";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly font: {
                    readonly type: "string";
                };
                readonly showIntro: {
                    readonly type: "boolean";
                };
                readonly introMagicLayout: {
                    readonly type: "boolean";
                };
                readonly introOwnRoomstyles: {
                    readonly type: "boolean";
                };
                readonly useMetric: {
                    readonly type: "boolean";
                };
                readonly scaleMultiplierDimensions: {
                    readonly type: "number";
                };
                readonly scaleMultiplierComments: {
                    readonly type: "number";
                };
                readonly areaLabelMultiplier: {
                    readonly type: "number";
                };
                readonly roomTypeSet: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly exports: {
                    readonly type: "object";
                    readonly properties: {
                        readonly backgrounds: {
                            readonly type: "object";
                            readonly properties: {
                                readonly floorplanPortrait: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly floorplanLandscape: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly dimensions: {
                            readonly type: "string";
                        };
                        readonly disclaimer: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly logoUrl: {
                            readonly type: "string";
                        };
                        readonly north: {
                            readonly type: "object";
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                };
                                readonly type: {
                                    readonly type: "number";
                                    readonly enum: readonly [1, 2, 3, 4];
                                    readonly description: "`1` `2` `3` `4`";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                                readonly size: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly logo3D: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                            };
                        };
                    };
                };
                readonly useSection3D: {
                    readonly type: "boolean";
                };
                readonly wallSectionHeight: {
                    readonly type: "number";
                };
                readonly wallThickness: {
                    readonly type: "number";
                };
                readonly wallOuterThickness: {
                    readonly type: "number";
                };
                readonly wallTopColor2D: {
                    readonly type: "string";
                };
                readonly wallTopColor3D: {
                    readonly type: "string";
                };
                readonly blueprintBGColor: {
                    readonly type: "string";
                };
                readonly showObjects: {
                    readonly type: "boolean";
                };
                readonly showObjectColour: {
                    readonly type: "boolean";
                };
                readonly showItemOutline: {
                    readonly type: "boolean";
                };
                readonly showStructuralColour: {
                    readonly type: "boolean";
                };
                readonly showFixtures: {
                    readonly type: "boolean";
                };
                readonly showDropShadows: {
                    readonly type: "boolean";
                };
                readonly showLights: {
                    readonly type: "boolean";
                };
                readonly showLabels: {
                    readonly type: "boolean";
                };
                readonly showDims: {
                    readonly type: "boolean";
                };
                readonly showAreaDims: {
                    readonly type: "boolean";
                };
                readonly showShortDims: {
                    readonly type: "boolean";
                };
                readonly showSymbols: {
                    readonly type: "boolean";
                };
                readonly dimLineLabelHorizontal: {
                    readonly type: "boolean";
                };
                readonly highResolutionRenderer: {
                    readonly type: "boolean";
                };
                readonly tour: {
                    readonly type: "object";
                    readonly properties: {
                        readonly logo_image: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly "background-color": {
                            readonly type: "string";
                        };
                        readonly project_name: {
                            readonly type: "boolean";
                        };
                        readonly project_creator: {
                            readonly type: "boolean";
                        };
                        readonly project_location: {
                            readonly type: "boolean";
                        };
                        readonly project_last_updated: {
                            readonly type: "boolean";
                        };
                        readonly font_family: {
                            readonly type: "string";
                        };
                        readonly font_color: {
                            readonly type: "string";
                        };
                    };
                };
                readonly prestation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly background: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly margins: {
                            readonly type: "object";
                            readonly properties: {
                                readonly top: {
                                    readonly type: "number";
                                };
                                readonly right: {
                                    readonly type: "number";
                                };
                                readonly bottom: {
                                    readonly type: "number";
                                };
                                readonly left: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly includePageNumber: {
                            readonly type: "boolean";
                        };
                        readonly pageTitleSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "string";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageNumberSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageDisclaimerSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly text: {
                                    readonly type: "string";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly xRayWalls: {
                    readonly type: "boolean";
                };
                readonly showCeilings3D: {
                    readonly type: "boolean";
                };
                readonly showShadows3D: {
                    readonly type: "boolean";
                };
                readonly showFloorsBelow: {
                    readonly type: "boolean";
                };
                readonly explodeDistance: {
                    readonly type: "number";
                };
                readonly areaLabelLetterSpacing: {
                    readonly type: "number";
                };
                readonly areaLabelOutline: {
                    readonly type: "boolean";
                };
                readonly hideItemsAbove: {
                    readonly type: "boolean";
                };
                readonly hideItemsAboveHeight: {
                    readonly type: "number";
                };
                readonly engineAutoDims: {
                    readonly type: "boolean";
                };
                readonly generateOuterDimension: {
                    readonly type: "boolean";
                };
                readonly arrowHeadType: {
                    readonly type: "string";
                    readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                    readonly description: "`arrow reverse-arrow arrow-top reverse-arrow-top`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ShowUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly parent_id: {
                    readonly type: "number";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
                readonly features: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TexturesProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly colors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly textures: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly database_id: {
                                readonly type: "number";
                            };
                            readonly texture_url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TokenProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly expires_in: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of seconds the token expires in";
                };
                readonly editor_url: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Responds with an editor link to the project";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                };
                readonly editor_url: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TokenUser: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                };
                readonly user_id: {
                    readonly type: "number";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UnassignRole: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the role";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const UndestroyProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const UnpublishProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const UpdateCompany: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly remote_logo_url: {
                readonly type: "string";
            };
            readonly vat_number: {
                readonly type: "string";
            };
            readonly currency: {
                readonly type: "string";
            };
            readonly address: {
                readonly type: "string";
            };
            readonly address2: {
                readonly type: "string";
            };
            readonly building: {
                readonly type: "string";
            };
            readonly city: {
                readonly type: "string";
            };
            readonly zipcode: {
                readonly type: "string";
            };
            readonly country_code: {
                readonly type: "string";
            };
            readonly phonenumber: {
                readonly type: "string";
            };
            readonly phone_country: {
                readonly type: "string";
            };
            readonly faxnumber: {
                readonly type: "string";
            };
            readonly company_size: {
                readonly type: "string";
            };
            readonly billing_email: {
                readonly type: "string";
            };
            readonly verified_vat_at: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly vat_number: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly address: {
                    readonly type: "string";
                };
                readonly address2: {
                    readonly type: "string";
                };
                readonly building: {
                    readonly type: "string";
                };
                readonly city: {
                    readonly type: "string";
                };
                readonly zipcode: {
                    readonly type: "string";
                };
                readonly country_code: {
                    readonly type: "string";
                };
                readonly phonenumber: {
                    readonly type: "string";
                };
                readonly phone_country: {
                    readonly type: "string";
                };
                readonly faxnumber: {
                    readonly type: "string";
                };
                readonly company_size: {
                    readonly type: "string";
                };
                readonly billing_email: {
                    readonly type: "string";
                };
                readonly verified_vat_at: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateDesign: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly design: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the design";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the design";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly thumb_2d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly thumb_3d_generated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly design_type: {
                    readonly type: "string";
                    readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                    readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                };
                readonly design_hash: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateFloor: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly floor: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the floor";
                    };
                    readonly level: {
                        readonly type: "number";
                        readonly description: "The floor level";
                    };
                    readonly height: {
                        readonly type: "number";
                        readonly description: "Height of the floor";
                    };
                    readonly drawing_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly remote_filename_url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly level: {
                    readonly type: "number";
                };
                readonly height: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateFloorCamera: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the camera";
            };
            readonly type_name: {
                readonly type: "string";
                readonly enum: readonly ["walkthrough", "orbital"];
            };
            readonly list_order: {
                readonly type: "number";
                readonly description: "Order of the cameras";
            };
            readonly fov: {
                readonly type: "number";
                readonly description: "Field of view in degrees";
            };
            readonly sky_id: {
                readonly type: "number";
                readonly description: "ID of the Sky image";
            };
            readonly u_vector: {
                readonly type: "string";
                readonly description: "U Vector";
                readonly default: "0.000000 0.000000 0.000000";
            };
            readonly points: {
                readonly type: "string";
                readonly description: "Points are {x,y,z} coordinates in metres";
                readonly default: "0.000000 0.000000 0.000000";
            };
            readonly direction: {
                readonly type: "string";
                readonly description: "Direction is set of normalized values {dx,dy,dz} in range -1..1";
                readonly default: "0 0 0";
            };
            readonly light_settings: {
                readonly type: "object";
                readonly additionalProperties: true;
            };
            readonly remote_background_image_url: {
                readonly type: "string";
                readonly description: "A remote url which holds the scenery background image";
            };
            readonly file: {
                readonly type: "object";
                readonly properties: {
                    readonly data: {
                        readonly type: "string";
                        readonly description: "A base64 encoded string which contains the background image";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the background image including extension";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the camera";
                };
            };
            readonly required: readonly ["project_id", "floor_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly type_name: {
                    readonly type: "string";
                };
                readonly list_order: {
                    readonly type: "number";
                };
                readonly fov: {
                    readonly type: "number";
                };
                readonly points: {
                    readonly type: "string";
                };
                readonly direction: {
                    readonly type: "string";
                };
                readonly u_vector: {
                    readonly type: "string";
                };
                readonly sky_id: {
                    readonly type: "number";
                };
                readonly background_image: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly light_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly day: {
                            readonly type: "boolean";
                        };
                        readonly intensity: {
                            readonly type: "number";
                        };
                        readonly azimuth: {
                            readonly type: "number";
                        };
                        readonly altitude: {
                            readonly type: "number";
                        };
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateFloorDrawing: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly drawing: {
                readonly type: "object";
                readonly properties: {
                    readonly filename: {
                        readonly type: "string";
                        readonly description: "Uploaded file io, either in png, jpg or pdf format";
                    };
                    readonly remote_filename_url: {
                        readonly type: "string";
                        readonly description: "Remote url location of an image, opposite of filename file io";
                    };
                    readonly placement_width: {
                        readonly type: "number";
                        readonly description: "Size of the drawing in the editor";
                    };
                    readonly placement_height: {
                        readonly type: "number";
                        readonly description: "Size of the drawing in the editor";
                    };
                    readonly alpha: {
                        readonly type: "number";
                        readonly default: 50;
                        readonly description: "Transparency of the drawing in the editor in percentage";
                    };
                    readonly position: {
                        readonly type: "string";
                        readonly default: "0.00 0.00 0.00";
                        readonly description: "Position offset of the drawing in the editor. Only first two values are used, X and Y";
                    };
                    readonly rotation: {
                        readonly type: "string";
                        readonly default: "0.00 0.00 0.00";
                        readonly description: "Rotation of the drawing in the editor";
                    };
                    readonly visible: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly description: "A true or false value for displaying the drawing";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly floor_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the floor";
                };
            };
            readonly required: readonly ["project_id", "floor_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly floor_id: {
                    readonly type: "number";
                };
                readonly filename: {
                    readonly type: "string";
                };
                readonly size: {
                    readonly type: "number";
                };
                readonly alpha: {
                    readonly type: "number";
                };
                readonly position: {
                    readonly type: "string";
                };
                readonly rotation: {
                    readonly type: "string";
                };
                readonly visible: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateProductGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly product_group: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the product_group";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly enum: readonly ["hidden", "shared"];
                        readonly default: "hidden";
                        readonly description: "The product_group state";
                    };
                    readonly labelings: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A label you want to attach to a product_group";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the product_group";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "shared"];
                    readonly description: "`hidden` `shared`";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateProfile: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly username: {
                readonly type: "string";
            };
            readonly remote_avatar_url: {
                readonly type: "string";
            };
            readonly firstname: {
                readonly type: "string";
            };
            readonly lastname: {
                readonly type: "string";
            };
            readonly gender: {
                readonly type: "string";
            };
            readonly zipcode: {
                readonly type: "string";
            };
            readonly city: {
                readonly type: "string";
            };
            readonly language: {
                readonly type: "string";
            };
            readonly measurements: {
                readonly type: "string";
            };
            readonly address: {
                readonly type: "string";
            };
            readonly address2: {
                readonly type: "string";
            };
            readonly building: {
                readonly type: "string";
            };
            readonly country_code: {
                readonly type: "string";
            };
            readonly phonenumber: {
                readonly type: "string";
            };
            readonly phone_country: {
                readonly type: "string";
            };
            readonly birthdate: {
                readonly type: "string";
            };
            readonly website: {
                readonly type: "string";
            };
            readonly currency: {
                readonly type: "string";
            };
            readonly newsletter: {
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly username: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly firstname: {
                    readonly type: "string";
                };
                readonly lastname: {
                    readonly type: "string";
                };
                readonly gender: {
                    readonly type: "string";
                };
                readonly zipcode: {
                    readonly type: "string";
                };
                readonly city: {
                    readonly type: "string";
                };
                readonly language: {
                    readonly type: "string";
                };
                readonly measurements: {
                    readonly type: "string";
                };
                readonly address: {
                    readonly type: "string";
                };
                readonly address2: {
                    readonly type: "string";
                };
                readonly building: {
                    readonly type: "string";
                };
                readonly country_code: {
                    readonly type: "string";
                };
                readonly phonenumber: {
                    readonly type: "string";
                };
                readonly phone_country: {
                    readonly type: "string";
                };
                readonly birthdate: {
                    readonly type: "string";
                };
                readonly website: {
                    readonly type: "string";
                };
                readonly currency: {
                    readonly type: "string";
                };
                readonly newsletter: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly project: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the project";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Project description";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                        readonly description: "External identifier which must start with a character, not a number and must be unique per project";
                    };
                    readonly public: {
                        readonly type: "boolean";
                        readonly description: "Sets the project public or private";
                    };
                    readonly enable_vr_tour: {
                        readonly type: "boolean";
                        readonly description: "Automatically adds 3D tour to the project (This requires a credit transaction)";
                    };
                    readonly project_template_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly template_id: {
                                readonly type: "number";
                                readonly description: "The ID of the template you would like to use";
                            };
                        };
                    };
                    readonly floors_attributes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the floor";
                                };
                                readonly level: {
                                    readonly type: "number";
                                    readonly description: "The floor level";
                                };
                                readonly height: {
                                    readonly type: "number";
                                    readonly description: "Height of the floor";
                                };
                                readonly drawing_attributes: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly remote_filename_url: {
                                            readonly type: "string";
                                            readonly description: "URL to the background image";
                                        };
                                    };
                                };
                                readonly designs_attributes: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the design";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly location_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly city: {
                                readonly type: "string";
                                readonly description: "The city in which the project is located";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "The country in which the project is located";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "The address at which the project is located";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                                readonly description: "The zipcode in which the project is located";
                            };
                            readonly building: {
                                readonly type: "string";
                                readonly description: "The building in which the project is located";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "The state in which the project is located";
                            };
                            readonly coords: {
                                readonly type: "string";
                                readonly description: "The longitude and latitude at which the project is located, separated by a comma";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateProjectPermission: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
                readonly description: "ID of the user";
            };
            readonly comment: {
                readonly type: "string";
                readonly description: "Additional comment to explain the reason of the permission";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["project_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly project_id: {
                    readonly type: "number";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateRole: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
            };
            readonly name: {
                readonly type: "string";
            };
            readonly project_level_id: {
                readonly type: "number";
            };
            readonly upgrade_to_level_id: {
                readonly type: "number";
            };
            readonly room_type_set_id: {
                readonly type: "number";
            };
            readonly template_id: {
                readonly type: "number";
            };
            readonly permissions: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly max_projects: {
                readonly type: "number";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the role";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly project_level_id: {
                    readonly type: "number";
                };
                readonly upgrade_to_level_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly permissions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly max_projects: {
                    readonly type: "number";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateRoomType: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly room_type: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of room type";
                    };
                    readonly style: {
                        readonly type: "string";
                        readonly description: "The name of the style";
                    };
                    readonly color: {
                        readonly type: "string";
                        readonly description: "Hexidecimal color code";
                    };
                    readonly material: {
                        readonly type: "string";
                        readonly description: "ID of material";
                    };
                    readonly role: {
                        readonly type: "number";
                        readonly description: "Role of the room";
                    };
                    readonly row_order_position: {
                        readonly type: "number";
                        readonly description: "Position of the room type";
                    };
                    readonly roomstyle_id: {
                        readonly type: "string";
                        readonly description: "Styleboard ID";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly room_type_set_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type";
                };
            };
            readonly required: readonly ["room_type_set_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly room_type_set_id: {
                    readonly type: "number";
                };
                readonly role: {
                    readonly type: "number";
                };
                readonly roomstyle_id: {
                    readonly type: "string";
                    readonly description: "Styleboard ID, no longer a roomstyle ID";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly style: {
                    readonly type: "string";
                };
                readonly material: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly row_order: {
                    readonly type: "number";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateRoomTypeSet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly room_type_set: {
                readonly type: "object";
                readonly properties: {
                    readonly set_name: {
                        readonly type: "string";
                        readonly description: "The name of room type set";
                    };
                    readonly room_types_attributes: {
                        readonly type: "array";
                        readonly description: "A list of room types";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "number";
                                };
                                readonly user_id: {
                                    readonly type: "number";
                                };
                                readonly room_type_set_id: {
                                    readonly type: "number";
                                };
                                readonly role: {
                                    readonly type: "number";
                                };
                                readonly roomstyle_id: {
                                    readonly type: "string";
                                    readonly description: "Styleboard ID, no longer a roomstyle ID";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly style: {
                                    readonly type: "string";
                                };
                                readonly material: {
                                    readonly type: "string";
                                };
                                readonly color: {
                                    readonly type: "string";
                                };
                                readonly row_order: {
                                    readonly type: "number";
                                };
                                readonly deleted_at: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the room type set";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly is_default: {
                    readonly type: "boolean";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly set_name: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly room_type_set_id: {
                                readonly type: "number";
                            };
                            readonly role: {
                                readonly type: "number";
                            };
                            readonly roomstyle_id: {
                                readonly type: "string";
                                readonly description: "Styleboard ID, no longer a roomstyle ID";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly style: {
                                readonly type: "string";
                            };
                            readonly material: {
                                readonly type: "string";
                            };
                            readonly color: {
                                readonly type: "string";
                            };
                            readonly row_order: {
                                readonly type: "number";
                            };
                            readonly deleted_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateSponsorship: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sponsorship: {
                readonly type: "object";
                readonly properties: {
                    readonly template_id: {
                        readonly type: "number";
                        readonly description: "ID an existing template";
                    };
                    readonly user_id: {
                        readonly type: "number";
                        readonly description: "The ID of the user that needs the sponsorship";
                    };
                    readonly projects_given: {
                        readonly type: "number";
                        readonly description: "How many projects the sponsored user will receive";
                    };
                    readonly allowed_project_levels: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "number";
                            readonly description: "ID of the allowed project level";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the sponsorship";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly owner_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly template_id: {
                    readonly type: "number";
                };
                readonly projects_given: {
                    readonly type: "number";
                };
                readonly projects_used: {
                    readonly type: "number";
                };
                readonly allowed_project_levels: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly invite_email: {
                    readonly type: "string";
                };
                readonly user_email: {
                    readonly type: "string";
                };
                readonly logo: {
                    readonly type: "string";
                };
                readonly color: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateStyleboard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly styleboard: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the styleboard";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                        readonly default: "hidden";
                        readonly description: "The styleboard state";
                    };
                    readonly role_id: {
                        readonly type: "number";
                        readonly description: "The room role ID";
                    };
                    readonly level_id: {
                        readonly type: "number";
                        readonly description: "The level ID of the styleboard";
                    };
                    readonly thumbnail: {
                        readonly type: "string";
                        readonly description: "The base64 encoded representation of a PNG image";
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly description: "JSON object of the styleboard";
                        readonly additionalProperties: true;
                    };
                    readonly labelings: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A label you want to attach to a styleboard";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly state: {
                    readonly type: "string";
                    readonly enum: readonly ["hidden", "viewable", "shared", "published"];
                    readonly description: "`hidden` `viewable` `shared` `published`";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly role_id: {
                    readonly type: "number";
                };
                readonly thumbnail_url: {
                    readonly type: "string";
                };
                readonly data_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly deleted_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateStyleboardPermission: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "number";
                readonly description: "ID of the user";
            };
            readonly comment: {
                readonly type: "string";
                readonly description: "Additional comment to explain the reason of the permission";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly styleboard_id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the styleboard";
                };
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the permission";
                };
            };
            readonly required: readonly ["styleboard_id", "id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly styleboard_id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly can_view: {
                    readonly type: "boolean";
                };
                readonly can_edit: {
                    readonly type: "boolean";
                };
                readonly can_delete: {
                    readonly type: "boolean";
                };
                readonly comment: {
                    readonly type: "string";
                };
                readonly is_owner: {
                    readonly type: "boolean";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateTemplate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly template: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Name of the template";
                    };
                    readonly settings: {
                        readonly type: "object";
                        readonly properties: {
                            readonly font: {
                                readonly type: "string";
                                readonly description: "Font face used in the editor";
                            };
                            readonly showIntro: {
                                readonly type: "boolean";
                                readonly description: "Boolean for showing intro in editor";
                            };
                            readonly introMagicLayout: {
                                readonly type: "boolean";
                                readonly description: "Enable/disable showing magic layout in intro";
                            };
                            readonly introOwnRoomstyles: {
                                readonly type: "boolean";
                                readonly description: "Enable/disable showing roomstyles in intro";
                            };
                            readonly useMetric: {
                                readonly type: "boolean";
                                readonly description: "Use metric of imperial system by default";
                            };
                            readonly scaleMultiplierDimensions: {
                                readonly type: "number";
                                readonly description: "Scale the labels by multiplier";
                            };
                            readonly scaleMultiplierComments: {
                                readonly type: "number";
                                readonly description: "Scale comments by multiplier";
                            };
                            readonly areaLabelMultiplier: {
                                readonly type: "number";
                                readonly description: "Scale the area labels by multiplier";
                            };
                            readonly roomTypeSet: {
                                readonly type: "array";
                                readonly description: "List of Room Type Sets available in editor";
                                readonly items: {
                                    readonly type: "number";
                                };
                            };
                            readonly exports: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly backgrounds: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly floorplanPortrait: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly backgroundImage: {
                                                        readonly type: "string";
                                                        readonly description: "URL to a background image";
                                                    };
                                                    readonly margins: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly top: {
                                                                readonly type: "number";
                                                            };
                                                            readonly right: {
                                                                readonly type: "number";
                                                            };
                                                            readonly bottom: {
                                                                readonly type: "number";
                                                            };
                                                            readonly left: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            readonly floorplanLandscape: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly backgroundImage: {
                                                        readonly type: "string";
                                                        readonly description: "URL to a background image";
                                                    };
                                                    readonly margins: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly top: {
                                                                readonly type: "number";
                                                            };
                                                            readonly right: {
                                                                readonly type: "number";
                                                            };
                                                            readonly bottom: {
                                                                readonly type: "number";
                                                            };
                                                            readonly left: {
                                                                readonly type: "number";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly dimensions: {
                                        readonly type: "string";
                                        readonly description: "dimensions of the export";
                                    };
                                    readonly disclaimer: {
                                        readonly type: "string";
                                        readonly description: "disclaimer text";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "default callback in editor dialog";
                                    };
                                    readonly logoUrl: {
                                        readonly type: "string";
                                        readonly description: "URL to a logo";
                                    };
                                    readonly north: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                            };
                                            readonly type: {
                                                readonly type: "number";
                                                readonly description: "North arrow type";
                                                readonly enum: readonly [1, 2, 3, 4];
                                            };
                                            readonly corner: {
                                                readonly type: "string";
                                                readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                                readonly description: "position of the north arrow, bottom-Left, bottom-right, top-left and top-right";
                                            };
                                            readonly size: {
                                                readonly type: "number";
                                                readonly description: "Size of the north arrow";
                                            };
                                        };
                                    };
                                    readonly logo3D: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "URL to logo for 3d exports";
                                            };
                                            readonly corner: {
                                                readonly type: "string";
                                                readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                                readonly description: "position of the logo, bottom-Left, bottom-right, top-left and top-right";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly useSection3D: {
                                readonly type: "boolean";
                                readonly description: "Use section in 3d";
                            };
                            readonly wallSectionHeight: {
                                readonly type: "number";
                                readonly description: "Wall section height";
                            };
                            readonly wallThickness: {
                                readonly type: "number";
                                readonly description: "Default wall thickness";
                            };
                            readonly wallOuterThickness: {
                                readonly type: "number";
                                readonly description: "Default wall thickness outside a room";
                            };
                            readonly wallTopColor2D: {
                                readonly type: "string";
                                readonly description: "Color of the wall on top in 2d";
                            };
                            readonly wallTopColor3D: {
                                readonly type: "string";
                                readonly description: "Color of the wall on top in 3d";
                            };
                            readonly blueprintBGColor: {
                                readonly type: "string";
                                readonly description: "Color of the wall on in blueprint mode";
                            };
                            readonly showObjects: {
                                readonly type: "boolean";
                                readonly description: "Display or hide objects";
                            };
                            readonly showObjectColour: {
                                readonly type: "boolean";
                                readonly description: "Show or hide object colours";
                            };
                            readonly showItemOutline: {
                                readonly type: "boolean";
                                readonly description: "Show or hide item outlines";
                            };
                            readonly showStructuralColour: {
                                readonly type: "boolean";
                                readonly description: "Show or hide structural colours";
                            };
                            readonly showFixtures: {
                                readonly type: "boolean";
                                readonly description: "Show or hide fixtures";
                            };
                            readonly showDropShadows: {
                                readonly type: "boolean";
                                readonly description: "Show drop shadows on objects";
                            };
                            readonly showLights: {
                                readonly type: "boolean";
                                readonly description: "Show or hide lights";
                            };
                            readonly showLabels: {
                                readonly type: "boolean";
                                readonly description: "Show or hide labels";
                            };
                            readonly showDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide dimensions";
                            };
                            readonly showAreaDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide area dimensions";
                            };
                            readonly showShortDims: {
                                readonly type: "boolean";
                                readonly description: "Show or hide short dimensions";
                            };
                            readonly showSymbols: {
                                readonly type: "boolean";
                                readonly description: "Show or hide symbols";
                            };
                            readonly dimLineLabelHorizontal: {
                                readonly type: "boolean";
                                readonly description: "Show dimension label horizontal";
                            };
                            readonly highResolutionRenderer: {
                                readonly type: "boolean";
                                readonly description: "Use high resolution renderer";
                            };
                            readonly tour: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly logo_image: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Remote URL to a logo for 3d tours";
                                            };
                                        };
                                    };
                                    readonly "background-color": {
                                        readonly type: "string";
                                        readonly description: "Tour background color in loading screen";
                                    };
                                    readonly project_name: {
                                        readonly type: "boolean";
                                        readonly description: "Show project name in tour preloader";
                                    };
                                    readonly project_creator: {
                                        readonly type: "boolean";
                                        readonly description: "Show project creator in tour preloader";
                                    };
                                    readonly project_location: {
                                        readonly type: "boolean";
                                        readonly description: "Show project location in tour preloader";
                                    };
                                    readonly project_last_updated: {
                                        readonly type: "boolean";
                                        readonly description: "Show project last updated date in tour preloader";
                                    };
                                    readonly font_family: {
                                        readonly type: "string";
                                        readonly description: "Use specific font in tour preloader";
                                    };
                                    readonly font_color: {
                                        readonly type: "string";
                                        readonly description: "Font color used on tour preloader";
                                    };
                                };
                            };
                            readonly prestation: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly background: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "Remote URL to a logo on the presentation";
                                            };
                                        };
                                    };
                                    readonly margins: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly top: {
                                                readonly type: "number";
                                            };
                                            readonly right: {
                                                readonly type: "number";
                                            };
                                            readonly bottom: {
                                                readonly type: "number";
                                            };
                                            readonly left: {
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                    readonly includePageNumber: {
                                        readonly type: "boolean";
                                        readonly description: "Show pages numbers in presentation";
                                    };
                                    readonly pageTitleSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family on the title page";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color on the title page";
                                            };
                                            readonly fontSize: {
                                                readonly type: "string";
                                                readonly description: "Font size on the title page";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Title position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly pageNumberSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family of page numbers";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color of page numbers";
                                            };
                                            readonly fontSize: {
                                                readonly type: "number";
                                                readonly description: "Font size of page numbers";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Page number position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly pageDisclaimerSettings: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fontFamily: {
                                                readonly type: "string";
                                                readonly description: "Font family of the disclaimer";
                                            };
                                            readonly fontColor: {
                                                readonly type: "string";
                                                readonly description: "Font color of the disclaimer";
                                            };
                                            readonly fontSize: {
                                                readonly type: "number";
                                                readonly description: "Font size of the disclaimer";
                                            };
                                            readonly position: {
                                                readonly type: "string";
                                                readonly description: "Disclaimer position";
                                                readonly enum: readonly ["br", "bl", "tr", "tl"];
                                            };
                                            readonly text: {
                                                readonly type: "string";
                                                readonly description: "The disclaimer text";
                                            };
                                            readonly margins: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly top: {
                                                        readonly type: "number";
                                                    };
                                                    readonly right: {
                                                        readonly type: "number";
                                                    };
                                                    readonly bottom: {
                                                        readonly type: "number";
                                                    };
                                                    readonly left: {
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly xRayWalls: {
                                readonly type: "boolean";
                                readonly description: "X-ray wall on/off";
                            };
                            readonly showCeilings3D: {
                                readonly type: "boolean";
                                readonly description: "Show or hide ceilings in 3d";
                            };
                            readonly showShadows3D: {
                                readonly type: "boolean";
                                readonly description: "Show or hide shadows in 3d";
                            };
                            readonly showFloorsBelow: {
                                readonly type: "boolean";
                                readonly description: "Show or hide floors below";
                            };
                            readonly explodeDistance: {
                                readonly type: "number";
                                readonly description: "Explode distance";
                            };
                            readonly areaLabelLetterSpacing: {
                                readonly type: "number";
                                readonly description: "Distance between characters in area labels";
                            };
                            readonly areaLabelOutline: {
                                readonly type: "boolean";
                                readonly description: "Show/hide area label text outlines";
                            };
                            readonly hideItemsAbove: {
                                readonly type: "boolean";
                                readonly description: "Hide items above each other";
                            };
                            readonly hideItemsAboveHeight: {
                                readonly type: "number";
                                readonly description: "Hide items above a certain height";
                            };
                            readonly engineAutoDims: {
                                readonly type: "boolean";
                                readonly description: "Generate dimensions automatically";
                            };
                            readonly generateOuterDimension: {
                                readonly type: "boolean";
                                readonly description: "Generate outer dimensions automatically";
                            };
                            readonly arrowHeadType: {
                                readonly type: "string";
                                readonly description: "Arrow head type";
                                readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the template";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly font: {
                    readonly type: "string";
                };
                readonly showIntro: {
                    readonly type: "boolean";
                };
                readonly introMagicLayout: {
                    readonly type: "boolean";
                };
                readonly introOwnRoomstyles: {
                    readonly type: "boolean";
                };
                readonly useMetric: {
                    readonly type: "boolean";
                };
                readonly scaleMultiplierDimensions: {
                    readonly type: "number";
                };
                readonly scaleMultiplierComments: {
                    readonly type: "number";
                };
                readonly areaLabelMultiplier: {
                    readonly type: "number";
                };
                readonly roomTypeSet: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly exports: {
                    readonly type: "object";
                    readonly properties: {
                        readonly backgrounds: {
                            readonly type: "object";
                            readonly properties: {
                                readonly floorplanPortrait: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly floorplanLandscape: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly backgroundImage: {
                                            readonly type: "string";
                                        };
                                        readonly margins: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly top: {
                                                    readonly type: "number";
                                                };
                                                readonly right: {
                                                    readonly type: "number";
                                                };
                                                readonly bottom: {
                                                    readonly type: "number";
                                                };
                                                readonly left: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly dimensions: {
                            readonly type: "string";
                        };
                        readonly disclaimer: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly logoUrl: {
                            readonly type: "string";
                        };
                        readonly north: {
                            readonly type: "object";
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                };
                                readonly type: {
                                    readonly type: "number";
                                    readonly enum: readonly [1, 2, 3, 4];
                                    readonly description: "`1` `2` `3` `4`";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                                readonly size: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly logo3D: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                                readonly corner: {
                                    readonly type: "string";
                                    readonly enum: readonly ["BL", "BR", "TL", "TR"];
                                    readonly description: "`BL` `BR` `TL` `TR`";
                                };
                            };
                        };
                    };
                };
                readonly useSection3D: {
                    readonly type: "boolean";
                };
                readonly wallSectionHeight: {
                    readonly type: "number";
                };
                readonly wallThickness: {
                    readonly type: "number";
                };
                readonly wallOuterThickness: {
                    readonly type: "number";
                };
                readonly wallTopColor2D: {
                    readonly type: "string";
                };
                readonly wallTopColor3D: {
                    readonly type: "string";
                };
                readonly blueprintBGColor: {
                    readonly type: "string";
                };
                readonly showObjects: {
                    readonly type: "boolean";
                };
                readonly showObjectColour: {
                    readonly type: "boolean";
                };
                readonly showItemOutline: {
                    readonly type: "boolean";
                };
                readonly showStructuralColour: {
                    readonly type: "boolean";
                };
                readonly showFixtures: {
                    readonly type: "boolean";
                };
                readonly showDropShadows: {
                    readonly type: "boolean";
                };
                readonly showLights: {
                    readonly type: "boolean";
                };
                readonly showLabels: {
                    readonly type: "boolean";
                };
                readonly showDims: {
                    readonly type: "boolean";
                };
                readonly showAreaDims: {
                    readonly type: "boolean";
                };
                readonly showShortDims: {
                    readonly type: "boolean";
                };
                readonly showSymbols: {
                    readonly type: "boolean";
                };
                readonly dimLineLabelHorizontal: {
                    readonly type: "boolean";
                };
                readonly highResolutionRenderer: {
                    readonly type: "boolean";
                };
                readonly tour: {
                    readonly type: "object";
                    readonly properties: {
                        readonly logo_image: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly "background-color": {
                            readonly type: "string";
                        };
                        readonly project_name: {
                            readonly type: "boolean";
                        };
                        readonly project_creator: {
                            readonly type: "boolean";
                        };
                        readonly project_location: {
                            readonly type: "boolean";
                        };
                        readonly project_last_updated: {
                            readonly type: "boolean";
                        };
                        readonly font_family: {
                            readonly type: "string";
                        };
                        readonly font_color: {
                            readonly type: "string";
                        };
                    };
                };
                readonly prestation: {
                    readonly type: "object";
                    readonly properties: {
                        readonly background: {
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly margins: {
                            readonly type: "object";
                            readonly properties: {
                                readonly top: {
                                    readonly type: "number";
                                };
                                readonly right: {
                                    readonly type: "number";
                                };
                                readonly bottom: {
                                    readonly type: "number";
                                };
                                readonly left: {
                                    readonly type: "number";
                                };
                            };
                        };
                        readonly includePageNumber: {
                            readonly type: "boolean";
                        };
                        readonly pageTitleSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "string";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageNumberSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                        readonly pageDisclaimerSettings: {
                            readonly type: "object";
                            readonly properties: {
                                readonly fontFamily: {
                                    readonly type: "string";
                                };
                                readonly fontColor: {
                                    readonly type: "string";
                                };
                                readonly fontSize: {
                                    readonly type: "number";
                                };
                                readonly position: {
                                    readonly type: "string";
                                    readonly enum: readonly ["br", "bl", "tr", "tl"];
                                    readonly description: "`br` `bl` `tr` `tl`";
                                };
                                readonly text: {
                                    readonly type: "string";
                                };
                                readonly margins: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly top: {
                                            readonly type: "number";
                                        };
                                        readonly right: {
                                            readonly type: "number";
                                        };
                                        readonly bottom: {
                                            readonly type: "number";
                                        };
                                        readonly left: {
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly xRayWalls: {
                    readonly type: "boolean";
                };
                readonly showCeilings3D: {
                    readonly type: "boolean";
                };
                readonly showShadows3D: {
                    readonly type: "boolean";
                };
                readonly showFloorsBelow: {
                    readonly type: "boolean";
                };
                readonly explodeDistance: {
                    readonly type: "number";
                };
                readonly areaLabelLetterSpacing: {
                    readonly type: "number";
                };
                readonly areaLabelOutline: {
                    readonly type: "boolean";
                };
                readonly hideItemsAbove: {
                    readonly type: "boolean";
                };
                readonly hideItemsAboveHeight: {
                    readonly type: "number";
                };
                readonly engineAutoDims: {
                    readonly type: "boolean";
                };
                readonly generateOuterDimension: {
                    readonly type: "boolean";
                };
                readonly arrowHeadType: {
                    readonly type: "string";
                    readonly enum: readonly ["arrow reverse-arrow arrow-top reverse-arrow-top"];
                    readonly description: "`arrow reverse-arrow arrow-top reverse-arrow-top`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateUser: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user: {
                readonly type: "object";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                        readonly description: "The email of the user";
                    };
                    readonly password: {
                        readonly type: "string";
                        readonly description: "Set a password";
                    };
                    readonly password_confirmation: {
                        readonly type: "string";
                        readonly description: "Confirmation of the password";
                    };
                    readonly external_identifier: {
                        readonly type: "string";
                        readonly description: "External ID of the user, needs to start with a string";
                    };
                    readonly profile_attributes: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly user_id: {
                                readonly type: "number";
                            };
                            readonly username: {
                                readonly type: "string";
                            };
                            readonly avatar: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly firstname: {
                                readonly type: "string";
                            };
                            readonly lastname: {
                                readonly type: "string";
                            };
                            readonly gender: {
                                readonly type: "string";
                            };
                            readonly zipcode: {
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly type: "string";
                            };
                            readonly measurements: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly type: "string";
                            };
                            readonly building: {
                                readonly type: "string";
                            };
                            readonly country_code: {
                                readonly type: "string";
                            };
                            readonly phonenumber: {
                                readonly type: "string";
                            };
                            readonly phone_country: {
                                readonly type: "string";
                            };
                            readonly birthdate: {
                                readonly type: "string";
                            };
                            readonly website: {
                                readonly type: "string";
                            };
                            readonly currency: {
                                readonly type: "string";
                            };
                            readonly newsletter: {
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the user";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly parent_id: {
                    readonly type: "number";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly avatar: {
                    readonly type: "string";
                };
                readonly features: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpgradeProject: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly level: {
                readonly type: "number";
                readonly description: "Level to upgrade the project to";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                };
                readonly user_id: {
                    readonly type: "number";
                };
                readonly level_id: {
                    readonly type: "number";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly project_url: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly enable_autosave: {
                    readonly type: "boolean";
                };
                readonly external_identifier: {
                    readonly type: "string";
                };
                readonly exported_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly public: {
                    readonly type: "boolean";
                };
                readonly floors: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                            };
                            readonly project_id: {
                                readonly type: "number";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly level: {
                                readonly type: "number";
                            };
                            readonly height: {
                                readonly type: "number";
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly designs: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                        };
                                        readonly floor_id: {
                                            readonly type: "number";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly thumb_2d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly thumb_3d_generated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly user_id: {
                                            readonly type: "number";
                                        };
                                        readonly design_type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["save", "save_as", "send_a_friend", "image_export", "save_and_mail", "bookmark"];
                                            readonly description: "`save` `save_as` `send_a_friend` `image_export` `save_and_mail` `bookmark`";
                                        };
                                        readonly design_hash: {
                                            readonly type: "string";
                                        };
                                        readonly created_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly updated_at: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const VrtourUpgradeProject: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the project";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "integer";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AssignLead, ConnectService, CopyProject, CopyStyleboard, CreateDesign, CreateDocument, CreateFloor, CreateFloorCamera, CreateFloorDrawing, CreateInviteSponsorship, CreateLabels, CreateProductGroup, CreateProject, CreateProjectPermission, CreateRole, CreateRoomType, CreateRoomTypeSet, CreateSponsorship, CreateStyleboard, CreateStyleboardPermission, CreateTemplate, CreateUser, DeleteLabels, DeletedDesigns, DeletedFloors, DeletedProjects, DestroyDesign, DestroyDocument, DestroyFloor, DestroyFloorCamera, DestroyFloorDrawing, DestroyLoad, DestroyProductGroup, DestroyProject, DestroyProjectPermission, DestroyRole, DestroyRoomType, DestroyRoomTypeSet, DestroySponsorship, DestroyStyleboard, DestroyStyleboardPermission, DestroyTemplate, DestroyUser, DisconnectService, DownloadProject, DuplicateProject, DuplicateStyleboard, ExportLeads, ExportPanoramaProject, ExportProject, FmlProject, ImportProject, ImportRoomplanProject, InviteUser, ListAdminProductGroups, ListCameras, ListDesigns, ListDocuments, ListExport, ListExportLabels, ListFloors, ListLabels, ListProductGroups, ListProjectLabels, ListProjectPermission, ListProjects, ListRoles, ListRoomTypes, ListServices, ListSponsorship, ListStyleboardPermission, ListStyleboards, ListTemplate, ListUserLabels, ListUserServices, ListUsers, MeasurementsDesign, MeasurementsFloor, MeasurementsProject, OrderFloorCameras, PopularProductsByAction, ProductAnalytics, ProductsProject, PublishProject, RecoverDesign, RecoverFloor, SearchExport, SearchLeads, SearchProjects, SearchRoomTypeSet, SearchUsers, SearchViewerProducts, SharePlannerProject, SharedInviteUser, ShowCompany, ShowDesign, ShowExport, ShowFloor, ShowFloorCamera, ShowFloorDrawing, ShowLeadData, ShowProduct, ShowProductGroup, ShowProfile, ShowProject, ShowProjectPermission, ShowRole, ShowRoomType, ShowRoomTypeSet, ShowSponsorship, ShowStyleboard, ShowStyleboardPermission, ShowTemplate, ShowUser, TexturesProject, TokenProject, TokenUser, UnassignRole, UndestroyProject, UnpublishProject, UpdateCompany, UpdateDesign, UpdateFloor, UpdateFloorCamera, UpdateFloorDrawing, UpdateProductGroup, UpdateProfile, UpdateProject, UpdateProjectPermission, UpdateRole, UpdateRoomType, UpdateRoomTypeSet, UpdateSponsorship, UpdateStyleboard, UpdateStyleboardPermission, UpdateTemplate, UpdateUser, UpgradeProject, VrtourUpgradeProject };
