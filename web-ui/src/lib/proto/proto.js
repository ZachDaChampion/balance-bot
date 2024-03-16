/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {Response.Code|null} [code] Response code
     * @property {number|null} [commandId] Response commandId
     * @property {string|null} [message] Response message
     */

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response code.
     * @member {Response.Code} code
     * @memberof Response
     * @instance
     */
    Response.prototype.code = 0;

    /**
     * Response commandId.
     * @member {number} commandId
     * @memberof Response
     * @instance
     */
    Response.prototype.commandId = 0;

    /**
     * Response message.
     * @member {string|null|undefined} message
     * @memberof Response
     * @instance
     */
    Response.prototype.message = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Response _message.
     * @member {"message"|undefined} _message
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_message", {
        get: $util.oneOfGetter($oneOfFields = ["message"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
        if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.commandId);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.int32();
                    break;
                }
            case 2: {
                    message.commandId = reader.uint32();
                    break;
                }
            case 3: {
                    message.message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.code != null && message.hasOwnProperty("code"))
            switch (message.code) {
            default:
                return "code: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            if (!$util.isInteger(message.commandId))
                return "commandId: integer expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            properties._message = 1;
            if (!$util.isString(message.message))
                return "message: string expected";
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        switch (object.code) {
        default:
            if (typeof object.code === "number") {
                message.code = object.code;
                break;
            }
            break;
        case "OK":
        case 0:
            message.code = 0;
            break;
        case "ERROR":
        case 1:
            message.code = 1;
            break;
        }
        if (object.commandId != null)
            message.commandId = object.commandId >>> 0;
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.code = options.enums === String ? "OK" : 0;
            object.commandId = 0;
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = options.enums === String ? $root.Response.Code[message.code] === undefined ? message.code : $root.Response.Code[message.code] : message.code;
        if (message.commandId != null && message.hasOwnProperty("commandId"))
            object.commandId = message.commandId;
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = message.message;
            if (options.oneofs)
                object._message = "message";
        }
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    /**
     * Code enum.
     * @name Response.Code
     * @enum {number}
     * @property {number} OK=0 OK value
     * @property {number} ERROR=1 ERROR value
     */
    Response.Code = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "ERROR"] = 1;
        return values;
    })();

    return Response;
})();

