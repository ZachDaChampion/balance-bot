import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a State. */
export interface IState {

    /** State pitch */
    pitch?: (number|null);

    /** State yaw */
    yaw?: (number|null);

    /** State pitchRate */
    pitchRate?: (number|null);

    /** State yawRate */
    yawRate?: (number|null);

    /** State leftMotorAngle */
    leftMotorAngle?: (number|null);

    /** State rightMotorAngle */
    rightMotorAngle?: (number|null);

    /** State leftMotorSpeed */
    leftMotorSpeed?: (number|null);

    /** State rightMotorSpeed */
    rightMotorSpeed?: (number|null);

    /** State active */
    active?: (boolean|null);
}

/** Represents a State. */
export class State implements IState {

    /**
     * Constructs a new State.
     * @param [properties] Properties to set
     */
    constructor(properties?: IState);

    /** State pitch. */
    public pitch: number;

    /** State yaw. */
    public yaw: number;

    /** State pitchRate. */
    public pitchRate: number;

    /** State yawRate. */
    public yawRate: number;

    /** State leftMotorAngle. */
    public leftMotorAngle: number;

    /** State rightMotorAngle. */
    public rightMotorAngle: number;

    /** State leftMotorSpeed. */
    public leftMotorSpeed: number;

    /** State rightMotorSpeed. */
    public rightMotorSpeed: number;

    /** State active. */
    public active: boolean;

    /**
     * Creates a new State instance using the specified properties.
     * @param [properties] Properties to set
     * @returns State instance
     */
    public static create(properties?: IState): State;

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a State message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): State;

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): State;

    /**
     * Verifies a State message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns State
     */
    public static fromObject(object: { [k: string]: any }): State;

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @param message State
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: State, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this State to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for State
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Bot2Web. */
export interface IBot2Web {

    /** Bot2Web state */
    state?: (IState|null);

    /** Bot2Web physicalParams */
    physicalParams?: (IPhysicalParams|null);

    /** Bot2Web pitchControllerParams */
    pitchControllerParams?: (IPitchControllerParams|null);

    /** Bot2Web yawControllerParams */
    yawControllerParams?: (IYawControllerParams|null);
}

/** Represents a Bot2Web. */
export class Bot2Web implements IBot2Web {

    /**
     * Constructs a new Bot2Web.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBot2Web);

    /** Bot2Web state. */
    public state?: (IState|null);

    /** Bot2Web physicalParams. */
    public physicalParams?: (IPhysicalParams|null);

    /** Bot2Web pitchControllerParams. */
    public pitchControllerParams?: (IPitchControllerParams|null);

    /** Bot2Web yawControllerParams. */
    public yawControllerParams?: (IYawControllerParams|null);

    /** Bot2Web msg. */
    public msg?: ("state"|"physicalParams"|"pitchControllerParams"|"yawControllerParams");

    /**
     * Creates a new Bot2Web instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Bot2Web instance
     */
    public static create(properties?: IBot2Web): Bot2Web;

    /**
     * Encodes the specified Bot2Web message. Does not implicitly {@link Bot2Web.verify|verify} messages.
     * @param message Bot2Web message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBot2Web, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Bot2Web message, length delimited. Does not implicitly {@link Bot2Web.verify|verify} messages.
     * @param message Bot2Web message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBot2Web, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Bot2Web message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Bot2Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Bot2Web;

    /**
     * Decodes a Bot2Web message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Bot2Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Bot2Web;

    /**
     * Verifies a Bot2Web message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Bot2Web message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Bot2Web
     */
    public static fromObject(object: { [k: string]: any }): Bot2Web;

    /**
     * Creates a plain object from a Bot2Web message. Also converts values to other types if specified.
     * @param message Bot2Web
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Bot2Web, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Bot2Web to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Bot2Web
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PhysicalParams. */
export interface IPhysicalParams {

    /** PhysicalParams wheelRadius */
    wheelRadius?: (number|null);

    /** PhysicalParams wheelBase */
    wheelBase?: (number|null);

    /** PhysicalParams motorMaxSpeed */
    motorMaxSpeed?: (number|null);

    /** PhysicalParams gravity */
    gravity?: (number|null);

    /** PhysicalParams torqueLength */
    torqueLength?: (number|null);
}

/** Represents a PhysicalParams. */
export class PhysicalParams implements IPhysicalParams {

    /**
     * Constructs a new PhysicalParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPhysicalParams);

    /** PhysicalParams wheelRadius. */
    public wheelRadius: number;

    /** PhysicalParams wheelBase. */
    public wheelBase: number;

    /** PhysicalParams motorMaxSpeed. */
    public motorMaxSpeed: number;

    /** PhysicalParams gravity. */
    public gravity: number;

    /** PhysicalParams torqueLength. */
    public torqueLength: number;

    /**
     * Creates a new PhysicalParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PhysicalParams instance
     */
    public static create(properties?: IPhysicalParams): PhysicalParams;

