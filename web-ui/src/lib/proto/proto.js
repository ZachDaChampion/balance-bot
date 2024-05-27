/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @name IResponse
     * @interface IResponse
     * @property {number|null} [requestId] Response requestId
     * @property {Response.IResult|null} [result] Response result
     * @property {boolean|null} [enableBalancing] Response enableBalancing
     * @property {controllers.pitch.IParams|null} [pitchControllerParams] Response pitchControllerParams
     * @property {controllers.pitch.Type|null} [pitchControllerActive] Response pitchControllerActive
     * @property {controllers.yaw.IParams|null} [yawControllerParams] Response yawControllerParams
     * @property {controllers.yaw.Type|null} [yawControllerActive] Response yawControllerActive
     * @property {physical.ICharacteristics|null} [physicalCharacteristics] Response physicalCharacteristics
     * @property {motor_calib.ILUT|null} [motorCalibrationLut] Response motorCalibrationLut
     * @property {motor_calib.IResult|null} [motorCalibrationResult] Response motorCalibrationResult
     */

    /**
     * Constructs a new Response.
     * @name Response
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
     * Response requestId.
     * @member {number} requestId
     * @memberof Response
     * @instance
     */
    Response.prototype.requestId = 0;

    /**
     * Response result.
     * @member {Response.IResult|null|undefined} result
     * @memberof Response
     * @instance
     */
    Response.prototype.result = null;

    /**
     * Response enableBalancing.
     * @member {boolean|null|undefined} enableBalancing
     * @memberof Response
     * @instance
     */
    Response.prototype.enableBalancing = null;

    /**
     * Response pitchControllerParams.
     * @member {controllers.pitch.IParams|null|undefined} pitchControllerParams
     * @memberof Response
     * @instance
     */
    Response.prototype.pitchControllerParams = null;

    /**
     * Response pitchControllerActive.
     * @member {controllers.pitch.Type|null|undefined} pitchControllerActive
     * @memberof Response
     * @instance
     */
    Response.prototype.pitchControllerActive = null;

    /**
     * Response yawControllerParams.
     * @member {controllers.yaw.IParams|null|undefined} yawControllerParams
     * @memberof Response
     * @instance
     */
    Response.prototype.yawControllerParams = null;

    /**
     * Response yawControllerActive.
     * @member {controllers.yaw.Type|null|undefined} yawControllerActive
     * @memberof Response
     * @instance
     */
    Response.prototype.yawControllerActive = null;

    /**
     * Response physicalCharacteristics.
     * @member {physical.ICharacteristics|null|undefined} physicalCharacteristics
     * @memberof Response
     * @instance
     */
    Response.prototype.physicalCharacteristics = null;

    /**
     * Response motorCalibrationLut.
     * @member {motor_calib.ILUT|null|undefined} motorCalibrationLut
     * @memberof Response
     * @instance
     */
    Response.prototype.motorCalibrationLut = null;

    /**
     * Response motorCalibrationResult.
     * @member {motor_calib.IResult|null|undefined} motorCalibrationResult
     * @memberof Response
     * @instance
     */
    Response.prototype.motorCalibrationResult = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Response _enableBalancing.
     * @member {"enableBalancing"|undefined} _enableBalancing
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_enableBalancing", {
        get: $util.oneOfGetter($oneOfFields = ["enableBalancing"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _pitchControllerParams.
     * @member {"pitchControllerParams"|undefined} _pitchControllerParams
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_pitchControllerParams", {
        get: $util.oneOfGetter($oneOfFields = ["pitchControllerParams"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _pitchControllerActive.
     * @member {"pitchControllerActive"|undefined} _pitchControllerActive
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_pitchControllerActive", {
        get: $util.oneOfGetter($oneOfFields = ["pitchControllerActive"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _yawControllerParams.
     * @member {"yawControllerParams"|undefined} _yawControllerParams
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_yawControllerParams", {
        get: $util.oneOfGetter($oneOfFields = ["yawControllerParams"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _yawControllerActive.
     * @member {"yawControllerActive"|undefined} _yawControllerActive
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_yawControllerActive", {
        get: $util.oneOfGetter($oneOfFields = ["yawControllerActive"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _physicalCharacteristics.
     * @member {"physicalCharacteristics"|undefined} _physicalCharacteristics
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_physicalCharacteristics", {
        get: $util.oneOfGetter($oneOfFields = ["physicalCharacteristics"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _motorCalibrationLut.
     * @member {"motorCalibrationLut"|undefined} _motorCalibrationLut
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_motorCalibrationLut", {
        get: $util.oneOfGetter($oneOfFields = ["motorCalibrationLut"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Response _motorCalibrationResult.
     * @member {"motorCalibrationResult"|undefined} _motorCalibrationResult
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "_motorCalibrationResult", {
        get: $util.oneOfGetter($oneOfFields = ["motorCalibrationResult"]),
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
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            $root.Response.Result.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.enableBalancing != null && Object.hasOwnProperty.call(message, "enableBalancing"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enableBalancing);
        if (message.pitchControllerParams != null && Object.hasOwnProperty.call(message, "pitchControllerParams"))
            $root.controllers.pitch.Params.encode(message.pitchControllerParams, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.pitchControllerActive != null && Object.hasOwnProperty.call(message, "pitchControllerActive"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pitchControllerActive);
        if (message.yawControllerParams != null && Object.hasOwnProperty.call(message, "yawControllerParams"))
            $root.controllers.yaw.Params.encode(message.yawControllerParams, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.yawControllerActive != null && Object.hasOwnProperty.call(message, "yawControllerActive"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.yawControllerActive);
        if (message.physicalCharacteristics != null && Object.hasOwnProperty.call(message, "physicalCharacteristics"))
            $root.physical.Characteristics.encode(message.physicalCharacteristics, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.motorCalibrationLut != null && Object.hasOwnProperty.call(message, "motorCalibrationLut"))
            $root.motor_calib.LUT.encode(message.motorCalibrationLut, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.motorCalibrationResult != null && Object.hasOwnProperty.call(message, "motorCalibrationResult"))
            $root.motor_calib.Result.encode(message.motorCalibrationResult, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
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
                    message.requestId = reader.uint32();
                    break;
                }
            case 2: {
                    message.result = $root.Response.Result.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.enableBalancing = reader.bool();
                    break;
                }
            case 4: {
                    message.pitchControllerParams = $root.controllers.pitch.Params.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.pitchControllerActive = reader.int32();
                    break;
                }
            case 6: {
                    message.yawControllerParams = $root.controllers.yaw.Params.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.yawControllerActive = reader.int32();
                    break;
                }
            case 8: {
                    message.physicalCharacteristics = $root.physical.Characteristics.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.motorCalibrationLut = $root.motor_calib.LUT.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.motorCalibrationResult = $root.motor_calib.Result.decode(reader, reader.uint32());
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
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isInteger(message.requestId))
                return "requestId: integer expected";
        if (message.result != null && message.hasOwnProperty("result")) {
            let error = $root.Response.Result.verify(message.result);
            if (error)
                return "result." + error;
        }
        if (message.enableBalancing != null && message.hasOwnProperty("enableBalancing")) {
            properties._enableBalancing = 1;
            if (typeof message.enableBalancing !== "boolean")
                return "enableBalancing: boolean expected";
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            properties._pitchControllerParams = 1;
            {
                let error = $root.controllers.pitch.Params.verify(message.pitchControllerParams);
                if (error)
                    return "pitchControllerParams." + error;
            }
        }
        if (message.pitchControllerActive != null && message.hasOwnProperty("pitchControllerActive")) {
            properties._pitchControllerActive = 1;
            switch (message.pitchControllerActive) {
            default:
                return "pitchControllerActive: enum value expected";
            case 0:
                break;
            }
        }
        if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
            properties._yawControllerParams = 1;
            {
                let error = $root.controllers.yaw.Params.verify(message.yawControllerParams);
                if (error)
                    return "yawControllerParams." + error;
            }
        }
        if (message.yawControllerActive != null && message.hasOwnProperty("yawControllerActive")) {
            properties._yawControllerActive = 1;
            switch (message.yawControllerActive) {
            default:
                return "yawControllerActive: enum value expected";
            case 0:
                break;
            }
        }
        if (message.physicalCharacteristics != null && message.hasOwnProperty("physicalCharacteristics")) {
            properties._physicalCharacteristics = 1;
            {
                let error = $root.physical.Characteristics.verify(message.physicalCharacteristics);
                if (error)
                    return "physicalCharacteristics." + error;
            }
        }
        if (message.motorCalibrationLut != null && message.hasOwnProperty("motorCalibrationLut")) {
            properties._motorCalibrationLut = 1;
            {
                let error = $root.motor_calib.LUT.verify(message.motorCalibrationLut);
                if (error)
                    return "motorCalibrationLut." + error;
            }
        }
        if (message.motorCalibrationResult != null && message.hasOwnProperty("motorCalibrationResult")) {
            properties._motorCalibrationResult = 1;
            {
                let error = $root.motor_calib.Result.verify(message.motorCalibrationResult);
                if (error)
                    return "motorCalibrationResult." + error;
            }
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
        if (object.requestId != null)
            message.requestId = object.requestId >>> 0;
        if (object.result != null) {
            if (typeof object.result !== "object")
                throw TypeError(".Response.result: object expected");
            message.result = $root.Response.Result.fromObject(object.result);
        }
        if (object.enableBalancing != null)
            message.enableBalancing = Boolean(object.enableBalancing);
        if (object.pitchControllerParams != null) {
            if (typeof object.pitchControllerParams !== "object")
                throw TypeError(".Response.pitchControllerParams: object expected");
            message.pitchControllerParams = $root.controllers.pitch.Params.fromObject(object.pitchControllerParams);
        }
        switch (object.pitchControllerActive) {
        default:
            if (typeof object.pitchControllerActive === "number") {
                message.pitchControllerActive = object.pitchControllerActive;
                break;
            }
            break;
        case "PID":
        case 0:
            message.pitchControllerActive = 0;
            break;
        }
        if (object.yawControllerParams != null) {
            if (typeof object.yawControllerParams !== "object")
                throw TypeError(".Response.yawControllerParams: object expected");
            message.yawControllerParams = $root.controllers.yaw.Params.fromObject(object.yawControllerParams);
        }
        switch (object.yawControllerActive) {
        default:
            if (typeof object.yawControllerActive === "number") {
                message.yawControllerActive = object.yawControllerActive;
                break;
            }
            break;
        case "PID":
        case 0:
            message.yawControllerActive = 0;
            break;
        }
        if (object.physicalCharacteristics != null) {
            if (typeof object.physicalCharacteristics !== "object")
                throw TypeError(".Response.physicalCharacteristics: object expected");
            message.physicalCharacteristics = $root.physical.Characteristics.fromObject(object.physicalCharacteristics);
        }
        if (object.motorCalibrationLut != null) {
            if (typeof object.motorCalibrationLut !== "object")
                throw TypeError(".Response.motorCalibrationLut: object expected");
            message.motorCalibrationLut = $root.motor_calib.LUT.fromObject(object.motorCalibrationLut);
        }
        if (object.motorCalibrationResult != null) {
            if (typeof object.motorCalibrationResult !== "object")
                throw TypeError(".Response.motorCalibrationResult: object expected");
            message.motorCalibrationResult = $root.motor_calib.Result.fromObject(object.motorCalibrationResult);
        }
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
            object.requestId = 0;
            object.result = null;
        }
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            object.requestId = message.requestId;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = $root.Response.Result.toObject(message.result, options);
        if (message.enableBalancing != null && message.hasOwnProperty("enableBalancing")) {
            object.enableBalancing = message.enableBalancing;
            if (options.oneofs)
                object._enableBalancing = "enableBalancing";
        }
        if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
            object.pitchControllerParams = $root.controllers.pitch.Params.toObject(message.pitchControllerParams, options);
            if (options.oneofs)
                object._pitchControllerParams = "pitchControllerParams";
        }
        if (message.pitchControllerActive != null && message.hasOwnProperty("pitchControllerActive")) {
            object.pitchControllerActive = options.enums === String ? $root.controllers.pitch.Type[message.pitchControllerActive] === undefined ? message.pitchControllerActive : $root.controllers.pitch.Type[message.pitchControllerActive] : message.pitchControllerActive;
            if (options.oneofs)
                object._pitchControllerActive = "pitchControllerActive";
        }
        if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
            object.yawControllerParams = $root.controllers.yaw.Params.toObject(message.yawControllerParams, options);
            if (options.oneofs)
                object._yawControllerParams = "yawControllerParams";
        }
        if (message.yawControllerActive != null && message.hasOwnProperty("yawControllerActive")) {
            object.yawControllerActive = options.enums === String ? $root.controllers.yaw.Type[message.yawControllerActive] === undefined ? message.yawControllerActive : $root.controllers.yaw.Type[message.yawControllerActive] : message.yawControllerActive;
            if (options.oneofs)
                object._yawControllerActive = "yawControllerActive";
        }
        if (message.physicalCharacteristics != null && message.hasOwnProperty("physicalCharacteristics")) {
            object.physicalCharacteristics = $root.physical.Characteristics.toObject(message.physicalCharacteristics, options);
            if (options.oneofs)
                object._physicalCharacteristics = "physicalCharacteristics";
        }
        if (message.motorCalibrationLut != null && message.hasOwnProperty("motorCalibrationLut")) {
            object.motorCalibrationLut = $root.motor_calib.LUT.toObject(message.motorCalibrationLut, options);
            if (options.oneofs)
                object._motorCalibrationLut = "motorCalibrationLut";
        }
        if (message.motorCalibrationResult != null && message.hasOwnProperty("motorCalibrationResult")) {
            object.motorCalibrationResult = $root.motor_calib.Result.toObject(message.motorCalibrationResult, options);
            if (options.oneofs)
                object._motorCalibrationResult = "motorCalibrationResult";
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

    Response.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof Response
         * @interface IResult
         * @property {Response.Result.Code|null} [code] Result code
         * @property {string|null} [msg] Result msg
         */

        /**
         * Constructs a new Result.
         * @memberof Response
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {Response.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result code.
         * @member {Response.Result.Code} code
         * @memberof Response.Result
         * @instance
         */
        Result.prototype.code = 0;

        /**
         * Result msg.
         * @member {string|null|undefined} msg
         * @memberof Response.Result
         * @instance
         */
        Result.prototype.msg = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Result _msg.
         * @member {"msg"|undefined} _msg
         * @memberof Response.Result
         * @instance
         */
        Object.defineProperty(Result.prototype, "_msg", {
            get: $util.oneOfGetter($oneOfFields = ["msg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof Response.Result
         * @static
         * @param {Response.IResult=} [properties] Properties to set
         * @returns {Response.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link Response.Result.verify|verify} messages.
         * @function encode
         * @memberof Response.Result
         * @static
         * @param {Response.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link Response.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Response.Result
         * @static
         * @param {Response.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof Response.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Response.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response.Result();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
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
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Response.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Response.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof Response.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
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
            if (message.msg != null && message.hasOwnProperty("msg")) {
                properties._msg = 1;
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            }
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Response.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Response.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.Response.Result)
                return object;
            let message = new $root.Response.Result();
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
            case "ERR_UNKNOWN":
            case 1:
                message.code = 1;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Response.Result
         * @static
         * @param {Response.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = options.enums === String ? "OK" : 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.Response.Result.Code[message.code] === undefined ? message.code : $root.Response.Result.Code[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg")) {
                object.msg = message.msg;
                if (options.oneofs)
                    object._msg = "msg";
            }
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof Response.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Result
         * @function getTypeUrl
         * @memberof Response.Result
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Response.Result";
        };

        /**
         * Code enum.
         * @name Response.Result.Code
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} ERR_UNKNOWN=1 ERR_UNKNOWN value
         */
        Result.Code = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "ERR_UNKNOWN"] = 1;
            return values;
        })();

        return Result;
    })();

    return Response;
})();

export const RobotState = $root.RobotState = (() => {

    /**
     * Properties of a RobotState.
     * @name IRobotState
     * @interface IRobotState
     * @property {google.protobuf.ITimestamp|null} [timestamp] RobotState timestamp
     * @property {number|null} [pitch] RobotState pitch
     * @property {number|null} [yaw] RobotState yaw
     * @property {number|null} [pitchRate] RobotState pitchRate
     * @property {number|null} [yawRate] RobotState yawRate
     * @property {number|null} [leftMotorAngle] RobotState leftMotorAngle
     * @property {number|null} [rightMotorAngle] RobotState rightMotorAngle
     * @property {number|null} [leftMotorSpeed] RobotState leftMotorSpeed
     * @property {number|null} [rightMotorSpeed] RobotState rightMotorSpeed
     * @property {controllers.pitch.IState|null} [pitchControllerState] RobotState pitchControllerState
     * @property {controllers.yaw.IState|null} [yawControllerState] RobotState yawControllerState
     */

    /**
     * Constructs a new RobotState.
     * @name RobotState
     * @classdesc Represents a RobotState.
     * @implements IRobotState
     * @constructor
     * @param {IRobotState=} [properties] Properties to set
     */
    function RobotState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RobotState timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.timestamp = null;

    /**
     * RobotState pitch.
     * @member {number} pitch
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.pitch = 0;

    /**
     * RobotState yaw.
     * @member {number} yaw
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.yaw = 0;

    /**
     * RobotState pitchRate.
     * @member {number} pitchRate
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.pitchRate = 0;

    /**
     * RobotState yawRate.
     * @member {number} yawRate
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.yawRate = 0;

    /**
     * RobotState leftMotorAngle.
     * @member {number} leftMotorAngle
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.leftMotorAngle = 0;

    /**
     * RobotState rightMotorAngle.
     * @member {number} rightMotorAngle
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.rightMotorAngle = 0;

    /**
     * RobotState leftMotorSpeed.
     * @member {number} leftMotorSpeed
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.leftMotorSpeed = 0;

    /**
     * RobotState rightMotorSpeed.
     * @member {number} rightMotorSpeed
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.rightMotorSpeed = 0;

    /**
     * RobotState pitchControllerState.
     * @member {controllers.pitch.IState|null|undefined} pitchControllerState
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.pitchControllerState = null;

    /**
     * RobotState yawControllerState.
     * @member {controllers.yaw.IState|null|undefined} yawControllerState
     * @memberof RobotState
     * @instance
     */
    RobotState.prototype.yawControllerState = null;

    /**
     * Creates a new RobotState instance using the specified properties.
     * @function create
     * @memberof RobotState
     * @static
     * @param {IRobotState=} [properties] Properties to set
     * @returns {RobotState} RobotState instance
     */
    RobotState.create = function create(properties) {
        return new RobotState(properties);
    };

    /**
     * Encodes the specified RobotState message. Does not implicitly {@link RobotState.verify|verify} messages.
     * @function encode
     * @memberof RobotState
     * @static
     * @param {IRobotState} message RobotState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RobotState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.pitch != null && Object.hasOwnProperty.call(message, "pitch"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.pitch);
        if (message.yaw != null && Object.hasOwnProperty.call(message, "yaw"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.yaw);
        if (message.pitchRate != null && Object.hasOwnProperty.call(message, "pitchRate"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.pitchRate);
        if (message.yawRate != null && Object.hasOwnProperty.call(message, "yawRate"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.yawRate);
        if (message.leftMotorAngle != null && Object.hasOwnProperty.call(message, "leftMotorAngle"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.leftMotorAngle);
        if (message.rightMotorAngle != null && Object.hasOwnProperty.call(message, "rightMotorAngle"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.rightMotorAngle);
        if (message.leftMotorSpeed != null && Object.hasOwnProperty.call(message, "leftMotorSpeed"))
            writer.uint32(/* id 8, wireType 5 =*/69).float(message.leftMotorSpeed);
        if (message.rightMotorSpeed != null && Object.hasOwnProperty.call(message, "rightMotorSpeed"))
            writer.uint32(/* id 9, wireType 5 =*/77).float(message.rightMotorSpeed);
        if (message.pitchControllerState != null && Object.hasOwnProperty.call(message, "pitchControllerState"))
            $root.controllers.pitch.State.encode(message.pitchControllerState, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.yawControllerState != null && Object.hasOwnProperty.call(message, "yawControllerState"))
            $root.controllers.yaw.State.encode(message.yawControllerState, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RobotState message, length delimited. Does not implicitly {@link RobotState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RobotState
     * @static
     * @param {IRobotState} message RobotState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RobotState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RobotState message from the specified reader or buffer.
     * @function decode
     * @memberof RobotState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RobotState} RobotState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RobotState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RobotState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.pitch = reader.float();
                    break;
                }
            case 3: {
                    message.yaw = reader.float();
                    break;
                }
            case 4: {
                    message.pitchRate = reader.float();
                    break;
                }
            case 5: {
                    message.yawRate = reader.float();
                    break;
                }
            case 6: {
                    message.leftMotorAngle = reader.float();
                    break;
                }
            case 7: {
                    message.rightMotorAngle = reader.float();
                    break;
                }
            case 8: {
                    message.leftMotorSpeed = reader.float();
                    break;
                }
            case 9: {
                    message.rightMotorSpeed = reader.float();
                    break;
                }
            case 10: {
                    message.pitchControllerState = $root.controllers.pitch.State.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.yawControllerState = $root.controllers.yaw.State.decode(reader, reader.uint32());
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
     * Decodes a RobotState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RobotState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RobotState} RobotState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RobotState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RobotState message.
     * @function verify
     * @memberof RobotState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RobotState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
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
        if (message.pitchControllerState != null && message.hasOwnProperty("pitchControllerState")) {
            let error = $root.controllers.pitch.State.verify(message.pitchControllerState);
            if (error)
                return "pitchControllerState." + error;
        }
        if (message.yawControllerState != null && message.hasOwnProperty("yawControllerState")) {
            let error = $root.controllers.yaw.State.verify(message.yawControllerState);
            if (error)
                return "yawControllerState." + error;
        }
        return null;
    };

    /**
     * Creates a RobotState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RobotState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RobotState} RobotState
     */
    RobotState.fromObject = function fromObject(object) {
        if (object instanceof $root.RobotState)
            return object;
        let message = new $root.RobotState();
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".RobotState.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
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
        if (object.pitchControllerState != null) {
            if (typeof object.pitchControllerState !== "object")
                throw TypeError(".RobotState.pitchControllerState: object expected");
            message.pitchControllerState = $root.controllers.pitch.State.fromObject(object.pitchControllerState);
        }
        if (object.yawControllerState != null) {
            if (typeof object.yawControllerState !== "object")
                throw TypeError(".RobotState.yawControllerState: object expected");
            message.yawControllerState = $root.controllers.yaw.State.fromObject(object.yawControllerState);
        }
        return message;
    };

    /**
     * Creates a plain object from a RobotState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RobotState
     * @static
     * @param {RobotState} message RobotState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RobotState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.timestamp = null;
            object.pitch = 0;
            object.yaw = 0;
            object.pitchRate = 0;
            object.yawRate = 0;
            object.leftMotorAngle = 0;
            object.rightMotorAngle = 0;
            object.leftMotorSpeed = 0;
            object.rightMotorSpeed = 0;
            object.pitchControllerState = null;
            object.yawControllerState = null;
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
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
        if (message.pitchControllerState != null && message.hasOwnProperty("pitchControllerState"))
            object.pitchControllerState = $root.controllers.pitch.State.toObject(message.pitchControllerState, options);
        if (message.yawControllerState != null && message.hasOwnProperty("yawControllerState"))
            object.yawControllerState = $root.controllers.yaw.State.toObject(message.yawControllerState, options);
        return object;
    };

    /**
     * Converts this RobotState to JSON.
     * @function toJSON
     * @memberof RobotState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RobotState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RobotState
     * @function getTypeUrl
     * @memberof RobotState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RobotState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RobotState";
    };

    return RobotState;
})();

export const Log = $root.Log = (() => {

    /**
     * Properties of a Log.
     * @name ILog
     * @interface ILog
     * @property {Log.Level|null} [level] Log level
     * @property {string|null} [message] Log message
     */

    /**
     * Constructs a new Log.
     * @name Log
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
     * @member {Log.Level} level
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
            object.level = options.enums === String ? $root.Log.Level[message.level] === undefined ? message.level : $root.Log.Level[message.level] : message.level;
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

    /**
     * Level enum.
     * @name Log.Level
     * @enum {number}
     * @property {number} DEBUG=0 DEBUG value
     * @property {number} INFO=1 INFO value
     * @property {number} WARN=2 WARN value
     * @property {number} ERROR=3 ERROR value
     */
    Log.Level = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEBUG"] = 0;
        values[valuesById[1] = "INFO"] = 1;
        values[valuesById[2] = "WARN"] = 2;
        values[valuesById[3] = "ERROR"] = 3;
        return values;
    })();

    return Log;
})();

export const Message = $root.Message = (() => {

    /**
     * Properties of a Message.
     * @name IMessage
     * @interface IMessage
     * @property {number|null} [id] Message id
     * @property {IResponse|null} [response] Message response
     * @property {registers.IReadCurrent|null} [readCurrentReg] Message readCurrentReg
     * @property {registers.IReadSaved|null} [readSavedReg] Message readSavedReg
     * @property {registers.IWriteCurrent|null} [writeCurrentReg] Message writeCurrentReg
     * @property {registers.ISaveCurrent|null} [saveCurrentReg] Message saveCurrentReg
     * @property {google.protobuf.IEmpty|null} [calibrateMotors] Message calibrateMotors
     * @property {IRobotState|null} [robotState] Message robotState
     * @property {ILog|null} [log] Message log
     * @property {google.protobuf.IEmpty|null} [readAllRegs] Message readAllRegs
     */

    /**
     * Constructs a new Message.
     * @name Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message id.
     * @member {number} id
     * @memberof Message
     * @instance
     */
    Message.prototype.id = 0;

    /**
     * Message response.
     * @member {IResponse|null|undefined} response
     * @memberof Message
     * @instance
     */
    Message.prototype.response = null;

    /**
     * Message readCurrentReg.
     * @member {registers.IReadCurrent|null|undefined} readCurrentReg
     * @memberof Message
     * @instance
     */
    Message.prototype.readCurrentReg = null;

    /**
     * Message readSavedReg.
     * @member {registers.IReadSaved|null|undefined} readSavedReg
     * @memberof Message
     * @instance
     */
    Message.prototype.readSavedReg = null;

    /**
     * Message writeCurrentReg.
     * @member {registers.IWriteCurrent|null|undefined} writeCurrentReg
     * @memberof Message
     * @instance
     */
    Message.prototype.writeCurrentReg = null;

    /**
     * Message saveCurrentReg.
     * @member {registers.ISaveCurrent|null|undefined} saveCurrentReg
     * @memberof Message
     * @instance
     */
    Message.prototype.saveCurrentReg = null;

    /**
     * Message calibrateMotors.
     * @member {google.protobuf.IEmpty|null|undefined} calibrateMotors
     * @memberof Message
     * @instance
     */
    Message.prototype.calibrateMotors = null;

    /**
     * Message robotState.
     * @member {IRobotState|null|undefined} robotState
     * @memberof Message
     * @instance
     */
    Message.prototype.robotState = null;

    /**
     * Message log.
     * @member {ILog|null|undefined} log
     * @memberof Message
     * @instance
     */
    Message.prototype.log = null;

    /**
     * Message readAllRegs.
     * @member {google.protobuf.IEmpty|null|undefined} readAllRegs
     * @memberof Message
     * @instance
     */
    Message.prototype.readAllRegs = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Message payload.
     * @member {"response"|"readCurrentReg"|"readSavedReg"|"writeCurrentReg"|"saveCurrentReg"|"calibrateMotors"|"robotState"|"log"|"readAllRegs"|undefined} payload
     * @memberof Message
     * @instance
     */
    Object.defineProperty(Message.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["response", "readCurrentReg", "readSavedReg", "writeCurrentReg", "saveCurrentReg", "calibrateMotors", "robotState", "log", "readAllRegs"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.readCurrentReg != null && Object.hasOwnProperty.call(message, "readCurrentReg"))
            $root.registers.ReadCurrent.encode(message.readCurrentReg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.readSavedReg != null && Object.hasOwnProperty.call(message, "readSavedReg"))
            $root.registers.ReadSaved.encode(message.readSavedReg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.writeCurrentReg != null && Object.hasOwnProperty.call(message, "writeCurrentReg"))
            $root.registers.WriteCurrent.encode(message.writeCurrentReg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.saveCurrentReg != null && Object.hasOwnProperty.call(message, "saveCurrentReg"))
            $root.registers.SaveCurrent.encode(message.saveCurrentReg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.calibrateMotors != null && Object.hasOwnProperty.call(message, "calibrateMotors"))
            $root.google.protobuf.Empty.encode(message.calibrateMotors, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.robotState != null && Object.hasOwnProperty.call(message, "robotState"))
            $root.RobotState.encode(message.robotState, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.log != null && Object.hasOwnProperty.call(message, "log"))
            $root.Log.encode(message.log, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.readAllRegs != null && Object.hasOwnProperty.call(message, "readAllRegs"))
            $root.google.protobuf.Empty.encode(message.readAllRegs, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
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
                    message.readCurrentReg = $root.registers.ReadCurrent.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.readSavedReg = $root.registers.ReadSaved.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.writeCurrentReg = $root.registers.WriteCurrent.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.saveCurrentReg = $root.registers.SaveCurrent.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.calibrateMotors = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.robotState = $root.RobotState.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.log = $root.Log.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.readAllRegs = $root.google.protobuf.Empty.decode(reader, reader.uint32());
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
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            properties.payload = 1;
            {
                let error = $root.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        if (message.readCurrentReg != null && message.hasOwnProperty("readCurrentReg")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.registers.ReadCurrent.verify(message.readCurrentReg);
                if (error)
                    return "readCurrentReg." + error;
            }
        }
        if (message.readSavedReg != null && message.hasOwnProperty("readSavedReg")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.registers.ReadSaved.verify(message.readSavedReg);
                if (error)
                    return "readSavedReg." + error;
            }
        }
        if (message.writeCurrentReg != null && message.hasOwnProperty("writeCurrentReg")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.registers.WriteCurrent.verify(message.writeCurrentReg);
                if (error)
                    return "writeCurrentReg." + error;
            }
        }
        if (message.saveCurrentReg != null && message.hasOwnProperty("saveCurrentReg")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.registers.SaveCurrent.verify(message.saveCurrentReg);
                if (error)
                    return "saveCurrentReg." + error;
            }
        }
        if (message.calibrateMotors != null && message.hasOwnProperty("calibrateMotors")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.google.protobuf.Empty.verify(message.calibrateMotors);
                if (error)
                    return "calibrateMotors." + error;
            }
        }
        if (message.robotState != null && message.hasOwnProperty("robotState")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.RobotState.verify(message.robotState);
                if (error)
                    return "robotState." + error;
            }
        }
        if (message.log != null && message.hasOwnProperty("log")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.Log.verify(message.log);
                if (error)
                    return "log." + error;
            }
        }
        if (message.readAllRegs != null && message.hasOwnProperty("readAllRegs")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.google.protobuf.Empty.verify(message.readAllRegs);
                if (error)
                    return "readAllRegs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        let message = new $root.Message();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".Message.response: object expected");
            message.response = $root.Response.fromObject(object.response);
        }
        if (object.readCurrentReg != null) {
            if (typeof object.readCurrentReg !== "object")
                throw TypeError(".Message.readCurrentReg: object expected");
            message.readCurrentReg = $root.registers.ReadCurrent.fromObject(object.readCurrentReg);
        }
        if (object.readSavedReg != null) {
            if (typeof object.readSavedReg !== "object")
                throw TypeError(".Message.readSavedReg: object expected");
            message.readSavedReg = $root.registers.ReadSaved.fromObject(object.readSavedReg);
        }
        if (object.writeCurrentReg != null) {
            if (typeof object.writeCurrentReg !== "object")
                throw TypeError(".Message.writeCurrentReg: object expected");
            message.writeCurrentReg = $root.registers.WriteCurrent.fromObject(object.writeCurrentReg);
        }
        if (object.saveCurrentReg != null) {
            if (typeof object.saveCurrentReg !== "object")
                throw TypeError(".Message.saveCurrentReg: object expected");
            message.saveCurrentReg = $root.registers.SaveCurrent.fromObject(object.saveCurrentReg);
        }
        if (object.calibrateMotors != null) {
            if (typeof object.calibrateMotors !== "object")
                throw TypeError(".Message.calibrateMotors: object expected");
            message.calibrateMotors = $root.google.protobuf.Empty.fromObject(object.calibrateMotors);
        }
        if (object.robotState != null) {
            if (typeof object.robotState !== "object")
                throw TypeError(".Message.robotState: object expected");
            message.robotState = $root.RobotState.fromObject(object.robotState);
        }
        if (object.log != null) {
            if (typeof object.log !== "object")
                throw TypeError(".Message.log: object expected");
            message.log = $root.Log.fromObject(object.log);
        }
        if (object.readAllRegs != null) {
            if (typeof object.readAllRegs !== "object")
                throw TypeError(".Message.readAllRegs: object expected");
            message.readAllRegs = $root.google.protobuf.Empty.fromObject(object.readAllRegs);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
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
                object.payload = "response";
        }
        if (message.readCurrentReg != null && message.hasOwnProperty("readCurrentReg")) {
            object.readCurrentReg = $root.registers.ReadCurrent.toObject(message.readCurrentReg, options);
            if (options.oneofs)
                object.payload = "readCurrentReg";
        }
        if (message.readSavedReg != null && message.hasOwnProperty("readSavedReg")) {
            object.readSavedReg = $root.registers.ReadSaved.toObject(message.readSavedReg, options);
            if (options.oneofs)
                object.payload = "readSavedReg";
        }
        if (message.writeCurrentReg != null && message.hasOwnProperty("writeCurrentReg")) {
            object.writeCurrentReg = $root.registers.WriteCurrent.toObject(message.writeCurrentReg, options);
            if (options.oneofs)
                object.payload = "writeCurrentReg";
        }
        if (message.saveCurrentReg != null && message.hasOwnProperty("saveCurrentReg")) {
            object.saveCurrentReg = $root.registers.SaveCurrent.toObject(message.saveCurrentReg, options);
            if (options.oneofs)
                object.payload = "saveCurrentReg";
        }
        if (message.calibrateMotors != null && message.hasOwnProperty("calibrateMotors")) {
            object.calibrateMotors = $root.google.protobuf.Empty.toObject(message.calibrateMotors, options);
            if (options.oneofs)
                object.payload = "calibrateMotors";
        }
        if (message.robotState != null && message.hasOwnProperty("robotState")) {
            object.robotState = $root.RobotState.toObject(message.robotState, options);
            if (options.oneofs)
                object.payload = "robotState";
        }
        if (message.log != null && message.hasOwnProperty("log")) {
            object.log = $root.Log.toObject(message.log, options);
            if (options.oneofs)
                object.payload = "log";
        }
        if (message.readAllRegs != null && message.hasOwnProperty("readAllRegs")) {
            object.readAllRegs = $root.google.protobuf.Empty.toObject(message.readAllRegs, options);
            if (options.oneofs)
                object.payload = "readAllRegs";
        }
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Message
     * @function getTypeUrl
     * @memberof Message
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Message";
    };

    return Message;
})();

export const registers = $root.registers = (() => {

    /**
     * Namespace registers.
     * @name registers
     * @namespace
     */
    const registers = {};

    /**
     * Register enum.
     * @name registers.Register
     * @enum {number}
     * @property {number} ENABLE_BALANCING=0 ENABLE_BALANCING value
     * @property {number} PITCH_CONTROLLER_PARAMS=1 PITCH_CONTROLLER_PARAMS value
     * @property {number} PITCH_CONTROLLER_ACTIVE=2 PITCH_CONTROLLER_ACTIVE value
     * @property {number} YAW_CONTROLLER_PARAMS=3 YAW_CONTROLLER_PARAMS value
     * @property {number} YAW_CONTROLLER_ACTIVE=4 YAW_CONTROLLER_ACTIVE value
     * @property {number} PHYSICAL_CHARACTERSTICS=5 PHYSICAL_CHARACTERSTICS value
     * @property {number} MOTOR_CALIBRATION_LUT=6 MOTOR_CALIBRATION_LUT value
     */
    registers.Register = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ENABLE_BALANCING"] = 0;
        values[valuesById[1] = "PITCH_CONTROLLER_PARAMS"] = 1;
        values[valuesById[2] = "PITCH_CONTROLLER_ACTIVE"] = 2;
        values[valuesById[3] = "YAW_CONTROLLER_PARAMS"] = 3;
        values[valuesById[4] = "YAW_CONTROLLER_ACTIVE"] = 4;
        values[valuesById[5] = "PHYSICAL_CHARACTERSTICS"] = 5;
        values[valuesById[6] = "MOTOR_CALIBRATION_LUT"] = 6;
        return values;
    })();

    registers.ReadCurrent = (function() {

        /**
         * Properties of a ReadCurrent.
         * @memberof registers
         * @interface IReadCurrent
         * @property {registers.Register|null} [reg] ReadCurrent reg
         */

        /**
         * Constructs a new ReadCurrent.
         * @memberof registers
         * @classdesc Represents a ReadCurrent.
         * @implements IReadCurrent
         * @constructor
         * @param {registers.IReadCurrent=} [properties] Properties to set
         */
        function ReadCurrent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadCurrent reg.
         * @member {registers.Register} reg
         * @memberof registers.ReadCurrent
         * @instance
         */
        ReadCurrent.prototype.reg = 0;

        /**
         * Creates a new ReadCurrent instance using the specified properties.
         * @function create
         * @memberof registers.ReadCurrent
         * @static
         * @param {registers.IReadCurrent=} [properties] Properties to set
         * @returns {registers.ReadCurrent} ReadCurrent instance
         */
        ReadCurrent.create = function create(properties) {
            return new ReadCurrent(properties);
        };

        /**
         * Encodes the specified ReadCurrent message. Does not implicitly {@link registers.ReadCurrent.verify|verify} messages.
         * @function encode
         * @memberof registers.ReadCurrent
         * @static
         * @param {registers.IReadCurrent} message ReadCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadCurrent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reg != null && Object.hasOwnProperty.call(message, "reg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reg);
            return writer;
        };

        /**
         * Encodes the specified ReadCurrent message, length delimited. Does not implicitly {@link registers.ReadCurrent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof registers.ReadCurrent
         * @static
         * @param {registers.IReadCurrent} message ReadCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadCurrent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadCurrent message from the specified reader or buffer.
         * @function decode
         * @memberof registers.ReadCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {registers.ReadCurrent} ReadCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadCurrent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.registers.ReadCurrent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reg = reader.int32();
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
         * Decodes a ReadCurrent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof registers.ReadCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {registers.ReadCurrent} ReadCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadCurrent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadCurrent message.
         * @function verify
         * @memberof registers.ReadCurrent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadCurrent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reg != null && message.hasOwnProperty("reg"))
                switch (message.reg) {
                default:
                    return "reg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Creates a ReadCurrent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof registers.ReadCurrent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {registers.ReadCurrent} ReadCurrent
         */
        ReadCurrent.fromObject = function fromObject(object) {
            if (object instanceof $root.registers.ReadCurrent)
                return object;
            let message = new $root.registers.ReadCurrent();
            switch (object.reg) {
            default:
                if (typeof object.reg === "number") {
                    message.reg = object.reg;
                    break;
                }
                break;
            case "ENABLE_BALANCING":
            case 0:
                message.reg = 0;
                break;
            case "PITCH_CONTROLLER_PARAMS":
            case 1:
                message.reg = 1;
                break;
            case "PITCH_CONTROLLER_ACTIVE":
            case 2:
                message.reg = 2;
                break;
            case "YAW_CONTROLLER_PARAMS":
            case 3:
                message.reg = 3;
                break;
            case "YAW_CONTROLLER_ACTIVE":
            case 4:
                message.reg = 4;
                break;
            case "PHYSICAL_CHARACTERSTICS":
            case 5:
                message.reg = 5;
                break;
            case "MOTOR_CALIBRATION_LUT":
            case 6:
                message.reg = 6;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadCurrent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof registers.ReadCurrent
         * @static
         * @param {registers.ReadCurrent} message ReadCurrent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadCurrent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reg = options.enums === String ? "ENABLE_BALANCING" : 0;
            if (message.reg != null && message.hasOwnProperty("reg"))
                object.reg = options.enums === String ? $root.registers.Register[message.reg] === undefined ? message.reg : $root.registers.Register[message.reg] : message.reg;
            return object;
        };

        /**
         * Converts this ReadCurrent to JSON.
         * @function toJSON
         * @memberof registers.ReadCurrent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadCurrent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadCurrent
         * @function getTypeUrl
         * @memberof registers.ReadCurrent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadCurrent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/registers.ReadCurrent";
        };

        return ReadCurrent;
    })();

    registers.ReadSaved = (function() {

        /**
         * Properties of a ReadSaved.
         * @memberof registers
         * @interface IReadSaved
         * @property {registers.Register|null} [reg] ReadSaved reg
         */

        /**
         * Constructs a new ReadSaved.
         * @memberof registers
         * @classdesc Represents a ReadSaved.
         * @implements IReadSaved
         * @constructor
         * @param {registers.IReadSaved=} [properties] Properties to set
         */
        function ReadSaved(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadSaved reg.
         * @member {registers.Register} reg
         * @memberof registers.ReadSaved
         * @instance
         */
        ReadSaved.prototype.reg = 0;

        /**
         * Creates a new ReadSaved instance using the specified properties.
         * @function create
         * @memberof registers.ReadSaved
         * @static
         * @param {registers.IReadSaved=} [properties] Properties to set
         * @returns {registers.ReadSaved} ReadSaved instance
         */
        ReadSaved.create = function create(properties) {
            return new ReadSaved(properties);
        };

        /**
         * Encodes the specified ReadSaved message. Does not implicitly {@link registers.ReadSaved.verify|verify} messages.
         * @function encode
         * @memberof registers.ReadSaved
         * @static
         * @param {registers.IReadSaved} message ReadSaved message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadSaved.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reg != null && Object.hasOwnProperty.call(message, "reg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reg);
            return writer;
        };

        /**
         * Encodes the specified ReadSaved message, length delimited. Does not implicitly {@link registers.ReadSaved.verify|verify} messages.
         * @function encodeDelimited
         * @memberof registers.ReadSaved
         * @static
         * @param {registers.IReadSaved} message ReadSaved message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadSaved.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadSaved message from the specified reader or buffer.
         * @function decode
         * @memberof registers.ReadSaved
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {registers.ReadSaved} ReadSaved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadSaved.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.registers.ReadSaved();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reg = reader.int32();
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
         * Decodes a ReadSaved message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof registers.ReadSaved
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {registers.ReadSaved} ReadSaved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadSaved.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadSaved message.
         * @function verify
         * @memberof registers.ReadSaved
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadSaved.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reg != null && message.hasOwnProperty("reg"))
                switch (message.reg) {
                default:
                    return "reg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Creates a ReadSaved message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof registers.ReadSaved
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {registers.ReadSaved} ReadSaved
         */
        ReadSaved.fromObject = function fromObject(object) {
            if (object instanceof $root.registers.ReadSaved)
                return object;
            let message = new $root.registers.ReadSaved();
            switch (object.reg) {
            default:
                if (typeof object.reg === "number") {
                    message.reg = object.reg;
                    break;
                }
                break;
            case "ENABLE_BALANCING":
            case 0:
                message.reg = 0;
                break;
            case "PITCH_CONTROLLER_PARAMS":
            case 1:
                message.reg = 1;
                break;
            case "PITCH_CONTROLLER_ACTIVE":
            case 2:
                message.reg = 2;
                break;
            case "YAW_CONTROLLER_PARAMS":
            case 3:
                message.reg = 3;
                break;
            case "YAW_CONTROLLER_ACTIVE":
            case 4:
                message.reg = 4;
                break;
            case "PHYSICAL_CHARACTERSTICS":
            case 5:
                message.reg = 5;
                break;
            case "MOTOR_CALIBRATION_LUT":
            case 6:
                message.reg = 6;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadSaved message. Also converts values to other types if specified.
         * @function toObject
         * @memberof registers.ReadSaved
         * @static
         * @param {registers.ReadSaved} message ReadSaved
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadSaved.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reg = options.enums === String ? "ENABLE_BALANCING" : 0;
            if (message.reg != null && message.hasOwnProperty("reg"))
                object.reg = options.enums === String ? $root.registers.Register[message.reg] === undefined ? message.reg : $root.registers.Register[message.reg] : message.reg;
            return object;
        };

        /**
         * Converts this ReadSaved to JSON.
         * @function toJSON
         * @memberof registers.ReadSaved
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadSaved.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadSaved
         * @function getTypeUrl
         * @memberof registers.ReadSaved
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadSaved.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/registers.ReadSaved";
        };

        return ReadSaved;
    })();

    registers.WriteCurrent = (function() {

        /**
         * Properties of a WriteCurrent.
         * @memberof registers
         * @interface IWriteCurrent
         * @property {boolean|null} [enableBalancing] WriteCurrent enableBalancing
         * @property {controllers.pitch.IParams|null} [pitchControllerParams] WriteCurrent pitchControllerParams
         * @property {controllers.pitch.Type|null} [pitchControllerActive] WriteCurrent pitchControllerActive
         * @property {controllers.yaw.IParams|null} [yawControllerParams] WriteCurrent yawControllerParams
         * @property {controllers.yaw.Type|null} [yawControllerActive] WriteCurrent yawControllerActive
         * @property {physical.ICharacteristics|null} [physicalCharacteristics] WriteCurrent physicalCharacteristics
         * @property {motor_calib.ILUT|null} [motorCalibrationLut] WriteCurrent motorCalibrationLut
         */

        /**
         * Constructs a new WriteCurrent.
         * @memberof registers
         * @classdesc Represents a WriteCurrent.
         * @implements IWriteCurrent
         * @constructor
         * @param {registers.IWriteCurrent=} [properties] Properties to set
         */
        function WriteCurrent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteCurrent enableBalancing.
         * @member {boolean|null|undefined} enableBalancing
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.enableBalancing = null;

        /**
         * WriteCurrent pitchControllerParams.
         * @member {controllers.pitch.IParams|null|undefined} pitchControllerParams
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.pitchControllerParams = null;

        /**
         * WriteCurrent pitchControllerActive.
         * @member {controllers.pitch.Type|null|undefined} pitchControllerActive
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.pitchControllerActive = null;

        /**
         * WriteCurrent yawControllerParams.
         * @member {controllers.yaw.IParams|null|undefined} yawControllerParams
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.yawControllerParams = null;

        /**
         * WriteCurrent yawControllerActive.
         * @member {controllers.yaw.Type|null|undefined} yawControllerActive
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.yawControllerActive = null;

        /**
         * WriteCurrent physicalCharacteristics.
         * @member {physical.ICharacteristics|null|undefined} physicalCharacteristics
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.physicalCharacteristics = null;

        /**
         * WriteCurrent motorCalibrationLut.
         * @member {motor_calib.ILUT|null|undefined} motorCalibrationLut
         * @memberof registers.WriteCurrent
         * @instance
         */
        WriteCurrent.prototype.motorCalibrationLut = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WriteCurrent data.
         * @member {"enableBalancing"|"pitchControllerParams"|"pitchControllerActive"|"yawControllerParams"|"yawControllerActive"|"physicalCharacteristics"|"motorCalibrationLut"|undefined} data
         * @memberof registers.WriteCurrent
         * @instance
         */
        Object.defineProperty(WriteCurrent.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["enableBalancing", "pitchControllerParams", "pitchControllerActive", "yawControllerParams", "yawControllerActive", "physicalCharacteristics", "motorCalibrationLut"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WriteCurrent instance using the specified properties.
         * @function create
         * @memberof registers.WriteCurrent
         * @static
         * @param {registers.IWriteCurrent=} [properties] Properties to set
         * @returns {registers.WriteCurrent} WriteCurrent instance
         */
        WriteCurrent.create = function create(properties) {
            return new WriteCurrent(properties);
        };

        /**
         * Encodes the specified WriteCurrent message. Does not implicitly {@link registers.WriteCurrent.verify|verify} messages.
         * @function encode
         * @memberof registers.WriteCurrent
         * @static
         * @param {registers.IWriteCurrent} message WriteCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteCurrent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enableBalancing != null && Object.hasOwnProperty.call(message, "enableBalancing"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enableBalancing);
            if (message.pitchControllerParams != null && Object.hasOwnProperty.call(message, "pitchControllerParams"))
                $root.controllers.pitch.Params.encode(message.pitchControllerParams, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pitchControllerActive != null && Object.hasOwnProperty.call(message, "pitchControllerActive"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pitchControllerActive);
            if (message.yawControllerParams != null && Object.hasOwnProperty.call(message, "yawControllerParams"))
                $root.controllers.yaw.Params.encode(message.yawControllerParams, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.yawControllerActive != null && Object.hasOwnProperty.call(message, "yawControllerActive"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.yawControllerActive);
            if (message.physicalCharacteristics != null && Object.hasOwnProperty.call(message, "physicalCharacteristics"))
                $root.physical.Characteristics.encode(message.physicalCharacteristics, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.motorCalibrationLut != null && Object.hasOwnProperty.call(message, "motorCalibrationLut"))
                $root.motor_calib.LUT.encode(message.motorCalibrationLut, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WriteCurrent message, length delimited. Does not implicitly {@link registers.WriteCurrent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof registers.WriteCurrent
         * @static
         * @param {registers.IWriteCurrent} message WriteCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteCurrent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteCurrent message from the specified reader or buffer.
         * @function decode
         * @memberof registers.WriteCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {registers.WriteCurrent} WriteCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteCurrent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.registers.WriteCurrent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.enableBalancing = reader.bool();
                        break;
                    }
                case 2: {
                        message.pitchControllerParams = $root.controllers.pitch.Params.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.pitchControllerActive = reader.int32();
                        break;
                    }
                case 4: {
                        message.yawControllerParams = $root.controllers.yaw.Params.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.yawControllerActive = reader.int32();
                        break;
                    }
                case 6: {
                        message.physicalCharacteristics = $root.physical.Characteristics.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.motorCalibrationLut = $root.motor_calib.LUT.decode(reader, reader.uint32());
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
         * Decodes a WriteCurrent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof registers.WriteCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {registers.WriteCurrent} WriteCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteCurrent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteCurrent message.
         * @function verify
         * @memberof registers.WriteCurrent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteCurrent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.enableBalancing != null && message.hasOwnProperty("enableBalancing")) {
                properties.data = 1;
                if (typeof message.enableBalancing !== "boolean")
                    return "enableBalancing: boolean expected";
            }
            if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.controllers.pitch.Params.verify(message.pitchControllerParams);
                    if (error)
                        return "pitchControllerParams." + error;
                }
            }
            if (message.pitchControllerActive != null && message.hasOwnProperty("pitchControllerActive")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                switch (message.pitchControllerActive) {
                default:
                    return "pitchControllerActive: enum value expected";
                case 0:
                    break;
                }
            }
            if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.controllers.yaw.Params.verify(message.yawControllerParams);
                    if (error)
                        return "yawControllerParams." + error;
                }
            }
            if (message.yawControllerActive != null && message.hasOwnProperty("yawControllerActive")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                switch (message.yawControllerActive) {
                default:
                    return "yawControllerActive: enum value expected";
                case 0:
                    break;
                }
            }
            if (message.physicalCharacteristics != null && message.hasOwnProperty("physicalCharacteristics")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.physical.Characteristics.verify(message.physicalCharacteristics);
                    if (error)
                        return "physicalCharacteristics." + error;
                }
            }
            if (message.motorCalibrationLut != null && message.hasOwnProperty("motorCalibrationLut")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.motor_calib.LUT.verify(message.motorCalibrationLut);
                    if (error)
                        return "motorCalibrationLut." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WriteCurrent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof registers.WriteCurrent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {registers.WriteCurrent} WriteCurrent
         */
        WriteCurrent.fromObject = function fromObject(object) {
            if (object instanceof $root.registers.WriteCurrent)
                return object;
            let message = new $root.registers.WriteCurrent();
            if (object.enableBalancing != null)
                message.enableBalancing = Boolean(object.enableBalancing);
            if (object.pitchControllerParams != null) {
                if (typeof object.pitchControllerParams !== "object")
                    throw TypeError(".registers.WriteCurrent.pitchControllerParams: object expected");
                message.pitchControllerParams = $root.controllers.pitch.Params.fromObject(object.pitchControllerParams);
            }
            switch (object.pitchControllerActive) {
            default:
                if (typeof object.pitchControllerActive === "number") {
                    message.pitchControllerActive = object.pitchControllerActive;
                    break;
                }
                break;
            case "PID":
            case 0:
                message.pitchControllerActive = 0;
                break;
            }
            if (object.yawControllerParams != null) {
                if (typeof object.yawControllerParams !== "object")
                    throw TypeError(".registers.WriteCurrent.yawControllerParams: object expected");
                message.yawControllerParams = $root.controllers.yaw.Params.fromObject(object.yawControllerParams);
            }
            switch (object.yawControllerActive) {
            default:
                if (typeof object.yawControllerActive === "number") {
                    message.yawControllerActive = object.yawControllerActive;
                    break;
                }
                break;
            case "PID":
            case 0:
                message.yawControllerActive = 0;
                break;
            }
            if (object.physicalCharacteristics != null) {
                if (typeof object.physicalCharacteristics !== "object")
                    throw TypeError(".registers.WriteCurrent.physicalCharacteristics: object expected");
                message.physicalCharacteristics = $root.physical.Characteristics.fromObject(object.physicalCharacteristics);
            }
            if (object.motorCalibrationLut != null) {
                if (typeof object.motorCalibrationLut !== "object")
                    throw TypeError(".registers.WriteCurrent.motorCalibrationLut: object expected");
                message.motorCalibrationLut = $root.motor_calib.LUT.fromObject(object.motorCalibrationLut);
            }
            return message;
        };

        /**
         * Creates a plain object from a WriteCurrent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof registers.WriteCurrent
         * @static
         * @param {registers.WriteCurrent} message WriteCurrent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteCurrent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.enableBalancing != null && message.hasOwnProperty("enableBalancing")) {
                object.enableBalancing = message.enableBalancing;
                if (options.oneofs)
                    object.data = "enableBalancing";
            }
            if (message.pitchControllerParams != null && message.hasOwnProperty("pitchControllerParams")) {
                object.pitchControllerParams = $root.controllers.pitch.Params.toObject(message.pitchControllerParams, options);
                if (options.oneofs)
                    object.data = "pitchControllerParams";
            }
            if (message.pitchControllerActive != null && message.hasOwnProperty("pitchControllerActive")) {
                object.pitchControllerActive = options.enums === String ? $root.controllers.pitch.Type[message.pitchControllerActive] === undefined ? message.pitchControllerActive : $root.controllers.pitch.Type[message.pitchControllerActive] : message.pitchControllerActive;
                if (options.oneofs)
                    object.data = "pitchControllerActive";
            }
            if (message.yawControllerParams != null && message.hasOwnProperty("yawControllerParams")) {
                object.yawControllerParams = $root.controllers.yaw.Params.toObject(message.yawControllerParams, options);
                if (options.oneofs)
                    object.data = "yawControllerParams";
            }
            if (message.yawControllerActive != null && message.hasOwnProperty("yawControllerActive")) {
                object.yawControllerActive = options.enums === String ? $root.controllers.yaw.Type[message.yawControllerActive] === undefined ? message.yawControllerActive : $root.controllers.yaw.Type[message.yawControllerActive] : message.yawControllerActive;
                if (options.oneofs)
                    object.data = "yawControllerActive";
            }
            if (message.physicalCharacteristics != null && message.hasOwnProperty("physicalCharacteristics")) {
                object.physicalCharacteristics = $root.physical.Characteristics.toObject(message.physicalCharacteristics, options);
                if (options.oneofs)
                    object.data = "physicalCharacteristics";
            }
            if (message.motorCalibrationLut != null && message.hasOwnProperty("motorCalibrationLut")) {
                object.motorCalibrationLut = $root.motor_calib.LUT.toObject(message.motorCalibrationLut, options);
                if (options.oneofs)
                    object.data = "motorCalibrationLut";
            }
            return object;
        };

        /**
         * Converts this WriteCurrent to JSON.
         * @function toJSON
         * @memberof registers.WriteCurrent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteCurrent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WriteCurrent
         * @function getTypeUrl
         * @memberof registers.WriteCurrent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WriteCurrent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/registers.WriteCurrent";
        };

        return WriteCurrent;
    })();

    registers.SaveCurrent = (function() {

        /**
         * Properties of a SaveCurrent.
         * @memberof registers
         * @interface ISaveCurrent
         * @property {registers.Register|null} [reg] SaveCurrent reg
         */

        /**
         * Constructs a new SaveCurrent.
         * @memberof registers
         * @classdesc Represents a SaveCurrent.
         * @implements ISaveCurrent
         * @constructor
         * @param {registers.ISaveCurrent=} [properties] Properties to set
         */
        function SaveCurrent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveCurrent reg.
         * @member {registers.Register} reg
         * @memberof registers.SaveCurrent
         * @instance
         */
        SaveCurrent.prototype.reg = 0;

        /**
         * Creates a new SaveCurrent instance using the specified properties.
         * @function create
         * @memberof registers.SaveCurrent
         * @static
         * @param {registers.ISaveCurrent=} [properties] Properties to set
         * @returns {registers.SaveCurrent} SaveCurrent instance
         */
        SaveCurrent.create = function create(properties) {
            return new SaveCurrent(properties);
        };

        /**
         * Encodes the specified SaveCurrent message. Does not implicitly {@link registers.SaveCurrent.verify|verify} messages.
         * @function encode
         * @memberof registers.SaveCurrent
         * @static
         * @param {registers.ISaveCurrent} message SaveCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveCurrent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reg != null && Object.hasOwnProperty.call(message, "reg"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reg);
            return writer;
        };

        /**
         * Encodes the specified SaveCurrent message, length delimited. Does not implicitly {@link registers.SaveCurrent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof registers.SaveCurrent
         * @static
         * @param {registers.ISaveCurrent} message SaveCurrent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveCurrent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveCurrent message from the specified reader or buffer.
         * @function decode
         * @memberof registers.SaveCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {registers.SaveCurrent} SaveCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveCurrent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.registers.SaveCurrent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reg = reader.int32();
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
         * Decodes a SaveCurrent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof registers.SaveCurrent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {registers.SaveCurrent} SaveCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveCurrent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveCurrent message.
         * @function verify
         * @memberof registers.SaveCurrent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveCurrent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reg != null && message.hasOwnProperty("reg"))
                switch (message.reg) {
                default:
                    return "reg: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            return null;
        };

        /**
         * Creates a SaveCurrent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof registers.SaveCurrent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {registers.SaveCurrent} SaveCurrent
         */
        SaveCurrent.fromObject = function fromObject(object) {
            if (object instanceof $root.registers.SaveCurrent)
                return object;
            let message = new $root.registers.SaveCurrent();
            switch (object.reg) {
            default:
                if (typeof object.reg === "number") {
                    message.reg = object.reg;
                    break;
                }
                break;
            case "ENABLE_BALANCING":
            case 0:
                message.reg = 0;
                break;
            case "PITCH_CONTROLLER_PARAMS":
            case 1:
                message.reg = 1;
                break;
            case "PITCH_CONTROLLER_ACTIVE":
            case 2:
                message.reg = 2;
                break;
            case "YAW_CONTROLLER_PARAMS":
            case 3:
                message.reg = 3;
                break;
            case "YAW_CONTROLLER_ACTIVE":
            case 4:
                message.reg = 4;
                break;
            case "PHYSICAL_CHARACTERSTICS":
            case 5:
                message.reg = 5;
                break;
            case "MOTOR_CALIBRATION_LUT":
            case 6:
                message.reg = 6;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SaveCurrent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof registers.SaveCurrent
         * @static
         * @param {registers.SaveCurrent} message SaveCurrent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveCurrent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reg = options.enums === String ? "ENABLE_BALANCING" : 0;
            if (message.reg != null && message.hasOwnProperty("reg"))
                object.reg = options.enums === String ? $root.registers.Register[message.reg] === undefined ? message.reg : $root.registers.Register[message.reg] : message.reg;
            return object;
        };

        /**
         * Converts this SaveCurrent to JSON.
         * @function toJSON
         * @memberof registers.SaveCurrent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveCurrent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveCurrent
         * @function getTypeUrl
         * @memberof registers.SaveCurrent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveCurrent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/registers.SaveCurrent";
        };

        return SaveCurrent;
    })();

    return registers;
})();

export const controllers = $root.controllers = (() => {

    /**
     * Namespace controllers.
     * @name controllers
     * @namespace
     */
    const controllers = {};

    controllers.pitch = (function() {

        /**
         * Namespace pitch.
         * @memberof controllers
         * @namespace
         */
        const pitch = {};

        pitch.Params = (function() {

            /**
             * Properties of a Params.
             * @memberof controllers.pitch
             * @interface IParams
             * @property {controllers.pitch.Params.IPID|null} [pid] Params pid
             */

            /**
             * Constructs a new Params.
             * @memberof controllers.pitch
             * @classdesc Represents a Params.
             * @implements IParams
             * @constructor
             * @param {controllers.pitch.IParams=} [properties] Properties to set
             */
            function Params(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Params pid.
             * @member {controllers.pitch.Params.IPID|null|undefined} pid
             * @memberof controllers.pitch.Params
             * @instance
             */
            Params.prototype.pid = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Params _pid.
             * @member {"pid"|undefined} _pid
             * @memberof controllers.pitch.Params
             * @instance
             */
            Object.defineProperty(Params.prototype, "_pid", {
                get: $util.oneOfGetter($oneOfFields = ["pid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Params instance using the specified properties.
             * @function create
             * @memberof controllers.pitch.Params
             * @static
             * @param {controllers.pitch.IParams=} [properties] Properties to set
             * @returns {controllers.pitch.Params} Params instance
             */
            Params.create = function create(properties) {
                return new Params(properties);
            };

            /**
             * Encodes the specified Params message. Does not implicitly {@link controllers.pitch.Params.verify|verify} messages.
             * @function encode
             * @memberof controllers.pitch.Params
             * @static
             * @param {controllers.pitch.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    $root.controllers.pitch.Params.PID.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link controllers.pitch.Params.verify|verify} messages.
             * @function encodeDelimited
             * @memberof controllers.pitch.Params
             * @static
             * @param {controllers.pitch.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @function decode
             * @memberof controllers.pitch.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {controllers.pitch.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.pitch.Params();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pid = $root.controllers.pitch.Params.PID.decode(reader, reader.uint32());
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
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof controllers.pitch.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {controllers.pitch.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Params message.
             * @function verify
             * @memberof controllers.pitch.Params
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Params.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    properties._pid = 1;
                    {
                        let error = $root.controllers.pitch.Params.PID.verify(message.pid);
                        if (error)
                            return "pid." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof controllers.pitch.Params
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {controllers.pitch.Params} Params
             */
            Params.fromObject = function fromObject(object) {
                if (object instanceof $root.controllers.pitch.Params)
                    return object;
                let message = new $root.controllers.pitch.Params();
                if (object.pid != null) {
                    if (typeof object.pid !== "object")
                        throw TypeError(".controllers.pitch.Params.pid: object expected");
                    message.pid = $root.controllers.pitch.Params.PID.fromObject(object.pid);
                }
                return message;
            };

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @function toObject
             * @memberof controllers.pitch.Params
             * @static
             * @param {controllers.pitch.Params} message Params
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Params.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    object.pid = $root.controllers.pitch.Params.PID.toObject(message.pid, options);
                    if (options.oneofs)
                        object._pid = "pid";
                }
                return object;
            };

            /**
             * Converts this Params to JSON.
             * @function toJSON
             * @memberof controllers.pitch.Params
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Params.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Params
             * @function getTypeUrl
             * @memberof controllers.pitch.Params
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Params.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/controllers.pitch.Params";
            };

            Params.PID = (function() {

                /**
                 * Properties of a PID.
                 * @memberof controllers.pitch.Params
                 * @interface IPID
                 * @property {controllers.IParamsPID|null} [base] PID base
                 * @property {boolean|null} [addGravity] PID addGravity
                 */

                /**
                 * Constructs a new PID.
                 * @memberof controllers.pitch.Params
                 * @classdesc Represents a PID.
                 * @implements IPID
                 * @constructor
                 * @param {controllers.pitch.Params.IPID=} [properties] Properties to set
                 */
                function PID(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PID base.
                 * @member {controllers.IParamsPID|null|undefined} base
                 * @memberof controllers.pitch.Params.PID
                 * @instance
                 */
                PID.prototype.base = null;

                /**
                 * PID addGravity.
                 * @member {boolean} addGravity
                 * @memberof controllers.pitch.Params.PID
                 * @instance
                 */
                PID.prototype.addGravity = false;

                /**
                 * Creates a new PID instance using the specified properties.
                 * @function create
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {controllers.pitch.Params.IPID=} [properties] Properties to set
                 * @returns {controllers.pitch.Params.PID} PID instance
                 */
                PID.create = function create(properties) {
                    return new PID(properties);
                };

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.pitch.Params.PID.verify|verify} messages.
                 * @function encode
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {controllers.pitch.Params.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                        $root.controllers.ParamsPID.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.addGravity != null && Object.hasOwnProperty.call(message, "addGravity"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.addGravity);
                    return writer;
                };

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.pitch.Params.PID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {controllers.pitch.Params.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @function decode
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {controllers.pitch.Params.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.pitch.Params.PID();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.base = $root.controllers.ParamsPID.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.addGravity = reader.bool();
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
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {controllers.pitch.Params.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PID message.
                 * @function verify
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.base != null && message.hasOwnProperty("base")) {
                        let error = $root.controllers.ParamsPID.verify(message.base);
                        if (error)
                            return "base." + error;
                    }
                    if (message.addGravity != null && message.hasOwnProperty("addGravity"))
                        if (typeof message.addGravity !== "boolean")
                            return "addGravity: boolean expected";
                    return null;
                };

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {controllers.pitch.Params.PID} PID
                 */
                PID.fromObject = function fromObject(object) {
                    if (object instanceof $root.controllers.pitch.Params.PID)
                        return object;
                    let message = new $root.controllers.pitch.Params.PID();
                    if (object.base != null) {
                        if (typeof object.base !== "object")
                            throw TypeError(".controllers.pitch.Params.PID.base: object expected");
                        message.base = $root.controllers.ParamsPID.fromObject(object.base);
                    }
                    if (object.addGravity != null)
                        message.addGravity = Boolean(object.addGravity);
                    return message;
                };

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {controllers.pitch.Params.PID} message PID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.base = null;
                        object.addGravity = false;
                    }
                    if (message.base != null && message.hasOwnProperty("base"))
                        object.base = $root.controllers.ParamsPID.toObject(message.base, options);
                    if (message.addGravity != null && message.hasOwnProperty("addGravity"))
                        object.addGravity = message.addGravity;
                    return object;
                };

                /**
                 * Converts this PID to JSON.
                 * @function toJSON
                 * @memberof controllers.pitch.Params.PID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PID
                 * @function getTypeUrl
                 * @memberof controllers.pitch.Params.PID
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/controllers.pitch.Params.PID";
                };

                return PID;
            })();

            return Params;
        })();

        pitch.State = (function() {

            /**
             * Properties of a State.
             * @memberof controllers.pitch
             * @interface IState
             * @property {controllers.pitch.State.IPID|null} [pid] State pid
             */

            /**
             * Constructs a new State.
             * @memberof controllers.pitch
             * @classdesc Represents a State.
             * @implements IState
             * @constructor
             * @param {controllers.pitch.IState=} [properties] Properties to set
             */
            function State(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * State pid.
             * @member {controllers.pitch.State.IPID|null|undefined} pid
             * @memberof controllers.pitch.State
             * @instance
             */
            State.prototype.pid = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * State active.
             * @member {"pid"|undefined} active
             * @memberof controllers.pitch.State
             * @instance
             */
            Object.defineProperty(State.prototype, "active", {
                get: $util.oneOfGetter($oneOfFields = ["pid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new State instance using the specified properties.
             * @function create
             * @memberof controllers.pitch.State
             * @static
             * @param {controllers.pitch.IState=} [properties] Properties to set
             * @returns {controllers.pitch.State} State instance
             */
            State.create = function create(properties) {
                return new State(properties);
            };

            /**
             * Encodes the specified State message. Does not implicitly {@link controllers.pitch.State.verify|verify} messages.
             * @function encode
             * @memberof controllers.pitch.State
             * @static
             * @param {controllers.pitch.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    $root.controllers.pitch.State.PID.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link controllers.pitch.State.verify|verify} messages.
             * @function encodeDelimited
             * @memberof controllers.pitch.State
             * @static
             * @param {controllers.pitch.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a State message from the specified reader or buffer.
             * @function decode
             * @memberof controllers.pitch.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {controllers.pitch.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.pitch.State();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pid = $root.controllers.pitch.State.PID.decode(reader, reader.uint32());
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
             * @memberof controllers.pitch.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {controllers.pitch.State} State
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
             * @memberof controllers.pitch.State
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            State.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    properties.active = 1;
                    {
                        let error = $root.controllers.pitch.State.PID.verify(message.pid);
                        if (error)
                            return "pid." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof controllers.pitch.State
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {controllers.pitch.State} State
             */
            State.fromObject = function fromObject(object) {
                if (object instanceof $root.controllers.pitch.State)
                    return object;
                let message = new $root.controllers.pitch.State();
                if (object.pid != null) {
                    if (typeof object.pid !== "object")
                        throw TypeError(".controllers.pitch.State.pid: object expected");
                    message.pid = $root.controllers.pitch.State.PID.fromObject(object.pid);
                }
                return message;
            };

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @function toObject
             * @memberof controllers.pitch.State
             * @static
             * @param {controllers.pitch.State} message State
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            State.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    object.pid = $root.controllers.pitch.State.PID.toObject(message.pid, options);
                    if (options.oneofs)
                        object.active = "pid";
                }
                return object;
            };

            /**
             * Converts this State to JSON.
             * @function toJSON
             * @memberof controllers.pitch.State
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            State.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for State
             * @function getTypeUrl
             * @memberof controllers.pitch.State
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            State.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/controllers.pitch.State";
            };

            State.PID = (function() {

                /**
                 * Properties of a PID.
                 * @memberof controllers.pitch.State
                 * @interface IPID
                 * @property {controllers.IStatePID|null} [base] PID base
                 */

                /**
                 * Constructs a new PID.
                 * @memberof controllers.pitch.State
                 * @classdesc Represents a PID.
                 * @implements IPID
                 * @constructor
                 * @param {controllers.pitch.State.IPID=} [properties] Properties to set
                 */
                function PID(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PID base.
                 * @member {controllers.IStatePID|null|undefined} base
                 * @memberof controllers.pitch.State.PID
                 * @instance
                 */
                PID.prototype.base = null;

                /**
                 * Creates a new PID instance using the specified properties.
                 * @function create
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {controllers.pitch.State.IPID=} [properties] Properties to set
                 * @returns {controllers.pitch.State.PID} PID instance
                 */
                PID.create = function create(properties) {
                    return new PID(properties);
                };

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.pitch.State.PID.verify|verify} messages.
                 * @function encode
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {controllers.pitch.State.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                        $root.controllers.StatePID.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.pitch.State.PID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {controllers.pitch.State.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @function decode
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {controllers.pitch.State.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.pitch.State.PID();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.base = $root.controllers.StatePID.decode(reader, reader.uint32());
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
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {controllers.pitch.State.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PID message.
                 * @function verify
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.base != null && message.hasOwnProperty("base")) {
                        let error = $root.controllers.StatePID.verify(message.base);
                        if (error)
                            return "base." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {controllers.pitch.State.PID} PID
                 */
                PID.fromObject = function fromObject(object) {
                    if (object instanceof $root.controllers.pitch.State.PID)
                        return object;
                    let message = new $root.controllers.pitch.State.PID();
                    if (object.base != null) {
                        if (typeof object.base !== "object")
                            throw TypeError(".controllers.pitch.State.PID.base: object expected");
                        message.base = $root.controllers.StatePID.fromObject(object.base);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {controllers.pitch.State.PID} message PID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.base = null;
                    if (message.base != null && message.hasOwnProperty("base"))
                        object.base = $root.controllers.StatePID.toObject(message.base, options);
                    return object;
                };

                /**
                 * Converts this PID to JSON.
                 * @function toJSON
                 * @memberof controllers.pitch.State.PID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PID
                 * @function getTypeUrl
                 * @memberof controllers.pitch.State.PID
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/controllers.pitch.State.PID";
                };

                return PID;
            })();

            return State;
        })();

        /**
         * Type enum.
         * @name controllers.pitch.Type
         * @enum {number}
         * @property {number} PID=0 PID value
         */
        pitch.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PID"] = 0;
            return values;
        })();

        return pitch;
    })();

    controllers.ParamsPID = (function() {

        /**
         * Properties of a ParamsPID.
         * @memberof controllers
         * @interface IParamsPID
         * @property {number|null} [kp] ParamsPID kp
         * @property {number|null} [ki] ParamsPID ki
         * @property {number|null} [kd] ParamsPID kd
         * @property {number|null} [kf] ParamsPID kf
         * @property {number|null} [integralZeroThreshold] ParamsPID integralZeroThreshold
         * @property {number|null} [integralSaturationLimit] ParamsPID integralSaturationLimit
         * @property {boolean|null} [resetIntegral] ParamsPID resetIntegral
         */

        /**
         * Constructs a new ParamsPID.
         * @memberof controllers
         * @classdesc Represents a ParamsPID.
         * @implements IParamsPID
         * @constructor
         * @param {controllers.IParamsPID=} [properties] Properties to set
         */
        function ParamsPID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParamsPID kp.
         * @member {number} kp
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.kp = 0;

        /**
         * ParamsPID ki.
         * @member {number} ki
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.ki = 0;

        /**
         * ParamsPID kd.
         * @member {number} kd
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.kd = 0;

        /**
         * ParamsPID kf.
         * @member {number} kf
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.kf = 0;

        /**
         * ParamsPID integralZeroThreshold.
         * @member {number} integralZeroThreshold
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.integralZeroThreshold = 0;

        /**
         * ParamsPID integralSaturationLimit.
         * @member {number} integralSaturationLimit
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.integralSaturationLimit = 0;

        /**
         * ParamsPID resetIntegral.
         * @member {boolean} resetIntegral
         * @memberof controllers.ParamsPID
         * @instance
         */
        ParamsPID.prototype.resetIntegral = false;

        /**
         * Creates a new ParamsPID instance using the specified properties.
         * @function create
         * @memberof controllers.ParamsPID
         * @static
         * @param {controllers.IParamsPID=} [properties] Properties to set
         * @returns {controllers.ParamsPID} ParamsPID instance
         */
        ParamsPID.create = function create(properties) {
            return new ParamsPID(properties);
        };

        /**
         * Encodes the specified ParamsPID message. Does not implicitly {@link controllers.ParamsPID.verify|verify} messages.
         * @function encode
         * @memberof controllers.ParamsPID
         * @static
         * @param {controllers.IParamsPID} message ParamsPID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsPID.encode = function encode(message, writer) {
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
         * Encodes the specified ParamsPID message, length delimited. Does not implicitly {@link controllers.ParamsPID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof controllers.ParamsPID
         * @static
         * @param {controllers.IParamsPID} message ParamsPID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParamsPID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParamsPID message from the specified reader or buffer.
         * @function decode
         * @memberof controllers.ParamsPID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controllers.ParamsPID} ParamsPID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsPID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.ParamsPID();
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
         * Decodes a ParamsPID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof controllers.ParamsPID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {controllers.ParamsPID} ParamsPID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParamsPID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParamsPID message.
         * @function verify
         * @memberof controllers.ParamsPID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParamsPID.verify = function verify(message) {
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
         * Creates a ParamsPID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof controllers.ParamsPID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {controllers.ParamsPID} ParamsPID
         */
        ParamsPID.fromObject = function fromObject(object) {
            if (object instanceof $root.controllers.ParamsPID)
                return object;
            let message = new $root.controllers.ParamsPID();
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
         * Creates a plain object from a ParamsPID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof controllers.ParamsPID
         * @static
         * @param {controllers.ParamsPID} message ParamsPID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParamsPID.toObject = function toObject(message, options) {
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
         * Converts this ParamsPID to JSON.
         * @function toJSON
         * @memberof controllers.ParamsPID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParamsPID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ParamsPID
         * @function getTypeUrl
         * @memberof controllers.ParamsPID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ParamsPID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/controllers.ParamsPID";
        };

        return ParamsPID;
    })();

    controllers.StatePID = (function() {

        /**
         * Properties of a StatePID.
         * @memberof controllers
         * @interface IStatePID
         * @property {number|null} [error] StatePID error
         * @property {number|null} [integral] StatePID integral
         * @property {number|null} [derivative] StatePID derivative
         * @property {number|null} [output] StatePID output
         * @property {boolean|null} [saturated] StatePID saturated
         */

        /**
         * Constructs a new StatePID.
         * @memberof controllers
         * @classdesc Represents a StatePID.
         * @implements IStatePID
         * @constructor
         * @param {controllers.IStatePID=} [properties] Properties to set
         */
        function StatePID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatePID error.
         * @member {number} error
         * @memberof controllers.StatePID
         * @instance
         */
        StatePID.prototype.error = 0;

        /**
         * StatePID integral.
         * @member {number} integral
         * @memberof controllers.StatePID
         * @instance
         */
        StatePID.prototype.integral = 0;

        /**
         * StatePID derivative.
         * @member {number} derivative
         * @memberof controllers.StatePID
         * @instance
         */
        StatePID.prototype.derivative = 0;

        /**
         * StatePID output.
         * @member {number} output
         * @memberof controllers.StatePID
         * @instance
         */
        StatePID.prototype.output = 0;

        /**
         * StatePID saturated.
         * @member {boolean} saturated
         * @memberof controllers.StatePID
         * @instance
         */
        StatePID.prototype.saturated = false;

        /**
         * Creates a new StatePID instance using the specified properties.
         * @function create
         * @memberof controllers.StatePID
         * @static
         * @param {controllers.IStatePID=} [properties] Properties to set
         * @returns {controllers.StatePID} StatePID instance
         */
        StatePID.create = function create(properties) {
            return new StatePID(properties);
        };

        /**
         * Encodes the specified StatePID message. Does not implicitly {@link controllers.StatePID.verify|verify} messages.
         * @function encode
         * @memberof controllers.StatePID
         * @static
         * @param {controllers.IStatePID} message StatePID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatePID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.error);
            if (message.integral != null && Object.hasOwnProperty.call(message, "integral"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.integral);
            if (message.derivative != null && Object.hasOwnProperty.call(message, "derivative"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.derivative);
            if (message.output != null && Object.hasOwnProperty.call(message, "output"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.output);
            if (message.saturated != null && Object.hasOwnProperty.call(message, "saturated"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.saturated);
            return writer;
        };

        /**
         * Encodes the specified StatePID message, length delimited. Does not implicitly {@link controllers.StatePID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof controllers.StatePID
         * @static
         * @param {controllers.IStatePID} message StatePID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatePID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StatePID message from the specified reader or buffer.
         * @function decode
         * @memberof controllers.StatePID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {controllers.StatePID} StatePID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatePID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.StatePID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.error = reader.float();
                        break;
                    }
                case 2: {
                        message.integral = reader.float();
                        break;
                    }
                case 3: {
                        message.derivative = reader.float();
                        break;
                    }
                case 4: {
                        message.output = reader.float();
                        break;
                    }
                case 5: {
                        message.saturated = reader.bool();
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
         * Decodes a StatePID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof controllers.StatePID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {controllers.StatePID} StatePID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatePID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StatePID message.
         * @function verify
         * @memberof controllers.StatePID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StatePID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (typeof message.error !== "number")
                    return "error: number expected";
            if (message.integral != null && message.hasOwnProperty("integral"))
                if (typeof message.integral !== "number")
                    return "integral: number expected";
            if (message.derivative != null && message.hasOwnProperty("derivative"))
                if (typeof message.derivative !== "number")
                    return "derivative: number expected";
            if (message.output != null && message.hasOwnProperty("output"))
                if (typeof message.output !== "number")
                    return "output: number expected";
            if (message.saturated != null && message.hasOwnProperty("saturated"))
                if (typeof message.saturated !== "boolean")
                    return "saturated: boolean expected";
            return null;
        };

        /**
         * Creates a StatePID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof controllers.StatePID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {controllers.StatePID} StatePID
         */
        StatePID.fromObject = function fromObject(object) {
            if (object instanceof $root.controllers.StatePID)
                return object;
            let message = new $root.controllers.StatePID();
            if (object.error != null)
                message.error = Number(object.error);
            if (object.integral != null)
                message.integral = Number(object.integral);
            if (object.derivative != null)
                message.derivative = Number(object.derivative);
            if (object.output != null)
                message.output = Number(object.output);
            if (object.saturated != null)
                message.saturated = Boolean(object.saturated);
            return message;
        };

        /**
         * Creates a plain object from a StatePID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof controllers.StatePID
         * @static
         * @param {controllers.StatePID} message StatePID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StatePID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.error = 0;
                object.integral = 0;
                object.derivative = 0;
                object.output = 0;
                object.saturated = false;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.json && !isFinite(message.error) ? String(message.error) : message.error;
            if (message.integral != null && message.hasOwnProperty("integral"))
                object.integral = options.json && !isFinite(message.integral) ? String(message.integral) : message.integral;
            if (message.derivative != null && message.hasOwnProperty("derivative"))
                object.derivative = options.json && !isFinite(message.derivative) ? String(message.derivative) : message.derivative;
            if (message.output != null && message.hasOwnProperty("output"))
                object.output = options.json && !isFinite(message.output) ? String(message.output) : message.output;
            if (message.saturated != null && message.hasOwnProperty("saturated"))
                object.saturated = message.saturated;
            return object;
        };

        /**
         * Converts this StatePID to JSON.
         * @function toJSON
         * @memberof controllers.StatePID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatePID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StatePID
         * @function getTypeUrl
         * @memberof controllers.StatePID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StatePID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/controllers.StatePID";
        };

        return StatePID;
    })();

    controllers.yaw = (function() {

        /**
         * Namespace yaw.
         * @memberof controllers
         * @namespace
         */
        const yaw = {};

        yaw.Params = (function() {

            /**
             * Properties of a Params.
             * @memberof controllers.yaw
             * @interface IParams
             * @property {controllers.yaw.Params.IPID|null} [pid] Params pid
             */

            /**
             * Constructs a new Params.
             * @memberof controllers.yaw
             * @classdesc Represents a Params.
             * @implements IParams
             * @constructor
             * @param {controllers.yaw.IParams=} [properties] Properties to set
             */
            function Params(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Params pid.
             * @member {controllers.yaw.Params.IPID|null|undefined} pid
             * @memberof controllers.yaw.Params
             * @instance
             */
            Params.prototype.pid = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Params _pid.
             * @member {"pid"|undefined} _pid
             * @memberof controllers.yaw.Params
             * @instance
             */
            Object.defineProperty(Params.prototype, "_pid", {
                get: $util.oneOfGetter($oneOfFields = ["pid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Params instance using the specified properties.
             * @function create
             * @memberof controllers.yaw.Params
             * @static
             * @param {controllers.yaw.IParams=} [properties] Properties to set
             * @returns {controllers.yaw.Params} Params instance
             */
            Params.create = function create(properties) {
                return new Params(properties);
            };

            /**
             * Encodes the specified Params message. Does not implicitly {@link controllers.yaw.Params.verify|verify} messages.
             * @function encode
             * @memberof controllers.yaw.Params
             * @static
             * @param {controllers.yaw.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    $root.controllers.yaw.Params.PID.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link controllers.yaw.Params.verify|verify} messages.
             * @function encodeDelimited
             * @memberof controllers.yaw.Params
             * @static
             * @param {controllers.yaw.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @function decode
             * @memberof controllers.yaw.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {controllers.yaw.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.yaw.Params();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pid = $root.controllers.yaw.Params.PID.decode(reader, reader.uint32());
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
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof controllers.yaw.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {controllers.yaw.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Params message.
             * @function verify
             * @memberof controllers.yaw.Params
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Params.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    properties._pid = 1;
                    {
                        let error = $root.controllers.yaw.Params.PID.verify(message.pid);
                        if (error)
                            return "pid." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof controllers.yaw.Params
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {controllers.yaw.Params} Params
             */
            Params.fromObject = function fromObject(object) {
                if (object instanceof $root.controllers.yaw.Params)
                    return object;
                let message = new $root.controllers.yaw.Params();
                if (object.pid != null) {
                    if (typeof object.pid !== "object")
                        throw TypeError(".controllers.yaw.Params.pid: object expected");
                    message.pid = $root.controllers.yaw.Params.PID.fromObject(object.pid);
                }
                return message;
            };

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @function toObject
             * @memberof controllers.yaw.Params
             * @static
             * @param {controllers.yaw.Params} message Params
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Params.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    object.pid = $root.controllers.yaw.Params.PID.toObject(message.pid, options);
                    if (options.oneofs)
                        object._pid = "pid";
                }
                return object;
            };

            /**
             * Converts this Params to JSON.
             * @function toJSON
             * @memberof controllers.yaw.Params
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Params.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Params
             * @function getTypeUrl
             * @memberof controllers.yaw.Params
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Params.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/controllers.yaw.Params";
            };

            Params.PID = (function() {

                /**
                 * Properties of a PID.
                 * @memberof controllers.yaw.Params
                 * @interface IPID
                 * @property {controllers.IParamsPID|null} [base] PID base
                 */

                /**
                 * Constructs a new PID.
                 * @memberof controllers.yaw.Params
                 * @classdesc Represents a PID.
                 * @implements IPID
                 * @constructor
                 * @param {controllers.yaw.Params.IPID=} [properties] Properties to set
                 */
                function PID(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PID base.
                 * @member {controllers.IParamsPID|null|undefined} base
                 * @memberof controllers.yaw.Params.PID
                 * @instance
                 */
                PID.prototype.base = null;

                /**
                 * Creates a new PID instance using the specified properties.
                 * @function create
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {controllers.yaw.Params.IPID=} [properties] Properties to set
                 * @returns {controllers.yaw.Params.PID} PID instance
                 */
                PID.create = function create(properties) {
                    return new PID(properties);
                };

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.yaw.Params.PID.verify|verify} messages.
                 * @function encode
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {controllers.yaw.Params.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                        $root.controllers.ParamsPID.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.yaw.Params.PID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {controllers.yaw.Params.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @function decode
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {controllers.yaw.Params.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.yaw.Params.PID();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.base = $root.controllers.ParamsPID.decode(reader, reader.uint32());
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
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {controllers.yaw.Params.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PID message.
                 * @function verify
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.base != null && message.hasOwnProperty("base")) {
                        let error = $root.controllers.ParamsPID.verify(message.base);
                        if (error)
                            return "base." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {controllers.yaw.Params.PID} PID
                 */
                PID.fromObject = function fromObject(object) {
                    if (object instanceof $root.controllers.yaw.Params.PID)
                        return object;
                    let message = new $root.controllers.yaw.Params.PID();
                    if (object.base != null) {
                        if (typeof object.base !== "object")
                            throw TypeError(".controllers.yaw.Params.PID.base: object expected");
                        message.base = $root.controllers.ParamsPID.fromObject(object.base);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {controllers.yaw.Params.PID} message PID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.base = null;
                    if (message.base != null && message.hasOwnProperty("base"))
                        object.base = $root.controllers.ParamsPID.toObject(message.base, options);
                    return object;
                };

                /**
                 * Converts this PID to JSON.
                 * @function toJSON
                 * @memberof controllers.yaw.Params.PID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PID
                 * @function getTypeUrl
                 * @memberof controllers.yaw.Params.PID
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/controllers.yaw.Params.PID";
                };

                return PID;
            })();

            return Params;
        })();

        yaw.State = (function() {

            /**
             * Properties of a State.
             * @memberof controllers.yaw
             * @interface IState
             * @property {controllers.yaw.State.IPID|null} [pid] State pid
             */

            /**
             * Constructs a new State.
             * @memberof controllers.yaw
             * @classdesc Represents a State.
             * @implements IState
             * @constructor
             * @param {controllers.yaw.IState=} [properties] Properties to set
             */
            function State(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * State pid.
             * @member {controllers.yaw.State.IPID|null|undefined} pid
             * @memberof controllers.yaw.State
             * @instance
             */
            State.prototype.pid = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * State active.
             * @member {"pid"|undefined} active
             * @memberof controllers.yaw.State
             * @instance
             */
            Object.defineProperty(State.prototype, "active", {
                get: $util.oneOfGetter($oneOfFields = ["pid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new State instance using the specified properties.
             * @function create
             * @memberof controllers.yaw.State
             * @static
             * @param {controllers.yaw.IState=} [properties] Properties to set
             * @returns {controllers.yaw.State} State instance
             */
            State.create = function create(properties) {
                return new State(properties);
            };

            /**
             * Encodes the specified State message. Does not implicitly {@link controllers.yaw.State.verify|verify} messages.
             * @function encode
             * @memberof controllers.yaw.State
             * @static
             * @param {controllers.yaw.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                    $root.controllers.yaw.State.PID.encode(message.pid, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link controllers.yaw.State.verify|verify} messages.
             * @function encodeDelimited
             * @memberof controllers.yaw.State
             * @static
             * @param {controllers.yaw.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a State message from the specified reader or buffer.
             * @function decode
             * @memberof controllers.yaw.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {controllers.yaw.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.yaw.State();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.pid = $root.controllers.yaw.State.PID.decode(reader, reader.uint32());
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
             * @memberof controllers.yaw.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {controllers.yaw.State} State
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
             * @memberof controllers.yaw.State
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            State.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    properties.active = 1;
                    {
                        let error = $root.controllers.yaw.State.PID.verify(message.pid);
                        if (error)
                            return "pid." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof controllers.yaw.State
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {controllers.yaw.State} State
             */
            State.fromObject = function fromObject(object) {
                if (object instanceof $root.controllers.yaw.State)
                    return object;
                let message = new $root.controllers.yaw.State();
                if (object.pid != null) {
                    if (typeof object.pid !== "object")
                        throw TypeError(".controllers.yaw.State.pid: object expected");
                    message.pid = $root.controllers.yaw.State.PID.fromObject(object.pid);
                }
                return message;
            };

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @function toObject
             * @memberof controllers.yaw.State
             * @static
             * @param {controllers.yaw.State} message State
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            State.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (message.pid != null && message.hasOwnProperty("pid")) {
                    object.pid = $root.controllers.yaw.State.PID.toObject(message.pid, options);
                    if (options.oneofs)
                        object.active = "pid";
                }
                return object;
            };

            /**
             * Converts this State to JSON.
             * @function toJSON
             * @memberof controllers.yaw.State
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            State.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for State
             * @function getTypeUrl
             * @memberof controllers.yaw.State
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            State.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/controllers.yaw.State";
            };

            State.PID = (function() {

                /**
                 * Properties of a PID.
                 * @memberof controllers.yaw.State
                 * @interface IPID
                 * @property {controllers.IStatePID|null} [base] PID base
                 */

                /**
                 * Constructs a new PID.
                 * @memberof controllers.yaw.State
                 * @classdesc Represents a PID.
                 * @implements IPID
                 * @constructor
                 * @param {controllers.yaw.State.IPID=} [properties] Properties to set
                 */
                function PID(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PID base.
                 * @member {controllers.IStatePID|null|undefined} base
                 * @memberof controllers.yaw.State.PID
                 * @instance
                 */
                PID.prototype.base = null;

                /**
                 * Creates a new PID instance using the specified properties.
                 * @function create
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {controllers.yaw.State.IPID=} [properties] Properties to set
                 * @returns {controllers.yaw.State.PID} PID instance
                 */
                PID.create = function create(properties) {
                    return new PID(properties);
                };

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.yaw.State.PID.verify|verify} messages.
                 * @function encode
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {controllers.yaw.State.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                        $root.controllers.StatePID.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.yaw.State.PID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {controllers.yaw.State.IPID} message PID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @function decode
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {controllers.yaw.State.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.controllers.yaw.State.PID();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.base = $root.controllers.StatePID.decode(reader, reader.uint32());
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
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {controllers.yaw.State.PID} PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PID message.
                 * @function verify
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.base != null && message.hasOwnProperty("base")) {
                        let error = $root.controllers.StatePID.verify(message.base);
                        if (error)
                            return "base." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {controllers.yaw.State.PID} PID
                 */
                PID.fromObject = function fromObject(object) {
                    if (object instanceof $root.controllers.yaw.State.PID)
                        return object;
                    let message = new $root.controllers.yaw.State.PID();
                    if (object.base != null) {
                        if (typeof object.base !== "object")
                            throw TypeError(".controllers.yaw.State.PID.base: object expected");
                        message.base = $root.controllers.StatePID.fromObject(object.base);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {controllers.yaw.State.PID} message PID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.base = null;
                    if (message.base != null && message.hasOwnProperty("base"))
                        object.base = $root.controllers.StatePID.toObject(message.base, options);
                    return object;
                };

                /**
                 * Converts this PID to JSON.
                 * @function toJSON
                 * @memberof controllers.yaw.State.PID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PID
                 * @function getTypeUrl
                 * @memberof controllers.yaw.State.PID
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/controllers.yaw.State.PID";
                };

                return PID;
            })();

            return State;
        })();

        /**
         * Type enum.
         * @name controllers.yaw.Type
         * @enum {number}
         * @property {number} PID=0 PID value
         */
        yaw.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PID"] = 0;
            return values;
        })();

        return yaw;
    })();

    return controllers;
})();

export const physical = $root.physical = (() => {

    /**
     * Namespace physical.
     * @name physical
     * @namespace
     */
    const physical = {};

    physical.Characteristics = (function() {

        /**
         * Properties of a Characteristics.
         * @memberof physical
         * @interface ICharacteristics
         * @property {number|null} [wheelRadius] Characteristics wheelRadius
         * @property {number|null} [wheelBase] Characteristics wheelBase
         * @property {number|null} [motorMaxSpeed] Characteristics motorMaxSpeed
         * @property {number|null} [gravity] Characteristics gravity
         * @property {number|null} [torqueLength] Characteristics torqueLength
         */

        /**
         * Constructs a new Characteristics.
         * @memberof physical
         * @classdesc Represents a Characteristics.
         * @implements ICharacteristics
         * @constructor
         * @param {physical.ICharacteristics=} [properties] Properties to set
         */
        function Characteristics(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Characteristics wheelRadius.
         * @member {number} wheelRadius
         * @memberof physical.Characteristics
         * @instance
         */
        Characteristics.prototype.wheelRadius = 0;

        /**
         * Characteristics wheelBase.
         * @member {number} wheelBase
         * @memberof physical.Characteristics
         * @instance
         */
        Characteristics.prototype.wheelBase = 0;

        /**
         * Characteristics motorMaxSpeed.
         * @member {number} motorMaxSpeed
         * @memberof physical.Characteristics
         * @instance
         */
        Characteristics.prototype.motorMaxSpeed = 0;

        /**
         * Characteristics gravity.
         * @member {number} gravity
         * @memberof physical.Characteristics
         * @instance
         */
        Characteristics.prototype.gravity = 0;

        /**
         * Characteristics torqueLength.
         * @member {number} torqueLength
         * @memberof physical.Characteristics
         * @instance
         */
        Characteristics.prototype.torqueLength = 0;

        /**
         * Creates a new Characteristics instance using the specified properties.
         * @function create
         * @memberof physical.Characteristics
         * @static
         * @param {physical.ICharacteristics=} [properties] Properties to set
         * @returns {physical.Characteristics} Characteristics instance
         */
        Characteristics.create = function create(properties) {
            return new Characteristics(properties);
        };

        /**
         * Encodes the specified Characteristics message. Does not implicitly {@link physical.Characteristics.verify|verify} messages.
         * @function encode
         * @memberof physical.Characteristics
         * @static
         * @param {physical.ICharacteristics} message Characteristics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Characteristics.encode = function encode(message, writer) {
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
         * Encodes the specified Characteristics message, length delimited. Does not implicitly {@link physical.Characteristics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof physical.Characteristics
         * @static
         * @param {physical.ICharacteristics} message Characteristics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Characteristics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Characteristics message from the specified reader or buffer.
         * @function decode
         * @memberof physical.Characteristics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {physical.Characteristics} Characteristics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Characteristics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.physical.Characteristics();
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
         * Decodes a Characteristics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof physical.Characteristics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {physical.Characteristics} Characteristics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Characteristics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Characteristics message.
         * @function verify
         * @memberof physical.Characteristics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Characteristics.verify = function verify(message) {
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
         * Creates a Characteristics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof physical.Characteristics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {physical.Characteristics} Characteristics
         */
        Characteristics.fromObject = function fromObject(object) {
            if (object instanceof $root.physical.Characteristics)
                return object;
            let message = new $root.physical.Characteristics();
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
         * Creates a plain object from a Characteristics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof physical.Characteristics
         * @static
         * @param {physical.Characteristics} message Characteristics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Characteristics.toObject = function toObject(message, options) {
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
         * Converts this Characteristics to JSON.
         * @function toJSON
         * @memberof physical.Characteristics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Characteristics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Characteristics
         * @function getTypeUrl
         * @memberof physical.Characteristics
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Characteristics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/physical.Characteristics";
        };

        return Characteristics;
    })();

    return physical;
})();

export const motor_calib = $root.motor_calib = (() => {

    /**
     * Namespace motor_calib.
     * @name motor_calib
     * @namespace
     */
    const motor_calib = {};

    motor_calib.Measurements = (function() {

        /**
         * Properties of a Measurements.
         * @memberof motor_calib
         * @interface IMeasurements
         * @property {Array.<number>|null} [pwm] Measurements pwm
         * @property {Array.<number>|null} [speedL] Measurements speedL
         * @property {Array.<number>|null} [speedR] Measurements speedR
         */

        /**
         * Constructs a new Measurements.
         * @memberof motor_calib
         * @classdesc Represents a Measurements.
         * @implements IMeasurements
         * @constructor
         * @param {motor_calib.IMeasurements=} [properties] Properties to set
         */
        function Measurements(properties) {
            this.pwm = [];
            this.speedL = [];
            this.speedR = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Measurements pwm.
         * @member {Array.<number>} pwm
         * @memberof motor_calib.Measurements
         * @instance
         */
        Measurements.prototype.pwm = $util.emptyArray;

        /**
         * Measurements speedL.
         * @member {Array.<number>} speedL
         * @memberof motor_calib.Measurements
         * @instance
         */
        Measurements.prototype.speedL = $util.emptyArray;

        /**
         * Measurements speedR.
         * @member {Array.<number>} speedR
         * @memberof motor_calib.Measurements
         * @instance
         */
        Measurements.prototype.speedR = $util.emptyArray;

        /**
         * Creates a new Measurements instance using the specified properties.
         * @function create
         * @memberof motor_calib.Measurements
         * @static
         * @param {motor_calib.IMeasurements=} [properties] Properties to set
         * @returns {motor_calib.Measurements} Measurements instance
         */
        Measurements.create = function create(properties) {
            return new Measurements(properties);
        };

        /**
         * Encodes the specified Measurements message. Does not implicitly {@link motor_calib.Measurements.verify|verify} messages.
         * @function encode
         * @memberof motor_calib.Measurements
         * @static
         * @param {motor_calib.IMeasurements} message Measurements message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Measurements.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pwm != null && message.pwm.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.pwm.length; ++i)
                    writer.uint32(message.pwm[i]);
                writer.ldelim();
            }
            if (message.speedL != null && message.speedL.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.speedL.length; ++i)
                    writer.float(message.speedL[i]);
                writer.ldelim();
            }
            if (message.speedR != null && message.speedR.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.speedR.length; ++i)
                    writer.float(message.speedR[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Measurements message, length delimited. Does not implicitly {@link motor_calib.Measurements.verify|verify} messages.
         * @function encodeDelimited
         * @memberof motor_calib.Measurements
         * @static
         * @param {motor_calib.IMeasurements} message Measurements message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Measurements.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Measurements message from the specified reader or buffer.
         * @function decode
         * @memberof motor_calib.Measurements
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {motor_calib.Measurements} Measurements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Measurements.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.motor_calib.Measurements();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.pwm && message.pwm.length))
                            message.pwm = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pwm.push(reader.uint32());
                        } else
                            message.pwm.push(reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.speedL && message.speedL.length))
                            message.speedL = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.speedL.push(reader.float());
                        } else
                            message.speedL.push(reader.float());
                        break;
                    }
                case 3: {
                        if (!(message.speedR && message.speedR.length))
                            message.speedR = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.speedR.push(reader.float());
                        } else
                            message.speedR.push(reader.float());
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
         * Decodes a Measurements message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof motor_calib.Measurements
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {motor_calib.Measurements} Measurements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Measurements.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Measurements message.
         * @function verify
         * @memberof motor_calib.Measurements
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Measurements.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pwm != null && message.hasOwnProperty("pwm")) {
                if (!Array.isArray(message.pwm))
                    return "pwm: array expected";
                for (let i = 0; i < message.pwm.length; ++i)
                    if (!$util.isInteger(message.pwm[i]))
                        return "pwm: integer[] expected";
            }
            if (message.speedL != null && message.hasOwnProperty("speedL")) {
                if (!Array.isArray(message.speedL))
                    return "speedL: array expected";
                for (let i = 0; i < message.speedL.length; ++i)
                    if (typeof message.speedL[i] !== "number")
                        return "speedL: number[] expected";
            }
            if (message.speedR != null && message.hasOwnProperty("speedR")) {
                if (!Array.isArray(message.speedR))
                    return "speedR: array expected";
                for (let i = 0; i < message.speedR.length; ++i)
                    if (typeof message.speedR[i] !== "number")
                        return "speedR: number[] expected";
            }
            return null;
        };

        /**
         * Creates a Measurements message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof motor_calib.Measurements
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {motor_calib.Measurements} Measurements
         */
        Measurements.fromObject = function fromObject(object) {
            if (object instanceof $root.motor_calib.Measurements)
                return object;
            let message = new $root.motor_calib.Measurements();
            if (object.pwm) {
                if (!Array.isArray(object.pwm))
                    throw TypeError(".motor_calib.Measurements.pwm: array expected");
                message.pwm = [];
                for (let i = 0; i < object.pwm.length; ++i)
                    message.pwm[i] = object.pwm[i] >>> 0;
            }
            if (object.speedL) {
                if (!Array.isArray(object.speedL))
                    throw TypeError(".motor_calib.Measurements.speedL: array expected");
                message.speedL = [];
                for (let i = 0; i < object.speedL.length; ++i)
                    message.speedL[i] = Number(object.speedL[i]);
            }
            if (object.speedR) {
                if (!Array.isArray(object.speedR))
                    throw TypeError(".motor_calib.Measurements.speedR: array expected");
                message.speedR = [];
                for (let i = 0; i < object.speedR.length; ++i)
                    message.speedR[i] = Number(object.speedR[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Measurements message. Also converts values to other types if specified.
         * @function toObject
         * @memberof motor_calib.Measurements
         * @static
         * @param {motor_calib.Measurements} message Measurements
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Measurements.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.pwm = [];
                object.speedL = [];
                object.speedR = [];
            }
            if (message.pwm && message.pwm.length) {
                object.pwm = [];
                for (let j = 0; j < message.pwm.length; ++j)
                    object.pwm[j] = message.pwm[j];
            }
            if (message.speedL && message.speedL.length) {
                object.speedL = [];
                for (let j = 0; j < message.speedL.length; ++j)
                    object.speedL[j] = options.json && !isFinite(message.speedL[j]) ? String(message.speedL[j]) : message.speedL[j];
            }
            if (message.speedR && message.speedR.length) {
                object.speedR = [];
                for (let j = 0; j < message.speedR.length; ++j)
                    object.speedR[j] = options.json && !isFinite(message.speedR[j]) ? String(message.speedR[j]) : message.speedR[j];
            }
            return object;
        };

        /**
         * Converts this Measurements to JSON.
         * @function toJSON
         * @memberof motor_calib.Measurements
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Measurements.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Measurements
         * @function getTypeUrl
         * @memberof motor_calib.Measurements
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Measurements.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/motor_calib.Measurements";
        };

        return Measurements;
    })();

    motor_calib.LUT = (function() {

        /**
         * Properties of a LUT.
         * @memberof motor_calib
         * @interface ILUT
         * @property {Array.<number>|null} [rpm] LUT rpm
         * @property {Array.<number>|null} [pwmL] LUT pwmL
         * @property {Array.<number>|null} [pwmR] LUT pwmR
         */

        /**
         * Constructs a new LUT.
         * @memberof motor_calib
         * @classdesc Represents a LUT.
         * @implements ILUT
         * @constructor
         * @param {motor_calib.ILUT=} [properties] Properties to set
         */
        function LUT(properties) {
            this.rpm = [];
            this.pwmL = [];
            this.pwmR = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LUT rpm.
         * @member {Array.<number>} rpm
         * @memberof motor_calib.LUT
         * @instance
         */
        LUT.prototype.rpm = $util.emptyArray;

        /**
         * LUT pwmL.
         * @member {Array.<number>} pwmL
         * @memberof motor_calib.LUT
         * @instance
         */
        LUT.prototype.pwmL = $util.emptyArray;

        /**
         * LUT pwmR.
         * @member {Array.<number>} pwmR
         * @memberof motor_calib.LUT
         * @instance
         */
        LUT.prototype.pwmR = $util.emptyArray;

        /**
         * Creates a new LUT instance using the specified properties.
         * @function create
         * @memberof motor_calib.LUT
         * @static
         * @param {motor_calib.ILUT=} [properties] Properties to set
         * @returns {motor_calib.LUT} LUT instance
         */
        LUT.create = function create(properties) {
            return new LUT(properties);
        };

        /**
         * Encodes the specified LUT message. Does not implicitly {@link motor_calib.LUT.verify|verify} messages.
         * @function encode
         * @memberof motor_calib.LUT
         * @static
         * @param {motor_calib.ILUT} message LUT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LUT.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rpm != null && message.rpm.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.rpm.length; ++i)
                    writer.sint32(message.rpm[i]);
                writer.ldelim();
            }
            if (message.pwmL != null && message.pwmL.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.pwmL.length; ++i)
                    writer.uint32(message.pwmL[i]);
                writer.ldelim();
            }
            if (message.pwmR != null && message.pwmR.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.pwmR.length; ++i)
                    writer.uint32(message.pwmR[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified LUT message, length delimited. Does not implicitly {@link motor_calib.LUT.verify|verify} messages.
         * @function encodeDelimited
         * @memberof motor_calib.LUT
         * @static
         * @param {motor_calib.ILUT} message LUT message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LUT.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LUT message from the specified reader or buffer.
         * @function decode
         * @memberof motor_calib.LUT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {motor_calib.LUT} LUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LUT.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.motor_calib.LUT();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.rpm && message.rpm.length))
                            message.rpm = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.rpm.push(reader.sint32());
                        } else
                            message.rpm.push(reader.sint32());
                        break;
                    }
                case 2: {
                        if (!(message.pwmL && message.pwmL.length))
                            message.pwmL = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pwmL.push(reader.uint32());
                        } else
                            message.pwmL.push(reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.pwmR && message.pwmR.length))
                            message.pwmR = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pwmR.push(reader.uint32());
                        } else
                            message.pwmR.push(reader.uint32());
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
         * Decodes a LUT message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof motor_calib.LUT
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {motor_calib.LUT} LUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LUT.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LUT message.
         * @function verify
         * @memberof motor_calib.LUT
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LUT.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rpm != null && message.hasOwnProperty("rpm")) {
                if (!Array.isArray(message.rpm))
                    return "rpm: array expected";
                for (let i = 0; i < message.rpm.length; ++i)
                    if (!$util.isInteger(message.rpm[i]))
                        return "rpm: integer[] expected";
            }
            if (message.pwmL != null && message.hasOwnProperty("pwmL")) {
                if (!Array.isArray(message.pwmL))
                    return "pwmL: array expected";
                for (let i = 0; i < message.pwmL.length; ++i)
                    if (!$util.isInteger(message.pwmL[i]))
                        return "pwmL: integer[] expected";
            }
            if (message.pwmR != null && message.hasOwnProperty("pwmR")) {
                if (!Array.isArray(message.pwmR))
                    return "pwmR: array expected";
                for (let i = 0; i < message.pwmR.length; ++i)
                    if (!$util.isInteger(message.pwmR[i]))
                        return "pwmR: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a LUT message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof motor_calib.LUT
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {motor_calib.LUT} LUT
         */
        LUT.fromObject = function fromObject(object) {
            if (object instanceof $root.motor_calib.LUT)
                return object;
            let message = new $root.motor_calib.LUT();
            if (object.rpm) {
                if (!Array.isArray(object.rpm))
                    throw TypeError(".motor_calib.LUT.rpm: array expected");
                message.rpm = [];
                for (let i = 0; i < object.rpm.length; ++i)
                    message.rpm[i] = object.rpm[i] | 0;
            }
            if (object.pwmL) {
                if (!Array.isArray(object.pwmL))
                    throw TypeError(".motor_calib.LUT.pwmL: array expected");
                message.pwmL = [];
                for (let i = 0; i < object.pwmL.length; ++i)
                    message.pwmL[i] = object.pwmL[i] >>> 0;
            }
            if (object.pwmR) {
                if (!Array.isArray(object.pwmR))
                    throw TypeError(".motor_calib.LUT.pwmR: array expected");
                message.pwmR = [];
                for (let i = 0; i < object.pwmR.length; ++i)
                    message.pwmR[i] = object.pwmR[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LUT message. Also converts values to other types if specified.
         * @function toObject
         * @memberof motor_calib.LUT
         * @static
         * @param {motor_calib.LUT} message LUT
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LUT.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.rpm = [];
                object.pwmL = [];
                object.pwmR = [];
            }
            if (message.rpm && message.rpm.length) {
                object.rpm = [];
                for (let j = 0; j < message.rpm.length; ++j)
                    object.rpm[j] = message.rpm[j];
            }
            if (message.pwmL && message.pwmL.length) {
                object.pwmL = [];
                for (let j = 0; j < message.pwmL.length; ++j)
                    object.pwmL[j] = message.pwmL[j];
            }
            if (message.pwmR && message.pwmR.length) {
                object.pwmR = [];
                for (let j = 0; j < message.pwmR.length; ++j)
                    object.pwmR[j] = message.pwmR[j];
            }
            return object;
        };

        /**
         * Converts this LUT to JSON.
         * @function toJSON
         * @memberof motor_calib.LUT
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LUT.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LUT
         * @function getTypeUrl
         * @memberof motor_calib.LUT
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LUT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/motor_calib.LUT";
        };

        return LUT;
    })();

    motor_calib.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof motor_calib
         * @interface IResult
         * @property {motor_calib.IMeasurements|null} [measurements] Result measurements
         * @property {motor_calib.ILUT|null} [lut] Result lut
         */

        /**
         * Constructs a new Result.
         * @memberof motor_calib
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {motor_calib.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result measurements.
         * @member {motor_calib.IMeasurements|null|undefined} measurements
         * @memberof motor_calib.Result
         * @instance
         */
        Result.prototype.measurements = null;

        /**
         * Result lut.
         * @member {motor_calib.ILUT|null|undefined} lut
         * @memberof motor_calib.Result
         * @instance
         */
        Result.prototype.lut = null;

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof motor_calib.Result
         * @static
         * @param {motor_calib.IResult=} [properties] Properties to set
         * @returns {motor_calib.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link motor_calib.Result.verify|verify} messages.
         * @function encode
         * @memberof motor_calib.Result
         * @static
         * @param {motor_calib.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.measurements != null && Object.hasOwnProperty.call(message, "measurements"))
                $root.motor_calib.Measurements.encode(message.measurements, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lut != null && Object.hasOwnProperty.call(message, "lut"))
                $root.motor_calib.LUT.encode(message.lut, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link motor_calib.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof motor_calib.Result
         * @static
         * @param {motor_calib.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof motor_calib.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {motor_calib.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.motor_calib.Result();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.measurements = $root.motor_calib.Measurements.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.lut = $root.motor_calib.LUT.decode(reader, reader.uint32());
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
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof motor_calib.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {motor_calib.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof motor_calib.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.measurements != null && message.hasOwnProperty("measurements")) {
                let error = $root.motor_calib.Measurements.verify(message.measurements);
                if (error)
                    return "measurements." + error;
            }
            if (message.lut != null && message.hasOwnProperty("lut")) {
                let error = $root.motor_calib.LUT.verify(message.lut);
                if (error)
                    return "lut." + error;
            }
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof motor_calib.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {motor_calib.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.motor_calib.Result)
                return object;
            let message = new $root.motor_calib.Result();
            if (object.measurements != null) {
                if (typeof object.measurements !== "object")
                    throw TypeError(".motor_calib.Result.measurements: object expected");
                message.measurements = $root.motor_calib.Measurements.fromObject(object.measurements);
            }
            if (object.lut != null) {
                if (typeof object.lut !== "object")
                    throw TypeError(".motor_calib.Result.lut: object expected");
                message.lut = $root.motor_calib.LUT.fromObject(object.lut);
            }
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof motor_calib.Result
         * @static
         * @param {motor_calib.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.measurements = null;
                object.lut = null;
            }
            if (message.measurements != null && message.hasOwnProperty("measurements"))
                object.measurements = $root.motor_calib.Measurements.toObject(message.measurements, options);
            if (message.lut != null && message.hasOwnProperty("lut"))
                object.lut = $root.motor_calib.LUT.toObject(message.lut, options);
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof motor_calib.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Result
         * @function getTypeUrl
         * @memberof motor_calib.Result
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/motor_calib.Result";
        };

        return Result;
    })();

    return motor_calib;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @name google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof google.protobuf.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Empty";
            };

            return Empty;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
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
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
