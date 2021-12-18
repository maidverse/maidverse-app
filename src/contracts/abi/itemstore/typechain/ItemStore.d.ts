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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ItemStoreInterface extends ethers.utils.Interface {
  functions: {
    "buyItem(bytes32,uint256)": FunctionFragment;
    "buyItems(bytes32[],uint256[])": FunctionFragment;
    "itemPrices(uint256)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPrices(uint256[],uint256[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItems",
    values: [BytesLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "itemPrices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrices",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyItems", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "itemPrices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPrices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ItemStore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ItemStoreInterface;

  functions: {
    buyItem(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyItem(bytes32,uint256)"(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    buyItems(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "buyItems(bytes32[],uint256[])"(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    itemPrices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "itemPrices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setPrices(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPrices(uint256[],uint256[])"(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  buyItem(
    hash: BytesLike,
    itemId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyItem(bytes32,uint256)"(
    hash: BytesLike,
    itemId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  buyItems(
    hashes: BytesLike[],
    itemIds: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "buyItems(bytes32[],uint256[])"(
    hashes: BytesLike[],
    itemIds: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  itemPrices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "itemPrices(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "nonces(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setPrices(
    ids: BigNumberish[],
    prices: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPrices(uint256[],uint256[])"(
    ids: BigNumberish[],
    prices: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    recipient: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256)"(
    recipient: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    buyItem(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyItem(bytes32,uint256)"(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyItems(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "buyItems(bytes32[],uint256[])"(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    itemPrices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "itemPrices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setPrices(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setPrices(uint256[],uint256[])"(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    buyItem(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyItem(bytes32,uint256)"(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    buyItems(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "buyItems(bytes32[],uint256[])"(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    itemPrices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "itemPrices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setPrices(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPrices(uint256[],uint256[])"(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyItem(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyItem(bytes32,uint256)"(
      hash: BytesLike,
      itemId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    buyItems(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "buyItems(bytes32[],uint256[])"(
      hashes: BytesLike[],
      itemIds: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    itemPrices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "itemPrices(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setPrices(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPrices(uint256[],uint256[])"(
      ids: BigNumberish[],
      prices: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