export const State = $root.State = (() => {

    /**
     * Properties of a State.
     * @exports IState
     * @interface IState
     * @property {number|null} [pitch] State pitch
     * @property {number|null} [yaw] State yaw
     * @property {number|null} [pitchRate] State pitchRate
     * @property {number|null} [yawRate] State yawRate
     * @property {number|null} [leftMotorAngle] State leftMotorAngle
     * @property {number|null} [rightMotorAngle] State rightMotorAngle
     * @property {number|null} [leftMotorSpeed] State leftMotorSpeed
     * @property {number|null} [rightMotorSpeed] State rightMotorSpeed
     * @property {boolean|null} [active] State active
     */

    /**
     * Constructs a new State.
     * @exports State
     * @classdesc Represents a State.
     * @implements IState
     * @constructor
     * @param {IState=} [properties] Properties to set
     */
    function State(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * State pitch.
     * @member {number} pitch
     * @memberof State
     * @instance
     */
    State.prototype.pitch = 0;

    /**
     * State yaw.
     * @member {number} yaw
     * @memberof State
     * @instance
     */
    State.prototype.yaw = 0;

    /**
     * State pitchRate.
     * @member {number} pitchRate
     * @memberof State
     * @instance
     */
    State.prototype.pitchRate = 0;

    /**
     * State yawRate.
     * @member {number} yawRate
     * @memberof State
     * @instance
     */
    State.prototype.yawRate = 0;

    /**
     * State leftMotorAngle.
     * @member {number} leftMotorAngle
     * @memberof State
     * @instance
     */
    State.prototype.leftMotorAngle = 0;

    /**
     * State rightMotorAngle.
     * @member {number} rightMotorAngle
     * @memberof State
     * @instance
     */
    State.prototype.rightMotorAngle = 0;

    /**
     * State leftMotorSpeed.
     * @member {number} leftMotorSpeed
     * @memberof State
     * @instance
     */
    State.prototype.leftMotorSpeed = 0;

    /**
     * State rightMotorSpeed.
     * @member {number} rightMotorSpeed
     * @memberof State
     * @instance
     */
    State.prototype.rightMotorSpeed = 0;

    /**
     * State active.
     * @member {boolean} active
     * @memberof State
     * @instance
     */
    State.prototype.active = false;

    /**
     * Creates a new State instance using the specified properties.
     * @function create
     * @memberof State
     * @static
     * @param {IState=} [properties] Properties to set
     * @returns {State} State instance
     */
    State.create = function create(properties) {
        return new State(properties);
    };

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @function encode
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.pitch);
        if (message.yaw != null && Object.hasOwnProperty.call(message, "yaw"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.yaw);
        if (message.pitchRate != null && Object.hasOwnProperty.call(message, "pitchRate"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.pitchRate);
        if (message.yawRate != null && Object.hasOwnProperty.call(message, "yawRate"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.yawRate);
        if (message.leftMotorAngle != null && Object.hasOwnProperty.call(message, "leftMotorAngle"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.leftMotorAngle);
        if (message.rightMotorAngle != null && Object.hasOwnProperty.call(message, "rightMotorAngle"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.rightMotorAngle);
        if (message.leftMotorSpeed != null && Object.hasOwnProperty.call(message, "leftMotorSpeed"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.leftMotorSpeed);
        if (message.rightMotorSpeed != null && Object.hasOwnProperty.call(message, "rightMotorSpeed"))
            writer.uint32(/* id 8, wireType 5 =*/69).float(message.rightMotorSpeed);
        if (message.active != null && Object.hasOwnProperty.call(message, "active"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.active);
        return writer;
    };

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @function encodeDelimited
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a State message from the specified reader or buffer.
     * @function decode
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.State();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.pitch = reader.float();
                    break;
                }
            case 2: {
                    message.yaw = reader.float();
                    break;
                }
            case 3: {
                    message.pitchRate = reader.float();
                    break;
                }
            case 4: {
                    message.yawRate = reader.float();
                    break;
                }
            case 5: {
                    message.leftMotorAngle = reader.float();
                    break;
                }
            case 6: {
                    message.rightMotorAngle = reader.float();
                    break;
                }
            case 7: {
                    message.leftMotorSpeed = reader.float();
                    break;
                }
            case 8: {
                    message.rightMotorSpeed = reader.float();
                    break;
                }
            case 9: {
                    message.active = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a State message.
     * @function verify
     * @memberof State
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    State.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            if (typeof message.pitch !== "number")
                return "pitch: number expected";
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            if (typeof message.yaw !== "number")
                return "yaw: number expected";
        if (message.pitchRate != null && message.hasOwnProperty("pitchRate"))
            if (typeof message.pitchRate !== "number")
                return "pitchRate: number expected";
        if (message.yawRate != null && message.hasOwnProperty("yawRate"))
            if (typeof message.yawRate !== "number")
                return "yawRate: number expected";
        if (message.leftMotorAngle != null && message.hasOwnProperty("leftMotorAngle"))
            if (typeof message.leftMotorAngle !== "number")
                return "leftMotorAngle: number expected";
        if (message.rightMotorAngle != null && message.hasOwnProperty("rightMotorAngle"))
            if (typeof message.rightMotorAngle !== "number")
                return "rightMotorAngle: number expected";
        if (message.leftMotorSpeed != null && message.hasOwnProperty("leftMotorSpeed"))
            if (typeof message.leftMotorSpeed !== "number")
                return "leftMotorSpeed: number expected";
        if (message.rightMotorSpeed != null && message.hasOwnProperty("rightMotorSpeed"))
            if (typeof message.rightMotorSpeed !== "number")
                return "rightMotorSpeed: number expected";
        if (message.active != null && message.hasOwnProperty("active"))
            if (typeof message.active !== "boolean")
                return "active: boolean expected";
        return null;
    };

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof State
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {State} State
     */
    State.fromObject = function fromObject(object) {
        if (object instanceof $root.State)
            return object;
        let message = new $root.State();
        if (object.pitch != null)
            message.pitch = Number(object.pitch);
        if (object.yaw != null)
            message.yaw = Number(object.yaw);
        if (object.pitchRate != null)
            message.pitchRate = Number(object.pitchRate);
        if (object.yawRate != null)
            message.yawRate = Number(object.yawRate);
        if (object.leftMotorAngle != null)
            message.leftMotorAngle = Number(object.leftMotorAngle);
        if (object.rightMotorAngle != null)
            message.rightMotorAngle = Number(object.rightMotorAngle);
        if (object.leftMotorSpeed != null)
            message.leftMotorSpeed = Number(object.leftMotorSpeed);
        if (object.rightMotorSpeed != null)
            message.rightMotorSpeed = Number(object.rightMotorSpeed);
        if (object.active != null)
            message.active = Boolean(object.active);
        return message;
    };

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @function toObject
     * @memberof State
     * @static
     * @param {State} message State
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    State.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.pitch = 0;
            object.yaw = 0;
            object.pitchRate = 0;
            object.yawRate = 0;
            object.leftMotorAngle = 0;
            object.rightMotorAngle = 0;
            object.leftMotorSpeed = 0;
            object.rightMotorSpeed = 0;
            object.active = false;
        }
        if (message.pitch != null && message.hasOwnProperty("pitch"))
            object.pitch = options.json && !isFinite(message.pitch) ? String(message.pitch) : message.pitch;
        if (message.yaw != null && message.hasOwnProperty("yaw"))
            object.yaw = options.json && !isFinite(message.yaw) ? String(message.yaw) : message.yaw;
        if (message.pitchRate != null && message.hasOwnProperty("pitchRate"))
            object.pitchRate = options.json && !isFinite(message.pitchRate) ? String(message.pitchRate) : message.pitchRate;
        if (message.yawRate != null && message.hasOwnProperty("yawRate"))
            object.yawRate = options.json && !isFinite(message.yawRate) ? String(message.yawRate) : message.yawRate;
        if (message.leftMotorAngle != null && message.hasOwnProperty("leftMotorAngle"))
            object.leftMotorAngle = options.json && !isFinite(message.leftMotorAngle) ? String(message.leftMotorAngle) : message.leftMotorAngle;
        if (message.rightMotorAngle != null && message.hasOwnProperty("rightMotorAngle"))
            object.rightMotorAngle = options.json && !isFinite(message.rightMotorAngle) ? String(message.rightMotorAngle) : message.rightMotorAngle;
        if (message.leftMotorSpeed != null && message.hasOwnProperty("leftMotorSpeed"))
            object.leftMotorSpeed = options.json && !isFinite(message.leftMotorSpeed) ? String(message.leftMotorSpeed) : message.leftMotorSpeed;
        if (message.rightMotorSpeed != null && message.hasOwnProperty("rightMotorSpeed"))
            object.rightMotorSpeed = options.json && !isFinite(message.rightMotorSpeed) ? String(message.rightMotorSpeed) : message.rightMotorSpeed;
        if (message.active != null && message.hasOwnProperty("active"))
            object.active = message.active;
        return object;
    };

    /**
     * Converts this State to JSON.
     * @function toJSON
     * @memberof State
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    State.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for State
     * @function getTypeUrl
     * @memberof State
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    State.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/State";
    };

    return State;
})();

export const Bot2Web = $root.Bot2Web = (() => {

    /**
     * Properties of a Bot2Web.
     * @exports IBot2Web
     * @interface IBot2Web
     * @property {number|null} [id] Bot2Web id
     * @property {IResponse|null} [response] Bot2Web response
     * @property {IState|null} [state] Bot2Web state
     * @property {IPhysicalParams|null} [physicalParams] Bot2Web physicalParams
     * @property {IPitchControllerParams|null} [pitchControllerParams] Bot2Web pitchControllerParams
     * @property {IYawControllerParams|null} [yawControllerParams] Bot2Web yawControllerParams
     * @property {ILog|null} [log] Bot2Web log
     */

    /**
     * Constructs a new Bot2Web.
     * @exports Bot2Web
     * @classdesc Represents a Bot2Web.
     * @implements IBot2Web
     * @constructor
     * @param {IBot2Web=} [properties] Properties to set
     */
    function Bot2Web(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Bot2Web id.
     * @member {number} id
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.id = 0;

    /**
     * Bot2Web response.
     * @member {IResponse|null|undefined} response
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.response = null;

    /**
     * Bot2Web state.
     * @member {IState|null|undefined} state
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.state = null;

    /**
     * Bot2Web physicalParams.
     * @member {IPhysicalParams|null|undefined} physicalParams
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.physicalParams = null;

    /**
     * Bot2Web pitchControllerParams.
     * @member {IPitchControllerParams|null|undefined} pitchControllerParams
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.pitchControllerParams = null;

    /**
     * Bot2Web yawControllerParams.
     * @member {IYawControllerParams|null|undefined} yawControllerParams
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.yawControllerParams = null;

    /**
     * Bot2Web log.
     * @member {ILog|null|undefined} log
     * @memberof Bot2Web
     * @instance
     */
    Bot2Web.prototype.log = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Bot2Web msg.
     * @member {"response"|"state"|"physicalParams"|"pitchControllerParams"|"yawControllerParams"|"log"|undefined} msg
     * @memberof Bot2Web
     * @instance
     */
    Object.defineProperty(Bot2Web.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["response", "state", "physicalParams", "pitchControllerParams", "yawControllerParams", "log"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Bot2Web instance using the specified properties.
     * @function create
     * @memberof Bot2Web
     * @static
     * @param {IBot2Web=} [properties] Properties to set
     * @returns {Bot2Web} Bot2Web instance
     */
    Bot2Web.create = function create(properties) {
        return new Bot2Web(properties);
    };

    /**
     * Encodes the specified Bot2Web message. Does not implicitly {@link Bot2Web.verify|verify} messages.
     * @function encode
     * @memberof Bot2Web
     * @static
     * @param {IBot2Web} message Bot2Web message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bot2Web.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            $root.State.encode(message.state, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.physicalParams != null && Object.hasOwnProperty.call(message, "physicalParams"))
            $root.PhysicalParams.encode(message.physicalParams, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.pitchControllerParams != null && Object.hasOwnProperty.call(message, "pitchControllerParams"))
            $root.PitchControllerParams.encode(message.pitchControllerParams, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.yawControllerParams != null && Object.hasOwnProperty.call(message, "yawControllerParams"))
            $root.YawControllerParams.encode(message.yawControllerParams, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.log != null && Object.hasOwnProperty.call(message, "log"))
            $root.Log.encode(message.log, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Bot2Web message, length delimited. Does not implicitly {@link Bot2Web.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Bot2Web
     * @static
     * @param {IBot2Web} message Bot2Web message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Bot2Web.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Bot2Web message from the specified reader or buffer.
     * @function decode
     * @memberof Bot2Web
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Bot2Web} Bot2Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bot2Web.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Bot2Web();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.response = $root.Response.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.state = $root.State.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.physicalParams = $root.PhysicalParams.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.pitchControllerParams = $root.PitchControllerParams.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.yawControllerParams = $root.YawControllerParams.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.log = $root.Log.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Bot2Web message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Bot2Web
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Bot2Web} Bot2Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Bot2Web.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Bot2Web message.
     * @function verify
     * @memberof Bot2Web
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Bot2Web.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            properties.msg = 1;
            {
                let error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        if (message.state != null && message.hasOwnProperty("state")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.State.verify(message.state);
                if (error)
                    return "state." + error;
            }
        }
        if (message.physicalParams != null && message.hasOwnProperty("physicalParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.PhysicalParams.verify(message.physicalParams);
                if (error)
                    return "physicalParams." + error;
            }
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.PitchControllerParams.verify(message.pitchControllerParams);
                if (error)
                    return "pitchControllerParams." + error;
            }
        }
        if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.YawControllerParams.verify(message.yawControllerParams);
                if (error)
                    return "yawControllerParams." + error;
            }
        }
        if (message.log != null && message.hasOwnProperty("log")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.Log.verify(message.log);
                if (error)
                    return "log." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Bot2Web message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Bot2Web
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Bot2Web} Bot2Web
     */
    Bot2Web.fromObject = function fromObject(object) {
        if (object instanceof $root.Bot2Web)
            return object;
        let message = new $root.Bot2Web();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".Bot2Web.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        if (object.state != null) {
            if (typeof object.state !== "object")
                throw TypeError(".Bot2Web.state: object expected");
            message.state = $root.State.fromObject(object.state);
        }
        if (object.physicalParams != null) {
            if (typeof object.physicalParams !== "object")
                throw TypeError(".Bot2Web.physicalParams: object expected");
            message.physicalParams = $root.PhysicalParams.fromObject(object.physicalParams);
        }
        if (object.pitchControllerParams != null) {
            if (typeof object.pitchControllerParams !== "object")
                throw TypeError(".Bot2Web.pitchControllerParams: object expected");
            message.pitchControllerParams = $root.PitchControllerParams.fromObject(object.pitchControllerParams);
        }
        if (object.yawControllerParams != null) {
            if (typeof object.yawControllerParams !== "object")
                throw TypeError(".Bot2Web.yawControllerParams: object expected");
            message.yawControllerParams = $root.YawControllerParams.fromObject(object.yawControllerParams);
        }
        if (object.log != null) {
            if (typeof object.log !== "object")
                throw TypeError(".Bot2Web.log: object expected");
            message.log = $root.Log.fromObject(object.log);
        }
        return message;
    };

    /**
     * Creates a plain object from a Bot2Web message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Bot2Web
     * @static
     * @param {Bot2Web} message Bot2Web
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Bot2Web.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.Response.toObject(message.response, options);
            if (options.oneofs)
                object.msg = "response";
        }
        if (message.state != null && message.hasOwnProperty("state")) {
            object.state = $root.State.toObject(message.state, options);
            if (options.oneofs)
                object.msg = "state";
        }
        if (message.physicalParams != null && message.hasOwnProperty("physicalParams")) {
            object.physicalParams = $root.PhysicalParams.toObject(message.physicalParams, options);
            if (options.oneofs)
                object.msg = "physicalParams";
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            object.pitchControllerParams = $root.PitchControllerParams.toObject(message.pitchControllerParams, options);
            if (options.oneofs)
                object.msg = "pitchControllerParams";
        }
        if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
            object.yawControllerParams = $root.YawControllerParams.toObject(message.yawControllerParams, options);
            if (options.oneofs)
                object.msg = "yawControllerParams";
        }
        if (message.log != null && message.hasOwnProperty("log")) {
            object.log = $root.Log.toObject(message.log, options);
            if (options.oneofs)
                object.msg = "log";
        }
        return object;
    };

    /**
     * Converts this Bot2Web to JSON.
     * @function toJSON
     * @memberof Bot2Web
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Bot2Web.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Bot2Web
     * @function getTypeUrl
     * @memberof Bot2Web
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Bot2Web.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Bot2Web";
    };

    return Bot2Web;
})();

export const PhysicalParams = $root.PhysicalParams = (() => {

    /**
     * Properties of a PhysicalParams.
     * @exports IPhysicalParams
     * @interface IPhysicalParams
     * @property {number|null} [wheelRadius] PhysicalParams wheelRadius
     * @property {number|null} [wheelBase] PhysicalParams wheelBase
     * @property {number|null} [motorMaxSpeed] PhysicalParams motorMaxSpeed
     * @property {number|null} [gravity] PhysicalParams gravity
     * @property {number|null} [torqueLength] PhysicalParams torqueLength
     */

    /**
     * Constructs a new PhysicalParams.
     * @exports PhysicalParams
     * @classdesc Represents a PhysicalParams.
     * @implements IPhysicalParams
     * @constructor
     * @param {IPhysicalParams=} [properties] Properties to set
     */
    function PhysicalParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PhysicalParams wheelRadius.
     * @member {number} wheelRadius
     * @memberof PhysicalParams
     * @instance
     */
    PhysicalParams.prototype.wheelRadius = 0;

    /**
     * PhysicalParams wheelBase.
     * @member {number} wheelBase
     * @memberof PhysicalParams
     * @instance
     */
    PhysicalParams.prototype.wheelBase = 0;

    /**
     * PhysicalParams motorMaxSpeed.
     * @member {number} motorMaxSpeed
     * @memberof PhysicalParams
     * @instance
     */
    PhysicalParams.prototype.motorMaxSpeed = 0;

    /**
     * PhysicalParams gravity.
     * @member {number} gravity
     * @memberof PhysicalParams
     * @instance
     */
    PhysicalParams.prototype.gravity = 0;

    /**
     * PhysicalParams torqueLength.
     * @member {number} torqueLength
     * @memberof PhysicalParams
     * @instance
     */
    PhysicalParams.prototype.torqueLength = 0;

    /**
     * Creates a new PhysicalParams instance using the specified properties.
     * @function create
     * @memberof PhysicalParams
     * @static
     * @param {IPhysicalParams=} [properties] Properties to set
     * @returns {PhysicalParams} PhysicalParams instance
     */
    PhysicalParams.create = function create(properties) {
        return new PhysicalParams(properties);
    };

    /**
     * Encodes the specified PhysicalParams message. Does not implicitly {@link PhysicalParams.verify|verify} messages.
     * @function encode
     * @memberof PhysicalParams
     * @static
     * @param {IPhysicalParams} message PhysicalParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhysicalParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.wheelRadius != null && Object.hasOwnProperty.call(message, "wheelRadius"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.wheelRadius);
        if (message.wheelBase != null && Object.hasOwnProperty.call(message, "wheelBase"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.wheelBase);
        if (message.motorMaxSpeed != null && Object.hasOwnProperty.call(message, "motorMaxSpeed"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.motorMaxSpeed);
        if (message.gravity != null && Object.hasOwnProperty.call(message, "gravity"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.gravity);
        if (message.torqueLength != null && Object.hasOwnProperty.call(message, "torqueLength"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.torqueLength);
        return writer;
    };

    /**
     * Encodes the specified PhysicalParams message, length delimited. Does not implicitly {@link PhysicalParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PhysicalParams
     * @static
     * @param {IPhysicalParams} message PhysicalParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhysicalParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PhysicalParams message from the specified reader or buffer.
     * @function decode
     * @memberof PhysicalParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PhysicalParams} PhysicalParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhysicalParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PhysicalParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.wheelRadius = reader.float();
                    break;
                }
            case 2: {
                    message.wheelBase = reader.float();
                    break;
                }
            case 3: {
                    message.motorMaxSpeed = reader.float();
                    break;
                }
            case 4: {
                    message.gravity = reader.float();
                    break;
                }
            case 5: {
                    message.torqueLength = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PhysicalParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PhysicalParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PhysicalParams} PhysicalParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhysicalParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PhysicalParams message.
     * @function verify
     * @memberof PhysicalParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PhysicalParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.wheelRadius != null && message.hasOwnProperty("wheelRadius"))
            if (typeof message.wheelRadius !== "number")
                return "wheelRadius: number expected";
        if (message.wheelBase != null && message.hasOwnProperty("wheelBase"))
            if (typeof message.wheelBase !== "number")
                return "wheelBase: number expected";
        if (message.motorMaxSpeed != null && message.hasOwnProperty("motorMaxSpeed"))
            if (typeof message.motorMaxSpeed !== "number")
                return "motorMaxSpeed: number expected";
        if (message.gravity != null && message.hasOwnProperty("gravity"))
            if (typeof message.gravity !== "number")
                return "gravity: number expected";
        if (message.torqueLength != null && message.hasOwnProperty("torqueLength"))
            if (typeof message.torqueLength !== "number")
                return "torqueLength: number expected";
        return null;
    };

    /**
     * Creates a PhysicalParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PhysicalParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PhysicalParams} PhysicalParams
     */
    PhysicalParams.fromObject = function fromObject(object) {
        if (object instanceof $root.PhysicalParams)
            return object;
        let message = new $root.PhysicalParams();
        if (object.wheelRadius != null)
            message.wheelRadius = Number(object.wheelRadius);
        if (object.wheelBase != null)
            message.wheelBase = Number(object.wheelBase);
        if (object.motorMaxSpeed != null)
            message.motorMaxSpeed = Number(object.motorMaxSpeed);
        if (object.gravity != null)
            message.gravity = Number(object.gravity);
        if (object.torqueLength != null)
            message.torqueLength = Number(object.torqueLength);
        return message;
    };

    /**
     * Creates a plain object from a PhysicalParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PhysicalParams
     * @static
     * @param {PhysicalParams} message PhysicalParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PhysicalParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.wheelRadius = 0;
            object.wheelBase = 0;
            object.motorMaxSpeed = 0;
            object.gravity = 0;
            object.torqueLength = 0;
        }
        if (message.wheelRadius != null && message.hasOwnProperty("wheelRadius"))
            object.wheelRadius = options.json && !isFinite(message.wheelRadius) ? String(message.wheelRadius) : message.wheelRadius;
        if (message.wheelBase != null && message.hasOwnProperty("wheelBase"))
            object.wheelBase = options.json && !isFinite(message.wheelBase) ? String(message.wheelBase) : message.wheelBase;
        if (message.motorMaxSpeed != null && message.hasOwnProperty("motorMaxSpeed"))
            object.motorMaxSpeed = options.json && !isFinite(message.motorMaxSpeed) ? String(message.motorMaxSpeed) : message.motorMaxSpeed;
        if (message.gravity != null && message.hasOwnProperty("gravity"))
            object.gravity = options.json && !isFinite(message.gravity) ? String(message.gravity) : message.gravity;
        if (message.torqueLength != null && message.hasOwnProperty("torqueLength"))
            object.torqueLength = options.json && !isFinite(message.torqueLength) ? String(message.torqueLength) : message.torqueLength;
        return object;
    };

    /**
     * Converts this PhysicalParams to JSON.
     * @function toJSON
     * @memberof PhysicalParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PhysicalParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PhysicalParams
     * @function getTypeUrl
     * @memberof PhysicalParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PhysicalParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PhysicalParams";
    };

    return PhysicalParams;
})();

export const PitchControllerParams = $root.PitchControllerParams = (() => {

    /**
     * Properties of a PitchControllerParams.
     * @exports IPitchControllerParams
     * @interface IPitchControllerParams
     * @property {IPitchPidParams|null} [pid] PitchControllerParams pid
     */

    /**
     * Constructs a new PitchControllerParams.
     * @exports PitchControllerParams
     * @classdesc Represents a PitchControllerParams.
     * @implements IPitchControllerParams
     * @constructor
     * @param {IPitchControllerParams=} [properties] Properties to set
     */
    function PitchControllerParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PitchControllerParams pid.
     * @member {IPitchPidParams|null|undefined} pid
     * @memberof PitchControllerParams
     * @instance
     */
    PitchControllerParams.prototype.pid = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * PitchControllerParams params.
     * @member {"pid"|undefined} params
     * @memberof PitchControllerParams
     * @instance
     */
    Object.defineProperty(PitchControllerParams.prototype, "params", {
        get: $util.oneOfGetter($oneOfFields = ["pid"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new PitchControllerParams instance using the specified properties.
     * @function create
     * @memberof PitchControllerParams
     * @static
     * @param {IPitchControllerParams=} [properties] Properties to set
     * @returns {PitchControllerParams} PitchControllerParams instance
     */
    PitchControllerParams.create = function create(properties) {
        return new PitchControllerParams(properties);
    };

    /**
     * Encodes the specified PitchControllerParams message. Does not implicitly {@link PitchControllerParams.verify|verify} messages.
     * @function encode
     * @memberof PitchControllerParams
     * @static
     * @param {IPitchControllerParams} message PitchControllerParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PitchControllerParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
            $root.PitchPidParams.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PitchControllerParams message, length delimited. Does not implicitly {@link PitchControllerParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PitchControllerParams
     * @static
     * @param {IPitchControllerParams} message PitchControllerParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PitchControllerParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PitchControllerParams message from the specified reader or buffer.
     * @function decode
     * @memberof PitchControllerParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PitchControllerParams} PitchControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PitchControllerParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PitchControllerParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.pid = $root.PitchPidParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PitchControllerParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PitchControllerParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PitchControllerParams} PitchControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PitchControllerParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PitchControllerParams message.
     * @function verify
     * @memberof PitchControllerParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PitchControllerParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.pid != null && message.hasOwnProperty("pid")) {
            properties.params = 1;
            {
                let error = $root.PitchPidParams.verify(message.pid);
                if (error)
                    return "pid." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PitchControllerParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PitchControllerParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PitchControllerParams} PitchControllerParams
     */
    PitchControllerParams.fromObject = function fromObject(object) {
        if (object instanceof $root.PitchControllerParams)
            return object;
        let message = new $root.PitchControllerParams();
        if (object.pid != null) {
            if (typeof object.pid !== "object")
                throw TypeError(".PitchControllerParams.pid: object expected");
            message.pid = $root.PitchPidParams.fromObject(object.pid);
        }
        return message;
    };

    /**
     * Creates a plain object from a PitchControllerParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PitchControllerParams
     * @static
     * @param {PitchControllerParams} message PitchControllerParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PitchControllerParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.pid != null && message.hasOwnProperty("pid")) {
            object.pid = $root.PitchPidParams.toObject(message.pid, options);
            if (options.oneofs)
                object.params = "pid";
        }
        return object;
    };

    /**
     * Converts this PitchControllerParams to JSON.
     * @function toJSON
     * @memberof PitchControllerParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PitchControllerParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PitchControllerParams
     * @function getTypeUrl
     * @memberof PitchControllerParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PitchControllerParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PitchControllerParams";
    };

    return PitchControllerParams;
})();

export const YawControllerParams = $root.YawControllerParams = (() => {

    /**
     * Properties of a YawControllerParams.
     * @exports IYawControllerParams
     * @interface IYawControllerParams
     * @property {IYawPidParams|null} [pid] YawControllerParams pid
     */

    /**
     * Constructs a new YawControllerParams.
     * @exports YawControllerParams
     * @classdesc Represents a YawControllerParams.
     * @implements IYawControllerParams
     * @constructor
     * @param {IYawControllerParams=} [properties] Properties to set
     */
    function YawControllerParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * YawControllerParams pid.
     * @member {IYawPidParams|null|undefined} pid
     * @memberof YawControllerParams
     * @instance
     */
    YawControllerParams.prototype.pid = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * YawControllerParams params.
     * @member {"pid"|undefined} params
     * @memberof YawControllerParams
     * @instance
     */
    Object.defineProperty(YawControllerParams.prototype, "params", {
        get: $util.oneOfGetter($oneOfFields = ["pid"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new YawControllerParams instance using the specified properties.
     * @function create
     * @memberof YawControllerParams
     * @static
     * @param {IYawControllerParams=} [properties] Properties to set
     * @returns {YawControllerParams} YawControllerParams instance
     */
    YawControllerParams.create = function create(properties) {
        return new YawControllerParams(properties);
    };

    /**
     * Encodes the specified YawControllerParams message. Does not implicitly {@link YawControllerParams.verify|verify} messages.
     * @function encode
     * @memberof YawControllerParams
     * @static
     * @param {IYawControllerParams} message YawControllerParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    YawControllerParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
            $root.YawPidParams.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified YawControllerParams message, length delimited. Does not implicitly {@link YawControllerParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof YawControllerParams
     * @static
     * @param {IYawControllerParams} message YawControllerParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    YawControllerParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a YawControllerParams message from the specified reader or buffer.
     * @function decode
     * @memberof YawControllerParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {YawControllerParams} YawControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    YawControllerParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.YawControllerParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.pid = $root.YawPidParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a YawControllerParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof YawControllerParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {YawControllerParams} YawControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    YawControllerParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a YawControllerParams message.
     * @function verify
     * @memberof YawControllerParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    YawControllerParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.pid != null && message.hasOwnProperty("pid")) {
            properties.params = 1;
            {
                let error = $root.YawPidParams.verify(message.pid);
                if (error)
                    return "pid." + error;
            }
        }
        return null;
    };

    /**
     * Creates a YawControllerParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof YawControllerParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {YawControllerParams} YawControllerParams
     */
    YawControllerParams.fromObject = function fromObject(object) {
        if (object instanceof $root.YawControllerParams)
            return object;
        let message = new $root.YawControllerParams();
        if (object.pid != null) {
            if (typeof object.pid !== "object")
                throw TypeError(".YawControllerParams.pid: object expected");
            message.pid = $root.YawPidParams.fromObject(object.pid);
        }
        return message;
    };

    /**
     * Creates a plain object from a YawControllerParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof YawControllerParams
     * @static
     * @param {YawControllerParams} message YawControllerParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    YawControllerParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.pid != null && message.hasOwnProperty("pid")) {
            object.pid = $root.YawPidParams.toObject(message.pid, options);
            if (options.oneofs)
                object.params = "pid";
        }
        return object;
    };

    /**
     * Converts this YawControllerParams to JSON.
     * @function toJSON
     * @memberof YawControllerParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    YawControllerParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for YawControllerParams
     * @function getTypeUrl
     * @memberof YawControllerParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    YawControllerParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/YawControllerParams";
    };

    return YawControllerParams;
})();

export const PitchPidParams = $root.PitchPidParams = (() => {

    /**
     * Properties of a PitchPidParams.
     * @exports IPitchPidParams
     * @interface IPitchPidParams
     * @property {number|null} [kp] PitchPidParams kp
     * @property {number|null} [ki] PitchPidParams ki
     * @property {number|null} [kd] PitchPidParams kd
     * @property {number|null} [kf] PitchPidParams kf
     * @property {number|null} [integralZeroThreshold] PitchPidParams integralZeroThreshold
     * @property {number|null} [integralSaturationLimit] PitchPidParams integralSaturationLimit
     * @property {boolean|null} [resetIntegral] PitchPidParams resetIntegral
     * @property {boolean|null} [ffAddGravity] PitchPidParams ffAddGravity
     */

    /**
     * Constructs a new PitchPidParams.
     * @exports PitchPidParams
     * @classdesc Represents a PitchPidParams.
     * @implements IPitchPidParams
     * @constructor
     * @param {IPitchPidParams=} [properties] Properties to set
     */
    function PitchPidParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PitchPidParams kp.
     * @member {number} kp
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.kp = 0;

    /**
     * PitchPidParams ki.
     * @member {number} ki
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.ki = 0;

    /**
     * PitchPidParams kd.
     * @member {number} kd
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.kd = 0;

    /**
     * PitchPidParams kf.
     * @member {number} kf
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.kf = 0;

    /**
     * PitchPidParams integralZeroThreshold.
     * @member {number} integralZeroThreshold
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.integralZeroThreshold = 0;

    /**
     * PitchPidParams integralSaturationLimit.
     * @member {number} integralSaturationLimit
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.integralSaturationLimit = 0;

    /**
     * PitchPidParams resetIntegral.
     * @member {boolean} resetIntegral
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.resetIntegral = false;

    /**
     * PitchPidParams ffAddGravity.
     * @member {boolean} ffAddGravity
     * @memberof PitchPidParams
     * @instance
     */
    PitchPidParams.prototype.ffAddGravity = false;

    /**
     * Creates a new PitchPidParams instance using the specified properties.
     * @function create
     * @memberof PitchPidParams
     * @static
     * @param {IPitchPidParams=} [properties] Properties to set
     * @returns {PitchPidParams} PitchPidParams instance
     */
    PitchPidParams.create = function create(properties) {
        return new PitchPidParams(properties);
    };

    /**
     * Encodes the specified PitchPidParams message. Does not implicitly {@link PitchPidParams.verify|verify} messages.
     * @function encode
     * @memberof PitchPidParams
     * @static
     * @param {IPitchPidParams} message PitchPidParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PitchPidParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kp != null && Object.hasOwnProperty.call(message, "kp"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.kp);
        if (message.ki != null && Object.hasOwnProperty.call(message, "ki"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.ki);
        if (message.kd != null && Object.hasOwnProperty.call(message, "kd"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.kd);
        if (message.kf != null && Object.hasOwnProperty.call(message, "kf"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.kf);
        if (message.integralZeroThreshold != null && Object.hasOwnProperty.call(message, "integralZeroThreshold"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.integralZeroThreshold);
        if (message.integralSaturationLimit != null && Object.hasOwnProperty.call(message, "integralSaturationLimit"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.integralSaturationLimit);
        if (message.resetIntegral != null && Object.hasOwnProperty.call(message, "resetIntegral"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.resetIntegral);
        if (message.ffAddGravity != null && Object.hasOwnProperty.call(message, "ffAddGravity"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.ffAddGravity);
        return writer;
    };

    /**
     * Encodes the specified PitchPidParams message, length delimited. Does not implicitly {@link PitchPidParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PitchPidParams
     * @static
     * @param {IPitchPidParams} message PitchPidParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PitchPidParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PitchPidParams message from the specified reader or buffer.
     * @function decode
     * @memberof PitchPidParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PitchPidParams} PitchPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PitchPidParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PitchPidParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.kp = reader.float();
                    break;
                }
            case 2: {
                    message.ki = reader.float();
                    break;
                }
            case 3: {
                    message.kd = reader.float();
                    break;
                }
            case 4: {
                    message.kf = reader.float();
                    break;
                }
            case 5: {
                    message.integralZeroThreshold = reader.float();
                    break;
                }
            case 6: {
                    message.integralSaturationLimit = reader.float();
                    break;
                }
            case 7: {
                    message.resetIntegral = reader.bool();
                    break;
                }
            case 8: {
                    message.ffAddGravity = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PitchPidParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PitchPidParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PitchPidParams} PitchPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PitchPidParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PitchPidParams message.
     * @function verify
     * @memberof PitchPidParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PitchPidParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kp != null && message.hasOwnProperty("kp"))
            if (typeof message.kp !== "number")
                return "kp: number expected";
        if (message.ki != null && message.hasOwnProperty("ki"))
            if (typeof message.ki !== "number")
                return "ki: number expected";
        if (message.kd != null && message.hasOwnProperty("kd"))
            if (typeof message.kd !== "number")
                return "kd: number expected";
        if (message.kf != null && message.hasOwnProperty("kf"))
            if (typeof message.kf !== "number")
                return "kf: number expected";
        if (message.integralZeroThreshold != null && message.hasOwnProperty("integralZeroThreshold"))
            if (typeof message.integralZeroThreshold !== "number")
                return "integralZeroThreshold: number expected";
        if (message.integralSaturationLimit != null && message.hasOwnProperty("integralSaturationLimit"))
            if (typeof message.integralSaturationLimit !== "number")
                return "integralSaturationLimit: number expected";
        if (message.resetIntegral != null && message.hasOwnProperty("resetIntegral"))
            if (typeof message.resetIntegral !== "boolean")
                return "resetIntegral: boolean expected";
        if (message.ffAddGravity != null && message.hasOwnProperty("ffAddGravity"))
            if (typeof message.ffAddGravity !== "boolean")
                return "ffAddGravity: boolean expected";
        return null;
    };

    /**
     * Creates a PitchPidParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PitchPidParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PitchPidParams} PitchPidParams
     */
    PitchPidParams.fromObject = function fromObject(object) {
        if (object instanceof $root.PitchPidParams)
            return object;
        let message = new $root.PitchPidParams();
        if (object.kp != null)
            message.kp = Number(object.kp);
        if (object.ki != null)
            message.ki = Number(object.ki);
        if (object.kd != null)
            message.kd = Number(object.kd);
        if (object.kf != null)
            message.kf = Number(object.kf);
        if (object.integralZeroThreshold != null)
            message.integralZeroThreshold = Number(object.integralZeroThreshold);
        if (object.integralSaturationLimit != null)
            message.integralSaturationLimit = Number(object.integralSaturationLimit);
        if (object.resetIntegral != null)
            message.resetIntegral = Boolean(object.resetIntegral);
        if (object.ffAddGravity != null)
            message.ffAddGravity = Boolean(object.ffAddGravity);
        return message;
    };

    /**
     * Creates a plain object from a PitchPidParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PitchPidParams
     * @static
     * @param {PitchPidParams} message PitchPidParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PitchPidParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.kp = 0;
            object.ki = 0;
            object.kd = 0;
            object.kf = 0;
            object.integralZeroThreshold = 0;
            object.integralSaturationLimit = 0;
            object.resetIntegral = false;
            object.ffAddGravity = false;
        }
        if (message.kp != null && message.hasOwnProperty("kp"))
            object.kp = options.json && !isFinite(message.kp) ? String(message.kp) : message.kp;
        if (message.ki != null && message.hasOwnProperty("ki"))
            object.ki = options.json && !isFinite(message.ki) ? String(message.ki) : message.ki;
        if (message.kd != null && message.hasOwnProperty("kd"))
            object.kd = options.json && !isFinite(message.kd) ? String(message.kd) : message.kd;
        if (message.kf != null && message.hasOwnProperty("kf"))
            object.kf = options.json && !isFinite(message.kf) ? String(message.kf) : message.kf;
        if (message.integralZeroThreshold != null && message.hasOwnProperty("integralZeroThreshold"))
            object.integralZeroThreshold = options.json && !isFinite(message.integralZeroThreshold) ? String(message.integralZeroThreshold) : message.integralZeroThreshold;
        if (message.integralSaturationLimit != null && message.hasOwnProperty("integralSaturationLimit"))
            object.integralSaturationLimit = options.json && !isFinite(message.integralSaturationLimit) ? String(message.integralSaturationLimit) : message.integralSaturationLimit;
        if (message.resetIntegral != null && message.hasOwnProperty("resetIntegral"))
            object.resetIntegral = message.resetIntegral;
        if (message.ffAddGravity != null && message.hasOwnProperty("ffAddGravity"))
            object.ffAddGravity = message.ffAddGravity;
        return object;
    };

    /**
     * Converts this PitchPidParams to JSON.
     * @function toJSON
     * @memberof PitchPidParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PitchPidParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PitchPidParams
     * @function getTypeUrl
     * @memberof PitchPidParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PitchPidParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PitchPidParams";
    };

    return PitchPidParams;
})();

export const YawPidParams = $root.YawPidParams = (() => {

    /**
     * Properties of a YawPidParams.
     * @exports IYawPidParams
     * @interface IYawPidParams
     * @property {number|null} [kp] YawPidParams kp
     * @property {number|null} [ki] YawPidParams ki
     * @property {number|null} [kd] YawPidParams kd
     * @property {number|null} [kf] YawPidParams kf
     * @property {number|null} [integralZeroThreshold] YawPidParams integralZeroThreshold
     * @property {number|null} [integralSaturationLimit] YawPidParams integralSaturationLimit
     * @property {boolean|null} [resetIntegral] YawPidParams resetIntegral
     */

    /**
     * Constructs a new YawPidParams.
     * @exports YawPidParams
     * @classdesc Represents a YawPidParams.
     * @implements IYawPidParams
     * @constructor
     * @param {IYawPidParams=} [properties] Properties to set
     */
    function YawPidParams(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * YawPidParams kp.
     * @member {number} kp
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.kp = 0;

    /**
     * YawPidParams ki.
     * @member {number} ki
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.ki = 0;

    /**
     * YawPidParams kd.
     * @member {number} kd
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.kd = 0;

    /**
     * YawPidParams kf.
     * @member {number} kf
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.kf = 0;

    /**
     * YawPidParams integralZeroThreshold.
     * @member {number} integralZeroThreshold
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.integralZeroThreshold = 0;

    /**
     * YawPidParams integralSaturationLimit.
     * @member {number} integralSaturationLimit
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.integralSaturationLimit = 0;

    /**
     * YawPidParams resetIntegral.
     * @member {boolean} resetIntegral
     * @memberof YawPidParams
     * @instance
     */
    YawPidParams.prototype.resetIntegral = false;

    /**
     * Creates a new YawPidParams instance using the specified properties.
     * @function create
     * @memberof YawPidParams
     * @static
     * @param {IYawPidParams=} [properties] Properties to set
     * @returns {YawPidParams} YawPidParams instance
     */
    YawPidParams.create = function create(properties) {
        return new YawPidParams(properties);
    };

    /**
     * Encodes the specified YawPidParams message. Does not implicitly {@link YawPidParams.verify|verify} messages.
     * @function encode
     * @memberof YawPidParams
     * @static
     * @param {IYawPidParams} message YawPidParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    YawPidParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kp != null && Object.hasOwnProperty.call(message, "kp"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.kp);
        if (message.ki != null && Object.hasOwnProperty.call(message, "ki"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.ki);
        if (message.kd != null && Object.hasOwnProperty.call(message, "kd"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.kd);
        if (message.kf != null && Object.hasOwnProperty.call(message, "kf"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.kf);
        if (message.integralZeroThreshold != null && Object.hasOwnProperty.call(message, "integralZeroThreshold"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.integralZeroThreshold);
        if (message.integralSaturationLimit != null && Object.hasOwnProperty.call(message, "integralSaturationLimit"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.integralSaturationLimit);
        if (message.resetIntegral != null && Object.hasOwnProperty.call(message, "resetIntegral"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.resetIntegral);
        return writer;
    };

    /**
     * Encodes the specified YawPidParams message, length delimited. Does not implicitly {@link YawPidParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof YawPidParams
     * @static
     * @param {IYawPidParams} message YawPidParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    YawPidParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a YawPidParams message from the specified reader or buffer.
     * @function decode
     * @memberof YawPidParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {YawPidParams} YawPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    YawPidParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.YawPidParams();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.kp = reader.float();
                    break;
                }
            case 2: {
                    message.ki = reader.float();
                    break;
                }
            case 3: {
                    message.kd = reader.float();
                    break;
                }
            case 4: {
                    message.kf = reader.float();
                    break;
                }
            case 5: {
                    message.integralZeroThreshold = reader.float();
                    break;
                }
            case 6: {
                    message.integralSaturationLimit = reader.float();
                    break;
                }
            case 7: {
                    message.resetIntegral = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a YawPidParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof YawPidParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {YawPidParams} YawPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    YawPidParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a YawPidParams message.
     * @function verify
     * @memberof YawPidParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    YawPidParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kp != null && message.hasOwnProperty("kp"))
            if (typeof message.kp !== "number")
                return "kp: number expected";
        if (message.ki != null && message.hasOwnProperty("ki"))
            if (typeof message.ki !== "number")
                return "ki: number expected";
        if (message.kd != null && message.hasOwnProperty("kd"))
            if (typeof message.kd !== "number")
                return "kd: number expected";
        if (message.kf != null && message.hasOwnProperty("kf"))
            if (typeof message.kf !== "number")
                return "kf: number expected";
        if (message.integralZeroThreshold != null && message.hasOwnProperty("integralZeroThreshold"))
            if (typeof message.integralZeroThreshold !== "number")
                return "integralZeroThreshold: number expected";
        if (message.integralSaturationLimit != null && message.hasOwnProperty("integralSaturationLimit"))
            if (typeof message.integralSaturationLimit !== "number")
                return "integralSaturationLimit: number expected";
        if (message.resetIntegral != null && message.hasOwnProperty("resetIntegral"))
            if (typeof message.resetIntegral !== "boolean")
                return "resetIntegral: boolean expected";
        return null;
    };

    /**
     * Creates a YawPidParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof YawPidParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {YawPidParams} YawPidParams
     */
    YawPidParams.fromObject = function fromObject(object) {
        if (object instanceof $root.YawPidParams)
            return object;
        let message = new $root.YawPidParams();
        if (object.kp != null)
            message.kp = Number(object.kp);
        if (object.ki != null)
            message.ki = Number(object.ki);
        if (object.kd != null)
            message.kd = Number(object.kd);
        if (object.kf != null)
            message.kf = Number(object.kf);
        if (object.integralZeroThreshold != null)
            message.integralZeroThreshold = Number(object.integralZeroThreshold);
        if (object.integralSaturationLimit != null)
            message.integralSaturationLimit = Number(object.integralSaturationLimit);
        if (object.resetIntegral != null)
            message.resetIntegral = Boolean(object.resetIntegral);
        return message;
    };

    /**
     * Creates a plain object from a YawPidParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof YawPidParams
     * @static
     * @param {YawPidParams} message YawPidParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    YawPidParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.kp = 0;
            object.ki = 0;
            object.kd = 0;
            object.kf = 0;
            object.integralZeroThreshold = 0;
            object.integralSaturationLimit = 0;
            object.resetIntegral = false;
        }
        if (message.kp != null && message.hasOwnProperty("kp"))
            object.kp = options.json && !isFinite(message.kp) ? String(message.kp) : message.kp;
        if (message.ki != null && message.hasOwnProperty("ki"))
            object.ki = options.json && !isFinite(message.ki) ? String(message.ki) : message.ki;
        if (message.kd != null && message.hasOwnProperty("kd"))
            object.kd = options.json && !isFinite(message.kd) ? String(message.kd) : message.kd;
        if (message.kf != null && message.hasOwnProperty("kf"))
            object.kf = options.json && !isFinite(message.kf) ? String(message.kf) : message.kf;
        if (message.integralZeroThreshold != null && message.hasOwnProperty("integralZeroThreshold"))
            object.integralZeroThreshold = options.json && !isFinite(message.integralZeroThreshold) ? String(message.integralZeroThreshold) : message.integralZeroThreshold;
        if (message.integralSaturationLimit != null && message.hasOwnProperty("integralSaturationLimit"))
            object.integralSaturationLimit = options.json && !isFinite(message.integralSaturationLimit) ? String(message.integralSaturationLimit) : message.integralSaturationLimit;
        if (message.resetIntegral != null && message.hasOwnProperty("resetIntegral"))
            object.resetIntegral = message.resetIntegral;
        return object;
    };

    /**
     * Converts this YawPidParams to JSON.
     * @function toJSON
     * @memberof YawPidParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    YawPidParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for YawPidParams
     * @function getTypeUrl
     * @memberof YawPidParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    YawPidParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/YawPidParams";
    };

    return YawPidParams;
})();

/**
 * LogLevel enum.
 * @exports LogLevel
 * @enum {number}
 * @property {number} DEBUG=0 DEBUG value
 * @property {number} INFO=1 INFO value
 * @property {number} WARN=2 WARN value
 * @property {number} ERROR=3 ERROR value
 * @property {number} FATAL=4 FATAL value
 */
export const LogLevel = $root.LogLevel = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DEBUG"] = 0;
    values[valuesById[1] = "INFO"] = 1;
    values[valuesById[2] = "WARN"] = 2;
    values[valuesById[3] = "ERROR"] = 3;
    values[valuesById[4] = "FATAL"] = 4;
    return values;
})();

export const Log = $root.Log = (() => {

    /**
     * Properties of a Log.
     * @exports ILog
     * @interface ILog
     * @property {LogLevel|null} [level] Log level
     * @property {string|null} [message] Log message
     */

    /**
     * Constructs a new Log.
     * @exports Log
     * @classdesc Represents a Log.
     * @implements ILog
     * @constructor
     * @param {ILog=} [properties] Properties to set
     */
    function Log(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Log level.
     * @member {LogLevel} level
     * @memberof Log
     * @instance
     */
    Log.prototype.level = 0;

    /**
     * Log message.
     * @member {string} message
     * @memberof Log
     * @instance
     */
    Log.prototype.message = "";

    /**
     * Creates a new Log instance using the specified properties.
     * @function create
     * @memberof Log
     * @static
     * @param {ILog=} [properties] Properties to set
     * @returns {Log} Log instance
     */
    Log.create = function create(properties) {
        return new Log(properties);
    };

    /**
     * Encodes the specified Log message. Does not implicitly {@link Log.verify|verify} messages.
     * @function encode
     * @memberof Log
     * @static
     * @param {ILog} message Log message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Log.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.level != null && Object.hasOwnProperty.call(message, "level"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified Log message, length delimited. Does not implicitly {@link Log.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Log
     * @static
     * @param {ILog} message Log message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Log.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Log message from the specified reader or buffer.
     * @function decode
     * @memberof Log
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Log} Log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Log.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Log();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.level = reader.int32();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Log message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Log
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Log} Log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Log.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Log message.
     * @function verify
     * @memberof Log
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Log.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.level != null && message.hasOwnProperty("level"))
            switch (message.level) {
            default:
                return "level: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        return null;
    };

    /**
     * Creates a Log message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Log
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Log} Log
     */
    Log.fromObject = function fromObject(object) {
        if (object instanceof $root.Log)
            return object;
        let message = new $root.Log();
        switch (object.level) {
        default:
            if (typeof object.level === "number") {
                message.level = object.level;
                break;
            }
            break;
        case "DEBUG":
        case 0:
            message.level = 0;
            break;
        case "INFO":
        case 1:
            message.level = 1;
            break;
        case "WARN":
        case 2:
            message.level = 2;
            break;
        case "ERROR":
        case 3:
            message.level = 3;
            break;
        case "FATAL":
        case 4:
            message.level = 4;
            break;
        }
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a Log message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Log
     * @static
     * @param {Log} message Log
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Log.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.level = options.enums === String ? "DEBUG" : 0;
            object.message = "";
        }
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = options.enums === String ? $root.LogLevel[message.level] === undefined ? message.level : $root.LogLevel[message.level] : message.level;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this Log to JSON.
     * @function toJSON
     * @memberof Log
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Log.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Log
     * @function getTypeUrl
     * @memberof Log
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Log.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Log";
    };

    return Log;
})();

/**
 * Command enum.
 * @exports Command
 * @enum {number}
 * @property {number} START=0 START value
 * @property {number} STOP=1 STOP value
 * @property {number} SAVE_PHYSICAL_PARAMS=2 SAVE_PHYSICAL_PARAMS value
 * @property {number} SAVE_PITCH_CONTROLLER_PARAMS=3 SAVE_PITCH_CONTROLLER_PARAMS value
 * @property {number} SAVE_YAW_CONTROLLER_PARAMS=4 SAVE_YAW_CONTROLLER_PARAMS value
 */
export const Command = $root.Command = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "START"] = 0;
    values[valuesById[1] = "STOP"] = 1;
    values[valuesById[2] = "SAVE_PHYSICAL_PARAMS"] = 2;
    values[valuesById[3] = "SAVE_PITCH_CONTROLLER_PARAMS"] = 3;
    values[valuesById[4] = "SAVE_YAW_CONTROLLER_PARAMS"] = 4;
    return values;
})();

export const Web2Bot = $root.Web2Bot = (() => {

    /**
     * Properties of a Web2Bot.
     * @exports IWeb2Bot
     * @interface IWeb2Bot
     * @property {number|null} [id] Web2Bot id
     * @property {Command|null} [command] Web2Bot command
     * @property {IPhysicalParams|null} [physicalParams] Web2Bot physicalParams
     * @property {IPitchControllerParams|null} [pitchControllerParams] Web2Bot pitchControllerParams
     * @property {IYawControllerParams|null} [rollControllerParams] Web2Bot rollControllerParams
     */

    /**
     * Constructs a new Web2Bot.
     * @exports Web2Bot
     * @classdesc Represents a Web2Bot.
     * @implements IWeb2Bot
     * @constructor
     * @param {IWeb2Bot=} [properties] Properties to set
     */
    function Web2Bot(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Web2Bot id.
     * @member {number} id
     * @memberof Web2Bot
     * @instance
     */
    Web2Bot.prototype.id = 0;

    /**
     * Web2Bot command.
     * @member {Command|null|undefined} command
     * @memberof Web2Bot
     * @instance
     */
    Web2Bot.prototype.command = null;

    /**
     * Web2Bot physicalParams.
     * @member {IPhysicalParams|null|undefined} physicalParams
     * @memberof Web2Bot
     * @instance
     */
    Web2Bot.prototype.physicalParams = null;

    /**
     * Web2Bot pitchControllerParams.
     * @member {IPitchControllerParams|null|undefined} pitchControllerParams
     * @memberof Web2Bot
     * @instance
     */
    Web2Bot.prototype.pitchControllerParams = null;

    /**
     * Web2Bot rollControllerParams.
     * @member {IYawControllerParams|null|undefined} rollControllerParams
     * @memberof Web2Bot
     * @instance
     */
    Web2Bot.prototype.rollControllerParams = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Web2Bot msg.
     * @member {"command"|"physicalParams"|"pitchControllerParams"|"rollControllerParams"|undefined} msg
     * @memberof Web2Bot
     * @instance
     */
    Object.defineProperty(Web2Bot.prototype, "msg", {
        get: $util.oneOfGetter($oneOfFields = ["command", "physicalParams", "pitchControllerParams", "rollControllerParams"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Web2Bot instance using the specified properties.
     * @function create
     * @memberof Web2Bot
     * @static
     * @param {IWeb2Bot=} [properties] Properties to set
     * @returns {Web2Bot} Web2Bot instance
     */
    Web2Bot.create = function create(properties) {
        return new Web2Bot(properties);
    };

    /**
     * Encodes the specified Web2Bot message. Does not implicitly {@link Web2Bot.verify|verify} messages.
     * @function encode
     * @memberof Web2Bot
     * @static
     * @param {IWeb2Bot} message Web2Bot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Web2Bot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.command != null && Object.hasOwnProperty.call(message, "command"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.command);
        if (message.physicalParams != null && Object.hasOwnProperty.call(message, "physicalParams"))
            $root.PhysicalParams.encode(message.physicalParams, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.pitchControllerParams != null && Object.hasOwnProperty.call(message, "pitchControllerParams"))
            $root.PitchControllerParams.encode(message.pitchControllerParams, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.rollControllerParams != null && Object.hasOwnProperty.call(message, "rollControllerParams"))
            $root.YawControllerParams.encode(message.rollControllerParams, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Web2Bot message, length delimited. Does not implicitly {@link Web2Bot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Web2Bot
     * @static
     * @param {IWeb2Bot} message Web2Bot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Web2Bot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Web2Bot message from the specified reader or buffer.
     * @function decode
     * @memberof Web2Bot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Web2Bot} Web2Bot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Web2Bot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Web2Bot();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.command = reader.int32();
                    break;
                }
            case 3: {
                    message.physicalParams = $root.PhysicalParams.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.pitchControllerParams = $root.PitchControllerParams.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.rollControllerParams = $root.YawControllerParams.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Web2Bot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Web2Bot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Web2Bot} Web2Bot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Web2Bot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Web2Bot message.
     * @function verify
     * @memberof Web2Bot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Web2Bot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.command != null && message.hasOwnProperty("command")) {
            properties.msg = 1;
            switch (message.command) {
            default:
                return "command: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        }
        if (message.physicalParams != null && message.hasOwnProperty("physicalParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.PhysicalParams.verify(message.physicalParams);
                if (error)
                    return "physicalParams." + error;
            }
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.PitchControllerParams.verify(message.pitchControllerParams);
                if (error)
                    return "pitchControllerParams." + error;
            }
        }
        if (message.rollControllerParams != null && message.hasOwnProperty("rollControllerParams")) {
            if (properties.msg === 1)
                return "msg: multiple values";
            properties.msg = 1;
            {
                let error = $root.YawControllerParams.verify(message.rollControllerParams);
                if (error)
                    return "rollControllerParams." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Web2Bot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Web2Bot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Web2Bot} Web2Bot
     */
    Web2Bot.fromObject = function fromObject(object) {
        if (object instanceof $root.Web2Bot)
            return object;
        let message = new $root.Web2Bot();
        if (object.id != null)
            message.id = object.id >>> 0;
        switch (object.command) {
        default:
            if (typeof object.command === "number") {
                message.command = object.command;
                break;
            }
            break;
        case "START":
        case 0:
            message.command = 0;
            break;
        case "STOP":
        case 1:
            message.command = 1;
            break;
        case "SAVE_PHYSICAL_PARAMS":
        case 2:
            message.command = 2;
            break;
        case "SAVE_PITCH_CONTROLLER_PARAMS":
        case 3:
            message.command = 3;
            break;
        case "SAVE_YAW_CONTROLLER_PARAMS":
        case 4:
            message.command = 4;
            break;
        }
        if (object.physicalParams != null) {
            if (typeof object.physicalParams !== "object")
                throw TypeError(".Web2Bot.physicalParams: object expected");
            message.physicalParams = $root.PhysicalParams.fromObject(object.physicalParams);
        }
        if (object.pitchControllerParams != null) {
            if (typeof object.pitchControllerParams !== "object")
                throw TypeError(".Web2Bot.pitchControllerParams: object expected");
            message.pitchControllerParams = $root.PitchControllerParams.fromObject(object.pitchControllerParams);
        }
        if (object.rollControllerParams != null) {
            if (typeof object.rollControllerParams !== "object")
                throw TypeError(".Web2Bot.rollControllerParams: object expected");
            message.rollControllerParams = $root.YawControllerParams.fromObject(object.rollControllerParams);
        }
        return message;
    };

    /**
     * Creates a plain object from a Web2Bot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Web2Bot
     * @static
     * @param {Web2Bot} message Web2Bot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Web2Bot.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.command != null && message.hasOwnProperty("command")) {
            object.command = options.enums === String ? $root.Command[message.command] === undefined ? message.command : $root.Command[message.command] : message.command;
            if (options.oneofs)
                object.msg = "command";
        }
        if (message.physicalParams != null && message.hasOwnProperty("physicalParams")) {
            object.physicalParams = $root.PhysicalParams.toObject(message.physicalParams, options);
            if (options.oneofs)
                object.msg = "physicalParams";
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            object.pitchControllerParams = $root.PitchControllerParams.toObject(message.pitchControllerParams, options);
            if (options.oneofs)
                object.msg = "pitchControllerParams";
        }
        if (message.rollControllerParams != null && message.hasOwnProperty("rollControllerParams")) {
            object.rollControllerParams = $root.YawControllerParams.toObject(message.rollControllerParams, options);
            if (options.oneofs)
                object.msg = "rollControllerParams";
        }
        return object;
    };

    /**
     * Converts this Web2Bot to JSON.
     * @function toJSON
     * @memberof Web2Bot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Web2Bot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Web2Bot
     * @function getTypeUrl
     * @memberof Web2Bot
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Web2Bot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Web2Bot";
    };

    return Web2Bot;
})();

export { $root as default };