    /**
     * Encodes the specified PhysicalParams message. Does not implicitly {@link PhysicalParams.verify|verify} messages.
     * @param message PhysicalParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPhysicalParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PhysicalParams message, length delimited. Does not implicitly {@link PhysicalParams.verify|verify} messages.
     * @param message PhysicalParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPhysicalParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PhysicalParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PhysicalParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PhysicalParams;

    /**
     * Decodes a PhysicalParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PhysicalParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PhysicalParams;

    /**
     * Verifies a PhysicalParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PhysicalParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PhysicalParams
     */
    public static fromObject(object: { [k: string]: any }): PhysicalParams;

    /**
     * Creates a plain object from a PhysicalParams message. Also converts values to other types if specified.
     * @param message PhysicalParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PhysicalParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PhysicalParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PhysicalParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PitchControllerParams. */
export interface IPitchControllerParams {

    /** PitchControllerParams pid */
    pid?: (IPitchPidParams|null);
}

/** Represents a PitchControllerParams. */
export class PitchControllerParams implements IPitchControllerParams {

    /**
     * Constructs a new PitchControllerParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPitchControllerParams);

    /** PitchControllerParams pid. */
    public pid?: (IPitchPidParams|null);

    /** PitchControllerParams params. */
    public params?: "pid";

    /**
     * Creates a new PitchControllerParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PitchControllerParams instance
     */
    public static create(properties?: IPitchControllerParams): PitchControllerParams;

    /**
     * Encodes the specified PitchControllerParams message. Does not implicitly {@link PitchControllerParams.verify|verify} messages.
     * @param message PitchControllerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPitchControllerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PitchControllerParams message, length delimited. Does not implicitly {@link PitchControllerParams.verify|verify} messages.
     * @param message PitchControllerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPitchControllerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PitchControllerParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PitchControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PitchControllerParams;

    /**
     * Decodes a PitchControllerParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PitchControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PitchControllerParams;

    /**
     * Verifies a PitchControllerParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PitchControllerParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PitchControllerParams
     */
    public static fromObject(object: { [k: string]: any }): PitchControllerParams;

    /**
     * Creates a plain object from a PitchControllerParams message. Also converts values to other types if specified.
     * @param message PitchControllerParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PitchControllerParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PitchControllerParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PitchControllerParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a YawControllerParams. */
export interface IYawControllerParams {

    /** YawControllerParams pid */
    pid?: (IYawPidParams|null);
}

/** Represents a YawControllerParams. */
export class YawControllerParams implements IYawControllerParams {

    /**
     * Constructs a new YawControllerParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IYawControllerParams);

    /** YawControllerParams pid. */
    public pid?: (IYawPidParams|null);

    /** YawControllerParams params. */
    public params?: "pid";

    /**
     * Creates a new YawControllerParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns YawControllerParams instance
     */
    public static create(properties?: IYawControllerParams): YawControllerParams;

    /**
     * Encodes the specified YawControllerParams message. Does not implicitly {@link YawControllerParams.verify|verify} messages.
     * @param message YawControllerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IYawControllerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified YawControllerParams message, length delimited. Does not implicitly {@link YawControllerParams.verify|verify} messages.
     * @param message YawControllerParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IYawControllerParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a YawControllerParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns YawControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): YawControllerParams;

    /**
     * Decodes a YawControllerParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns YawControllerParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): YawControllerParams;

    /**
     * Verifies a YawControllerParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a YawControllerParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns YawControllerParams
     */
    public static fromObject(object: { [k: string]: any }): YawControllerParams;

    /**
     * Creates a plain object from a YawControllerParams message. Also converts values to other types if specified.
     * @param message YawControllerParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: YawControllerParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this YawControllerParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for YawControllerParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PitchPidParams. */
export interface IPitchPidParams {

    /** PitchPidParams kp */
    kp?: (number|null);

    /** PitchPidParams ki */
    ki?: (number|null);

    /** PitchPidParams kd */
    kd?: (number|null);

    /** PitchPidParams kf */
    kf?: (number|null);

    /** PitchPidParams integralZeroThreshold */
    integralZeroThreshold?: (number|null);

    /** PitchPidParams integralSaturationLimit */
    integralSaturationLimit?: (number|null);

    /** PitchPidParams resetIntegral */
    resetIntegral?: (boolean|null);

    /** PitchPidParams ffAddGravity */
    ffAddGravity?: (boolean|null);
}

/** Represents a PitchPidParams. */
export class PitchPidParams implements IPitchPidParams {

    /**
     * Constructs a new PitchPidParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPitchPidParams);

    /** PitchPidParams kp. */
    public kp: number;

    /** PitchPidParams ki. */
    public ki: number;

    /** PitchPidParams kd. */
    public kd: number;

    /** PitchPidParams kf. */
    public kf: number;

    /** PitchPidParams integralZeroThreshold. */
    public integralZeroThreshold: number;

    /** PitchPidParams integralSaturationLimit. */
    public integralSaturationLimit: number;

