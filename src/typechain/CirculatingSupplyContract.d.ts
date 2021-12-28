/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CirculatingSupplyContractInterface extends ethers.utils.Interface {
  functions: {
    "OX()": FunctionFragment;
    "OXCirculatingSupply()": FunctionFragment;
    "getNonCirculatingOX()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "nonCirculatingOXAddresses(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "setNonCirculatingOXAddresses(address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "OX", values?: undefined): string;
  encodeFunctionData(functionFragment: "OXCirculatingSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "getNonCirculatingOX", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isInitialized", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonCirculatingOXAddresses", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setNonCirculatingOXAddresses", values: [string[]]): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;

  decodeFunctionResult(functionFragment: "OX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OXCirculatingSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonCirculatingOX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isInitialized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonCirculatingOXAddresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNonCirculatingOXAddresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;

  events: {};
}

export class CirculatingSupplyContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CirculatingSupplyContractInterface;

  functions: {
    OX(overrides?: CallOverrides): Promise<[string]>;

    OXCirculatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonCirculatingOX(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(_ohm: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    nonCirculatingOXAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setNonCirculatingOXAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  OX(overrides?: CallOverrides): Promise<string>;

  OXCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  getNonCirculatingOX(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(_ohm: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  nonCirculatingOXAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setNonCirculatingOXAddresses(
    _nonCirculatingAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    OX(overrides?: CallOverrides): Promise<string>;

    OXCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingOX(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_ohm: string, overrides?: CallOverrides): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    nonCirculatingOXAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setNonCirculatingOXAddresses(_nonCirculatingAddresses: string[], overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(_owner: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    OX(overrides?: CallOverrides): Promise<BigNumber>;

    OXCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingOX(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_ohm: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    nonCirculatingOXAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setNonCirculatingOXAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferOwnership(_owner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    OX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OXCirculatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonCirculatingOX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _ohm: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonCirculatingOXAddresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNonCirculatingOXAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