    /** PitchPidParams resetIntegral. */
    public resetIntegral: boolean;

    /** PitchPidParams ffAddGravity. */
    public ffAddGravity: boolean;

    /**
     * Creates a new PitchPidParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PitchPidParams instance
     */
    public static create(properties?: IPitchPidParams): PitchPidParams;

    /**
     * Encodes the specified PitchPidParams message. Does not implicitly {@link PitchPidParams.verify|verify} messages.
     * @param message PitchPidParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPitchPidParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PitchPidParams message, length delimited. Does not implicitly {@link PitchPidParams.verify|verify} messages.
     * @param message PitchPidParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPitchPidParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PitchPidParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PitchPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PitchPidParams;

    /**
     * Decodes a PitchPidParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PitchPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PitchPidParams;

    /**
     * Verifies a PitchPidParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PitchPidParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PitchPidParams
     */
    public static fromObject(object: { [k: string]: any }): PitchPidParams;

    /**
     * Creates a plain object from a PitchPidParams message. Also converts values to other types if specified.
     * @param message PitchPidParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PitchPidParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PitchPidParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PitchPidParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a YawPidParams. */
export interface IYawPidParams {

    /** YawPidParams kp */
    kp?: (number|null);

    /** YawPidParams ki */
    ki?: (number|null);

    /** YawPidParams kd */
    kd?: (number|null);

    /** YawPidParams kf */
    kf?: (number|null);

    /** YawPidParams integralZeroThreshold */
    integralZeroThreshold?: (number|null);

    /** YawPidParams integralSaturationLimit */
    integralSaturationLimit?: (number|null);

    /** YawPidParams resetIntegral */
    resetIntegral?: (boolean|null);
}

/** Represents a YawPidParams. */
export class YawPidParams implements IYawPidParams {

    /**
     * Constructs a new YawPidParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IYawPidParams);

    /** YawPidParams kp. */
    public kp: number;

    /** YawPidParams ki. */
    public ki: number;

    /** YawPidParams kd. */
    public kd: number;

    /** YawPidParams kf. */
    public kf: number;

    /** YawPidParams integralZeroThreshold. */
    public integralZeroThreshold: number;

    /** YawPidParams integralSaturationLimit. */
    public integralSaturationLimit: number;

    /** YawPidParams resetIntegral. */
    public resetIntegral: boolean;

    /**
     * Creates a new YawPidParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns YawPidParams instance
     */
    public static create(properties?: IYawPidParams): YawPidParams;

    /**
     * Encodes the specified YawPidParams message. Does not implicitly {@link YawPidParams.verify|verify} messages.
     * @param message YawPidParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IYawPidParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified YawPidParams message, length delimited. Does not implicitly {@link YawPidParams.verify|verify} messages.
     * @param message YawPidParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IYawPidParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a YawPidParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns YawPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): YawPidParams;

    /**
     * Decodes a YawPidParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns YawPidParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): YawPidParams;

    /**
     * Verifies a YawPidParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a YawPidParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns YawPidParams
     */
    public static fromObject(object: { [k: string]: any }): YawPidParams;

    /**
     * Creates a plain object from a YawPidParams message. Also converts values to other types if specified.
     * @param message YawPidParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: YawPidParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this YawPidParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for YawPidParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Command enum. */
export enum Command {
    START = 0,
    STOP = 1
}

/** Represents a Web2Bot. */
export class Web2Bot implements IWeb2Bot {

    /**
     * Constructs a new Web2Bot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWeb2Bot);

    /** Web2Bot command. */
    public command?: (Command|null);

    /** Web2Bot physicalParams. */
    public physicalParams?: (IPhysicalParams|null);

    /** Web2Bot pitchControllerParams. */
    public pitchControllerParams?: (IPitchControllerParams|null);

    /** Web2Bot rollControllerParams. */
    public rollControllerParams?: (IYawControllerParams|null);

    /** Web2Bot msg. */
    public msg?: ("command"|"physicalParams"|"pitchControllerParams"|"rollControllerParams");

    /**
     * Creates a new Web2Bot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Web2Bot instance
     */
    public static create(properties?: IWeb2Bot): Web2Bot;

    /**
     * Encodes the specified Web2Bot message. Does not implicitly {@link Web2Bot.verify|verify} messages.
     * @param message Web2Bot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWeb2Bot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Web2Bot message, length delimited. Does not implicitly {@link Web2Bot.verify|verify} messages.
     * @param message Web2Bot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWeb2Bot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Web2Bot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Web2Bot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Web2Bot;

    /**
     * Decodes a Web2Bot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Web2Bot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Web2Bot;

    /**
     * Verifies a Web2Bot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Web2Bot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Web2Bot
     */
    public static fromObject(object: { [k: string]: any }): Web2Bot;

    /**
     * Creates a plain object from a Web2Bot message. Also converts values to other types if specified.
     * @param message Web2Bot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Web2Bot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Web2Bot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Web2Bot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
