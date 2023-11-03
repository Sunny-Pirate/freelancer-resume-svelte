import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  SupplierDeliveryInfoDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  categories?: Maybe<CategoryRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flavor?: Maybe<FlavorEntityResponse>;
  inventory_items?: Maybe<InventoryItemRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<CategoryEntityResponse>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryInventory_ItemsArgs = {
  filters?: InputMaybe<InventoryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  flavor?: InputMaybe<FlavorFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  inventory_items?: InputMaybe<InventoryItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  parent?: InputMaybe<CategoryFiltersInput>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  flavor?: InputMaybe<Scalars['ID']['input']>;
  inventory_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentContactsEMail = {
  __typename?: 'ComponentContactsEMail';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  scope?: Maybe<Enum_Componentcontactsemail_Scope>;
};

export type ComponentContactsEMailFiltersInput = {
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContactsEMailFiltersInput>>>;
  not?: InputMaybe<ComponentContactsEMailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactsEMailFiltersInput>>>;
  scope?: InputMaybe<StringFilterInput>;
};

export type ComponentContactsEMailInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  scope?: InputMaybe<Enum_Componentcontactsemail_Scope>;
};

export type ComponentContactsPhone = {
  __typename?: 'ComponentContactsPhone';
  Country?: Maybe<Enum_Componentcontactsphone_Country>;
  id: Scalars['ID']['output'];
  phoneString?: Maybe<Scalars['String']['output']>;
};

export type ComponentContactsPhoneFiltersInput = {
  Country?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneFiltersInput>>>;
  not?: InputMaybe<ComponentContactsPhoneFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneFiltersInput>>>;
  phoneString?: InputMaybe<StringFilterInput>;
};

export type ComponentContactsPhoneInput = {
  Country?: InputMaybe<Enum_Componentcontactsphone_Country>;
  id?: InputMaybe<Scalars['ID']['input']>;
  phoneString?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentContactsSocial = {
  __typename?: 'ComponentContactsSocial';
  id: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentcontactssocial_Type>;
};

export type ComponentContactsSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactsSocialFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactsSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactsSocialFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentContactsSocialInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Componentcontactssocial_Type>;
};

export type ComponentEventsWorkshopParticipant = {
  __typename?: 'ComponentEventsWorkshopParticipant';
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  numberOfParticipants?: Maybe<Scalars['Int']['output']>;
  requestDate?: Maybe<Scalars['DateTime']['output']>;
  requestStatus?: Maybe<Enum_Componenteventsworkshopparticipant_Requeststatus>;
  skillLevel?: Maybe<Enum_Componenteventsworkshopparticipant_Skilllevel>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
};

export type ComponentEventsWorkshopParticipantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEventsWorkshopParticipantFiltersInput>>>;
  fullName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentEventsWorkshopParticipantFiltersInput>;
  numberOfParticipants?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEventsWorkshopParticipantFiltersInput>>>;
  requestDate?: InputMaybe<DateTimeFilterInput>;
  requestStatus?: InputMaybe<StringFilterInput>;
  skillLevel?: InputMaybe<StringFilterInput>;
  unitPrice?: InputMaybe<FloatFilterInput>;
};

export type ComponentEventsWorkshopParticipantInput = {
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  numberOfParticipants?: InputMaybe<Scalars['Int']['input']>;
  requestDate?: InputMaybe<Scalars['DateTime']['input']>;
  requestStatus?: InputMaybe<Enum_Componenteventsworkshopparticipant_Requeststatus>;
  skillLevel?: InputMaybe<Enum_Componenteventsworkshopparticipant_Skilllevel>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type ComponentFrontendNavigationlink = {
  __typename?: 'ComponentFrontendNavigationlink';
  id: Scalars['ID']['output'];
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentFrontendNavigationlinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFrontendNavigationlinkFiltersInput>>>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFrontendNavigationlinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFrontendNavigationlinkFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentFrontendNavigationlinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentKitsiteItemDetail = {
  __typename?: 'ComponentKitsiteItemDetail';
  UM?: Maybe<Enum_Componentkitsiteitemdetail_Um>;
  id: Scalars['ID']['output'];
  item?: Maybe<InventoryItemEntityResponse>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type ComponentKitsiteItemDetailFiltersInput = {
  UM?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentKitsiteItemDetailFiltersInput>>>;
  item?: InputMaybe<InventoryItemFiltersInput>;
  not?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsiteItemDetailFiltersInput>>>;
  quantity?: InputMaybe<IntFilterInput>;
};

export type ComponentKitsiteItemDetailInput = {
  UM?: InputMaybe<Enum_Componentkitsiteitemdetail_Um>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentKitsiteOrderableItems = {
  __typename?: 'ComponentKitsiteOrderableItems';
  id: Scalars['ID']['output'];
  quantity?: Maybe<Scalars['Float']['output']>;
  supplier?: Maybe<SupplierEntityResponse>;
};

export type ComponentKitsitePresentationMode = {
  __typename?: 'ComponentKitsitePresentationMode';
  id: Scalars['ID']['output'];
  situation?: Maybe<Enum_Componentkitsitepresentationmode_Situation>;
  tasks?: Maybe<TaskRelationResponseCollection>;
};


export type ComponentKitsitePresentationModeTasksArgs = {
  filters?: InputMaybe<TaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentKitsitePresentationModeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKitsitePresentationModeFiltersInput>>>;
  not?: InputMaybe<ComponentKitsitePresentationModeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsitePresentationModeFiltersInput>>>;
  situation?: InputMaybe<StringFilterInput>;
  tasks?: InputMaybe<TaskFiltersInput>;
};

export type ComponentKitsitePresentationModeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  situation?: InputMaybe<Enum_Componentkitsitepresentationmode_Situation>;
  tasks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentKitsiteProductSupplier = {
  __typename?: 'ComponentKitsiteProductSupplier';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  supplier?: Maybe<SupplierEntityResponse>;
};

export type ComponentKitsiteProductSupplierFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKitsiteProductSupplierFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentKitsiteProductSupplierFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsiteProductSupplierFiltersInput>>>;
  supplier?: InputMaybe<SupplierFiltersInput>;
};

export type ComponentKitsiteProductSupplierInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  supplier?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentKitsiteRecipeStep = {
  __typename?: 'ComponentKitsiteRecipeStep';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type ComponentKitsiteRecipeStepFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKitsiteRecipeStepFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentKitsiteRecipeStepFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsiteRecipeStepFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
};

export type ComponentKitsiteRecipeStepInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentKitsiteSelfAssessment = {
  __typename?: 'ComponentKitsiteSelfAssessment';
  id: Scalars['ID']['output'];
  rating?: Maybe<Enum_Componentkitsiteselfassessment_Rating>;
};

export type ComponentKitsiteSelfAssessmentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKitsiteSelfAssessmentFiltersInput>>>;
  not?: InputMaybe<ComponentKitsiteSelfAssessmentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsiteSelfAssessmentFiltersInput>>>;
  rating?: InputMaybe<StringFilterInput>;
};

export type ComponentKitsiteSelfAssessmentInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Enum_Componentkitsiteselfassessment_Rating>;
};

export type ComponentKitsiteStorageLocation = {
  __typename?: 'ComponentKitsiteStorageLocation';
  id: Scalars['ID']['output'];
  resource?: Maybe<ResourceEntityResponse>;
  status?: Maybe<Enum_Componentkitsitestoragelocation_Status>;
};

export type ComponentKitsiteWorkflowItem = {
  __typename?: 'ComponentKitsiteWorkflowItem';
  delegateTo?: Maybe<UsersPermissionsUserEntityResponse>;
  duration?: Maybe<Scalars['Int']['output']>;
  followUpDate?: Maybe<Scalars['Date']['output']>;
  followUpDays?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<ComponentKitsiteItemDetail>>>;
  order?: Maybe<Scalars['Int']['output']>;
  selfAssessment?: Maybe<ComponentKitsiteSelfAssessment>;
  status?: Maybe<Enum_Componentkitsiteworkflowitem_Status>;
  task?: Maybe<TaskEntityResponse>;
};


export type ComponentKitsiteWorkflowItemItemsArgs = {
  filters?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentKitsiteWorkflowItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentKitsiteWorkflowItemFiltersInput>>>;
  delegateTo?: InputMaybe<UsersPermissionsUserFiltersInput>;
  duration?: InputMaybe<IntFilterInput>;
  followUpDate?: InputMaybe<DateFilterInput>;
  followUpDays?: InputMaybe<IntFilterInput>;
  items?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  not?: InputMaybe<ComponentKitsiteWorkflowItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentKitsiteWorkflowItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  selfAssessment?: InputMaybe<ComponentKitsiteSelfAssessmentFiltersInput>;
  status?: InputMaybe<StringFilterInput>;
  task?: InputMaybe<TaskFiltersInput>;
};

export type ComponentKitsiteWorkflowItemInput = {
  delegateTo?: InputMaybe<Scalars['ID']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  followUpDate?: InputMaybe<Scalars['Date']['input']>;
  followUpDays?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentKitsiteItemDetailInput>>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  selfAssessment?: InputMaybe<ComponentKitsiteSelfAssessmentInput>;
  status?: InputMaybe<Enum_Componentkitsiteworkflowitem_Status>;
  task?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLogisticsDeliveryByDate = {
  __typename?: 'ComponentLogisticsDeliveryByDate';
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentLogisticsDeliveryByDaysOfTheWeek = {
  __typename?: 'ComponentLogisticsDeliveryByDaysOfTheWeek';
  deliveredEvery?: Maybe<Scalars['Int']['output']>;
  friday?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  monday?: Maybe<Scalars['Boolean']['output']>;
  saturday?: Maybe<Scalars['Boolean']['output']>;
  sunday?: Maybe<Scalars['Boolean']['output']>;
  thursday?: Maybe<Scalars['Boolean']['output']>;
  tuesday?: Maybe<Scalars['Boolean']['output']>;
  wednesday?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentLogisticsDeliveryByInternational = {
  __typename?: 'ComponentLogisticsDeliveryByInternational';
  country?: Maybe<Enum_Componentlogisticsdeliverybyinternational_Country>;
  estimatedTransitTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
};

export type ComponentLogisticsOrderableSupplierQty = {
  __typename?: 'ComponentLogisticsOrderableSupplierQty';
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  supplier?: Maybe<SupplierEntityResponse>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
};

export type ComponentLogisticsOrderableSupplierQtyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLogisticsOrderableSupplierQtyFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  isAvailable?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentLogisticsOrderableSupplierQtyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLogisticsOrderableSupplierQtyFiltersInput>>>;
  quantity?: InputMaybe<FloatFilterInput>;
  supplier?: InputMaybe<SupplierFiltersInput>;
  unitPrice?: InputMaybe<FloatFilterInput>;
};

export type ComponentLogisticsOrderableSupplierQtyInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  supplier?: InputMaybe<Scalars['ID']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentcontactsemail_Scope {
  Admin = 'Admin',
  Feedback = 'Feedback',
  Finance = 'Finance',
  Flavors = 'Flavors',
  Hr = 'HR',
  Info = 'Info',
  Inventory = 'Inventory',
  Legal = 'Legal',
  Maintenance = 'Maintenance',
  Marketing = 'Marketing',
  Orders = 'Orders',
  Other = 'Other',
  Partnerships = 'Partnerships',
  Production = 'Production',
  QualityControl = 'QualityControl',
  Recipes = 'Recipes',
  Sales = 'Sales',
  Service = 'Service',
  Support = 'Support',
  Tasks = 'Tasks',
  Tech = 'Tech'
}

export enum Enum_Componentcontactsphone_Country {
  Italy = 'Italy',
  TheNetherlands = 'The_Netherlands',
  UnitedKingdom = 'United_Kingdom'
}

export enum Enum_Componentcontactssocial_Type {
  Atlassian = 'Atlassian',
  GitHub = 'GitHub',
  Indeed = 'Indeed',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Webpage = 'Webpage'
}

export enum Enum_Componenteventsworkshopparticipant_Requeststatus {
  Cancelled = 'Cancelled',
  Confirmed = 'Confirmed',
  InNegotiation = 'In_Negotiation',
  Received = 'Received',
  Rejected = 'Rejected'
}

export enum Enum_Componenteventsworkshopparticipant_Skilllevel {
  Advanced = 'Advanced',
  Basic = 'Basic',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Novice = 'Novice',
  Professional = 'Professional'
}

export enum Enum_Componentkitsiteitemdetail_Um {
  Box = 'Box',
  Gram = 'Gram',
  Kilogram = 'Kilogram',
  Liter = 'Liter',
  Milliliter = 'Milliliter',
  Other = 'Other',
  Packet = 'Packet',
  Piece = 'Piece'
}

export enum Enum_Componentkitsitepresentationmode_Situation {
  AtTheBar = 'At_the_bar',
  AtTheTable = 'At_the_table',
  InACone = 'In_a_cone',
  InACup = 'In_a_cup',
  TakeAway = 'Take_Away'
}

export enum Enum_Componentkitsiteselfassessment_Rating {
  Excellent = 'Excellent',
  Fair = 'Fair',
  Good = 'Good',
  NotAssessed = 'Not_Assessed',
  Poor = 'Poor'
}

export enum Enum_Componentkitsitestoragelocation_Status {
  Arrived = 'Arrived',
  ForRefill = 'For_refill',
  InSale = 'In_sale'
}

export enum Enum_Componentkitsiteworkflowitem_Status {
  Active = 'Active',
  Delegated = 'Delegated',
  Draft = 'Draft',
  Interrupted = 'Interrupted',
  Scheduled = 'Scheduled'
}

export enum Enum_Componentlogisticsdeliverybyinternational_Country {
  Argentina = 'Argentina',
  Italy = 'Italy',
  Spain = 'Spain'
}

export enum Enum_Inventoryitem_Status {
  Available = 'Available',
  Damaged = 'Damaged',
  Discontinued = 'Discontinued',
  Expired = 'Expired',
  InTransit = 'InTransit',
  OnHold = 'OnHold',
  OutofStock = 'OutofStock',
  PendingRestock = 'PendingRestock',
  Reserved = 'Reserved'
}

export enum Enum_Inventoryitem_Um {
  Box = 'Box',
  Gram = 'Gram',
  Kilogram = 'Kilogram',
  Liter = 'Liter',
  Milliliter = 'Milliliter',
  Other = 'Other',
  Packet = 'Packet',
  Piece = 'Piece'
}

export enum Enum_Order_Status {
  Anomalous = 'Anomalous',
  Approved = 'Approved',
  Archived = 'Archived',
  AutoGenerated = 'Auto_generated',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Deleted = 'Deleted',
  Error = 'Error',
  InProgress = 'In_Progress',
  InReview = 'In_review',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export enum Enum_Resource_Status {
  Available = 'Available',
  InUse = 'In_Use',
  OutOfService = 'Out_of_Service',
  UnderMaintenance = 'Under_Maintenance'
}

export enum Enum_Resource_Type {
  Consumable = 'Consumable',
  Equipment = 'Equipment',
  Space = 'Space'
}

export enum Enum_Task_Frequency {
  Daily = 'Daily',
  Fortuitous = 'Fortuitous',
  Monthly = 'Monthly',
  Seasonal = 'Seasonal',
  Weekly = 'Weekly'
}

export enum Enum_Task_Type {
  Available = 'Available',
  Issue = 'Issue',
  Maintenance = 'Maintenance',
  Suggested = 'Suggested'
}

export enum Enum_Webpage_Type {
  Article = 'article',
  Project = 'project'
}

export enum Enum_Workshop_State {
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Draft = 'Draft',
  Scheduled = 'Scheduled',
  SoldOut = 'Sold_Out'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Flavor = {
  __typename?: 'Flavor';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  isAvailableInStore?: Maybe<Scalars['Boolean']['output']>;
  isOnlineAvailable?: Maybe<Scalars['Boolean']['output']>;
  isOnlineVisible?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  recipe?: Maybe<RecipeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FlavorImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FlavorProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FlavorEntity = {
  __typename?: 'FlavorEntity';
  attributes?: Maybe<Flavor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type FlavorEntityResponse = {
  __typename?: 'FlavorEntityResponse';
  data?: Maybe<FlavorEntity>;
};

export type FlavorEntityResponseCollection = {
  __typename?: 'FlavorEntityResponseCollection';
  data: Array<FlavorEntity>;
  meta: ResponseCollectionMeta;
};

export type FlavorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FlavorFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isAvailableInStore?: InputMaybe<BooleanFilterInput>;
  isOnlineAvailable?: InputMaybe<BooleanFilterInput>;
  isOnlineVisible?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FlavorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FlavorFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recipe?: InputMaybe<RecipeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FlavorInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isAvailableInStore?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlineAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlineVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  recipe?: InputMaybe<Scalars['ID']['input']>;
};

export type FlavorRelationResponseCollection = {
  __typename?: 'FlavorRelationResponseCollection';
  data: Array<FlavorEntity>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Category | ComponentContactsEMail | ComponentContactsPhone | ComponentContactsSocial | ComponentEventsWorkshopParticipant | ComponentFrontendNavigationlink | ComponentKitsiteItemDetail | ComponentKitsiteOrderableItems | ComponentKitsitePresentationMode | ComponentKitsiteProductSupplier | ComponentKitsiteRecipeStep | ComponentKitsiteSelfAssessment | ComponentKitsiteStorageLocation | ComponentKitsiteWorkflowItem | ComponentLogisticsDeliveryByDate | ComponentLogisticsDeliveryByDaysOfTheWeek | ComponentLogisticsDeliveryByInternational | ComponentLogisticsOrderableSupplierQty | Flavor | I18NLocale | InventoryBatch | InventoryItem | Menu | Order | PersonalInformation | Product | Project | Recipe | Resource | Shift | Supplier | Task | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Webpage | WorkExperience | WorkingIndutry | Workshop;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryBatch = {
  __typename?: 'InventoryBatch';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  inventory_item?: Maybe<InventoryItemEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InventoryBatchEntity = {
  __typename?: 'InventoryBatchEntity';
  attributes?: Maybe<InventoryBatch>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InventoryBatchEntityResponse = {
  __typename?: 'InventoryBatchEntityResponse';
  data?: Maybe<InventoryBatchEntity>;
};

export type InventoryBatchEntityResponseCollection = {
  __typename?: 'InventoryBatchEntityResponseCollection';
  data: Array<InventoryBatchEntity>;
  meta: ResponseCollectionMeta;
};

export type InventoryBatchFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InventoryBatchFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  expirationDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inventory_item?: InputMaybe<InventoryItemFiltersInput>;
  not?: InputMaybe<InventoryBatchFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InventoryBatchFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InventoryBatchInput = {
  expirationDate?: InputMaybe<Scalars['Date']['input']>;
  inventory_item?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
};

export type InventoryBatchRelationResponseCollection = {
  __typename?: 'InventoryBatchRelationResponseCollection';
  data: Array<InventoryBatchEntity>;
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  UM?: Maybe<Enum_Inventoryitem_Um>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  inventory_batches?: Maybe<InventoryBatchRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  resources?: Maybe<ResourceRelationResponseCollection>;
  status?: Maybe<Enum_Inventoryitem_Status>;
  supply_info?: Maybe<Array<Maybe<ComponentLogisticsOrderableSupplierQty>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InventoryItemInventory_BatchesArgs = {
  filters?: InputMaybe<InventoryBatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InventoryItemResourcesArgs = {
  filters?: InputMaybe<ResourceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type InventoryItemSupply_InfoArgs = {
  filters?: InputMaybe<ComponentLogisticsOrderableSupplierQtyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InventoryItemEntity = {
  __typename?: 'InventoryItemEntity';
  attributes?: Maybe<InventoryItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InventoryItemEntityResponse = {
  __typename?: 'InventoryItemEntityResponse';
  data?: Maybe<InventoryItemEntity>;
};

export type InventoryItemEntityResponseCollection = {
  __typename?: 'InventoryItemEntityResponseCollection';
  data: Array<InventoryItemEntity>;
  meta: ResponseCollectionMeta;
};

export type InventoryItemFiltersInput = {
  UM?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<InventoryItemFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inventory_batches?: InputMaybe<InventoryBatchFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InventoryItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InventoryItemFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quantity?: InputMaybe<FloatFilterInput>;
  resources?: InputMaybe<ResourceFiltersInput>;
  status?: InputMaybe<StringFilterInput>;
  supply_info?: InputMaybe<ComponentLogisticsOrderableSupplierQtyFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InventoryItemInput = {
  UM?: InputMaybe<Enum_Inventoryitem_Um>;
  category?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  inventory_batches?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<Enum_Inventoryitem_Status>;
  supply_info?: InputMaybe<Array<InputMaybe<ComponentLogisticsOrderableSupplierQtyInput>>>;
};

export type InventoryItemRelationResponseCollection = {
  __typename?: 'InventoryItemRelationResponseCollection';
  data: Array<InventoryItemEntity>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  links?: Maybe<Array<Maybe<ComponentFrontendNavigationlink>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenuLinksArgs = {
  filters?: InputMaybe<ComponentFrontendNavigationlinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuEntityResponseCollection = {
  __typename?: 'MenuEntityResponseCollection';
  data: Array<MenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<ComponentFrontendNavigationlinkFiltersInput>;
  not?: InputMaybe<MenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  scope?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenuInput = {
  links?: InputMaybe<Array<InputMaybe<ComponentFrontendNavigationlinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createFlavor?: Maybe<FlavorEntityResponse>;
  createInventoryBatch?: Maybe<InventoryBatchEntityResponse>;
  createInventoryItem?: Maybe<InventoryItemEntityResponse>;
  createMenu?: Maybe<MenuEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createPersonalInformationLocalization?: Maybe<PersonalInformationEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createRecipe?: Maybe<RecipeEntityResponse>;
  createResource?: Maybe<ResourceEntityResponse>;
  createResourceLocalization?: Maybe<ResourceEntityResponse>;
  createShift?: Maybe<ShiftEntityResponse>;
  createSupplier?: Maybe<SupplierEntityResponse>;
  createTask?: Maybe<TaskEntityResponse>;
  createTaskLocalization?: Maybe<TaskEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWebpage?: Maybe<WebpageEntityResponse>;
  createWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  createWorkExperienceLocalization?: Maybe<WorkExperienceEntityResponse>;
  createWorkingIndutry?: Maybe<WorkingIndutryEntityResponse>;
  createWorkingIndutryLocalization?: Maybe<WorkingIndutryEntityResponse>;
  createWorkshop?: Maybe<WorkshopEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFlavor?: Maybe<FlavorEntityResponse>;
  deleteInventoryBatch?: Maybe<InventoryBatchEntityResponse>;
  deleteInventoryItem?: Maybe<InventoryItemEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deletePersonalInformation?: Maybe<PersonalInformationEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteRecipe?: Maybe<RecipeEntityResponse>;
  deleteResource?: Maybe<ResourceEntityResponse>;
  deleteShift?: Maybe<ShiftEntityResponse>;
  deleteSupplier?: Maybe<SupplierEntityResponse>;
  deleteTask?: Maybe<TaskEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWebpage?: Maybe<WebpageEntityResponse>;
  deleteWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  deleteWorkingIndutry?: Maybe<WorkingIndutryEntityResponse>;
  deleteWorkshop?: Maybe<WorkshopEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFlavor?: Maybe<FlavorEntityResponse>;
  updateInventoryBatch?: Maybe<InventoryBatchEntityResponse>;
  updateInventoryItem?: Maybe<InventoryItemEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updatePersonalInformation?: Maybe<PersonalInformationEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateRecipe?: Maybe<RecipeEntityResponse>;
  updateResource?: Maybe<ResourceEntityResponse>;
  updateShift?: Maybe<ShiftEntityResponse>;
  updateSupplier?: Maybe<SupplierEntityResponse>;
  updateTask?: Maybe<TaskEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWebpage?: Maybe<WebpageEntityResponse>;
  updateWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  updateWorkingIndutry?: Maybe<WorkingIndutryEntityResponse>;
  updateWorkshop?: Maybe<WorkshopEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateFlavorArgs = {
  data: FlavorInput;
};


export type MutationCreateInventoryBatchArgs = {
  data: InventoryBatchInput;
};


export type MutationCreateInventoryItemArgs = {
  data: InventoryItemInput;
};


export type MutationCreateMenuArgs = {
  data: MenuInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreatePersonalInformationLocalizationArgs = {
  data?: InputMaybe<PersonalInformationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeInput;
};


export type MutationCreateResourceArgs = {
  data: ResourceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateResourceLocalizationArgs = {
  data?: InputMaybe<ResourceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateShiftArgs = {
  data: ShiftInput;
};


export type MutationCreateSupplierArgs = {
  data: SupplierInput;
};


export type MutationCreateTaskArgs = {
  data: TaskInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTaskLocalizationArgs = {
  data?: InputMaybe<TaskInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWebpageArgs = {
  data: WebpageInput;
};


export type MutationCreateWorkExperienceArgs = {
  data: WorkExperienceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWorkExperienceLocalizationArgs = {
  data?: InputMaybe<WorkExperienceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWorkingIndutryArgs = {
  data: WorkingIndutryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWorkingIndutryLocalizationArgs = {
  data?: InputMaybe<WorkingIndutryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWorkshopArgs = {
  data: WorkshopInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFlavorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInventoryBatchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInventoryItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePersonalInformationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteResourceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteShiftArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWebpageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkExperienceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWorkingIndutryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWorkshopArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFlavorArgs = {
  data: FlavorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInventoryBatchArgs = {
  data: InventoryBatchInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInventoryItemArgs = {
  data: InventoryItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePersonalInformationArgs = {
  data: PersonalInformationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRecipeArgs = {
  data: RecipeInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateResourceArgs = {
  data: ResourceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateShiftArgs = {
  data: ShiftInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSupplierArgs = {
  data: SupplierInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTaskArgs = {
  data: TaskInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWebpageArgs = {
  data: WebpageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkExperienceArgs = {
  data: WorkExperienceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateWorkingIndutryArgs = {
  data: WorkingIndutryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateWorkshopArgs = {
  data: WorkshopInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateCreated?: Maybe<Scalars['Date']['output']>;
  dateToExecute?: Maybe<Scalars['Date']['output']>;
  estimatedArrival?: Maybe<Scalars['Date']['output']>;
  items?: Maybe<Array<Maybe<ComponentKitsiteItemDetail>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Enum_Order_Status>;
  supplier?: Maybe<SupplierEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderItemsArgs = {
  filters?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateCreated?: InputMaybe<DateFilterInput>;
  dateToExecute?: InputMaybe<DateFilterInput>;
  estimatedArrival?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  supplier?: InputMaybe<SupplierFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OrderInput = {
  dateCreated?: InputMaybe<Scalars['Date']['input']>;
  dateToExecute?: InputMaybe<Scalars['Date']['input']>;
  estimatedArrival?: InputMaybe<Scalars['Date']['input']>;
  items?: InputMaybe<Array<InputMaybe<ComponentKitsiteItemDetailInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Enum_Order_Status>;
  supplier?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonalInformation = {
  __typename?: 'PersonalInformation';
  address?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  emails?: Maybe<Array<Maybe<ComponentContactsEMail>>>;
  fullName?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PersonalInformationRelationResponseCollection>;
  nationality?: Maybe<Scalars['String']['output']>;
  phones?: Maybe<Array<Maybe<ComponentContactsPhone>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socials?: Maybe<Array<Maybe<ComponentContactsSocial>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PersonalInformationEmailsArgs = {
  filters?: InputMaybe<ComponentContactsEMailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PersonalInformationLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type PersonalInformationPhonesArgs = {
  filters?: InputMaybe<ComponentContactsPhoneFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PersonalInformationSocialsArgs = {
  filters?: InputMaybe<ComponentContactsSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PersonalInformationEntity = {
  __typename?: 'PersonalInformationEntity';
  attributes?: Maybe<PersonalInformation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PersonalInformationEntityResponse = {
  __typename?: 'PersonalInformationEntityResponse';
  data?: Maybe<PersonalInformationEntity>;
};

export type PersonalInformationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  emails?: InputMaybe<Array<InputMaybe<ComponentContactsEMailInput>>>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<InputMaybe<ComponentContactsPhoneInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentContactsSocialInput>>>;
};

export type PersonalInformationRelationResponseCollection = {
  __typename?: 'PersonalInformationRelationResponseCollection';
  data: Array<PersonalInformationEntity>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<CategoryEntityResponse>;
  cost?: Maybe<Scalars['Float']['output']>;
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flavors?: Maybe<FlavorRelationResponseCollection>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAvailableInStore?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isOnlineAvailable?: Maybe<Scalars['Boolean']['output']>;
  isOnlineVisible?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<InventoryItemRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  presentationModes?: Maybe<Array<Maybe<ComponentKitsitePresentationMode>>>;
  price?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  suppliers?: Maybe<Array<Maybe<ComponentKitsiteProductSupplier>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProductFlavorsArgs = {
  filters?: InputMaybe<FlavorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductItemsArgs = {
  filters?: InputMaybe<InventoryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductPresentationModesArgs = {
  filters?: InputMaybe<ComponentKitsitePresentationModeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductSuppliersArgs = {
  filters?: InputMaybe<ComponentKitsiteProductSupplierFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  cost?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  flavors?: InputMaybe<FlavorFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  isAvailableInStore?: InputMaybe<BooleanFilterInput>;
  isFeatured?: InputMaybe<BooleanFilterInput>;
  isOnlineAvailable?: InputMaybe<BooleanFilterInput>;
  isOnlineVisible?: InputMaybe<BooleanFilterInput>;
  items?: InputMaybe<InventoryItemFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  presentationModes?: InputMaybe<ComponentKitsitePresentationModeFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  suppliers?: InputMaybe<ComponentKitsiteProductSupplierFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  flavors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAvailableInStore?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlineAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isOnlineVisible?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  presentationModes?: InputMaybe<Array<InputMaybe<ComponentKitsitePresentationModeInput>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  suppliers?: InputMaybe<Array<InputMaybe<ComponentKitsiteProductSupplierInput>>>;
};

export type ProductRelationResponseCollection = {
  __typename?: 'ProductRelationResponseCollection';
  data: Array<ProductEntity>;
};

export type Project = {
  __typename?: 'Project';
  Title?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  demoUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  githubUrl?: Maybe<Scalars['String']['output']>;
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  work_experience?: Maybe<WorkExperienceEntityResponse>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  demoUrl?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  githubUrl?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isPrivate?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  work_experience?: InputMaybe<WorkExperienceFiltersInput>;
};

export type ProjectInput = {
  Title?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['ID']['input']>;
  demoUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  work_experience?: InputMaybe<Scalars['ID']['input']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  flavor?: Maybe<FlavorEntityResponse>;
  flavors?: Maybe<FlavorEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  inventoryBatch?: Maybe<InventoryBatchEntityResponse>;
  inventoryBatches?: Maybe<InventoryBatchEntityResponseCollection>;
  inventoryItem?: Maybe<InventoryItemEntityResponse>;
  inventoryItems?: Maybe<InventoryItemEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  menus?: Maybe<MenuEntityResponseCollection>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  personalInformation?: Maybe<PersonalInformationEntityResponse>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  recipe?: Maybe<RecipeEntityResponse>;
  recipes?: Maybe<RecipeEntityResponseCollection>;
  resource?: Maybe<ResourceEntityResponse>;
  resources?: Maybe<ResourceEntityResponseCollection>;
  shift?: Maybe<ShiftEntityResponse>;
  shifts?: Maybe<ShiftEntityResponseCollection>;
  supplier?: Maybe<SupplierEntityResponse>;
  suppliers?: Maybe<SupplierEntityResponseCollection>;
  task?: Maybe<TaskEntityResponse>;
  tasks?: Maybe<TaskEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  webpage?: Maybe<WebpageEntityResponse>;
  webpages?: Maybe<WebpageEntityResponseCollection>;
  workExperience?: Maybe<WorkExperienceEntityResponse>;
  workExperiences?: Maybe<WorkExperienceEntityResponseCollection>;
  workingIndutries?: Maybe<WorkingIndutryEntityResponseCollection>;
  workingIndutry?: Maybe<WorkingIndutryEntityResponse>;
  workshop?: Maybe<WorkshopEntityResponse>;
  workshops?: Maybe<WorkshopEntityResponseCollection>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFlavorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFlavorsArgs = {
  filters?: InputMaybe<FlavorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInventoryBatchArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInventoryBatchesArgs = {
  filters?: InputMaybe<InventoryBatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInventoryItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInventoryItemsArgs = {
  filters?: InputMaybe<InventoryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusArgs = {
  filters?: InputMaybe<MenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPersonalInformationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRecipeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRecipesArgs = {
  filters?: InputMaybe<RecipeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResourceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryResourcesArgs = {
  filters?: InputMaybe<ResourceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryShiftArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShiftsArgs = {
  filters?: InputMaybe<ShiftFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySupplierArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySuppliersArgs = {
  filters?: InputMaybe<SupplierFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTaskArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTasksArgs = {
  filters?: InputMaybe<TaskFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebpageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWebpagesArgs = {
  filters?: InputMaybe<WebpageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkExperienceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWorkExperiencesArgs = {
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkingIndutriesArgs = {
  filters?: InputMaybe<WorkingIndutryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkingIndutryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWorkshopArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkshopsArgs = {
  filters?: InputMaybe<WorkshopFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Recipe = {
  __typename?: 'Recipe';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flavors?: Maybe<FlavorRelationResponseCollection>;
  ingredients?: Maybe<Array<Maybe<ComponentKitsiteItemDetail>>>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  steps?: Maybe<Array<Maybe<ComponentKitsiteRecipeStep>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type RecipeFlavorsArgs = {
  filters?: InputMaybe<FlavorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RecipeIngredientsArgs = {
  filters?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RecipeStepsArgs = {
  filters?: InputMaybe<ComponentKitsiteRecipeStepFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecipeEntity = {
  __typename?: 'RecipeEntity';
  attributes?: Maybe<Recipe>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RecipeEntityResponse = {
  __typename?: 'RecipeEntityResponse';
  data?: Maybe<RecipeEntity>;
};

export type RecipeEntityResponseCollection = {
  __typename?: 'RecipeEntityResponseCollection';
  data: Array<RecipeEntity>;
  meta: ResponseCollectionMeta;
};

export type RecipeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  flavors?: InputMaybe<FlavorFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<ComponentKitsiteItemDetailFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RecipeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecipeFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  steps?: InputMaybe<ComponentKitsiteRecipeStepFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type RecipeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  flavors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ingredients?: InputMaybe<Array<InputMaybe<ComponentKitsiteItemDetailInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  steps?: InputMaybe<Array<InputMaybe<ComponentKitsiteRecipeStepInput>>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type Resource = {
  __typename?: 'Resource';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  inventory_items?: Maybe<InventoryItemRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ResourceRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Enum_Resource_Status>;
  supplier?: Maybe<SupplierEntityResponse>;
  tasks?: Maybe<TaskRelationResponseCollection>;
  type?: Maybe<Enum_Resource_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ResourceInventory_ItemsArgs = {
  filters?: InputMaybe<InventoryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ResourceLocalizationsArgs = {
  filters?: InputMaybe<ResourceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ResourceTasksArgs = {
  filters?: InputMaybe<TaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResourceEntity = {
  __typename?: 'ResourceEntity';
  attributes?: Maybe<Resource>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ResourceEntityResponse = {
  __typename?: 'ResourceEntityResponse';
  data?: Maybe<ResourceEntity>;
};

export type ResourceEntityResponseCollection = {
  __typename?: 'ResourceEntityResponseCollection';
  data: Array<ResourceEntity>;
  meta: ResponseCollectionMeta;
};

export type ResourceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ResourceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inventory_items?: InputMaybe<InventoryItemFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ResourceFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ResourceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ResourceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  supplier?: InputMaybe<SupplierFiltersInput>;
  tasks?: InputMaybe<TaskFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ResourceInput = {
  inventory_items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Enum_Resource_Status>;
  supplier?: InputMaybe<Scalars['ID']['input']>;
  tasks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Enum_Resource_Type>;
};

export type ResourceRelationResponseCollection = {
  __typename?: 'ResourceRelationResponseCollection';
  data: Array<ResourceEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Shift = {
  __typename?: 'Shift';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  employee?: Maybe<UsersPermissionsUserEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  tasks?: Maybe<TaskRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ShiftTasksArgs = {
  filters?: InputMaybe<TaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ShiftEntity = {
  __typename?: 'ShiftEntity';
  attributes?: Maybe<Shift>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ShiftEntityResponse = {
  __typename?: 'ShiftEntityResponse';
  data?: Maybe<ShiftEntity>;
};

export type ShiftEntityResponseCollection = {
  __typename?: 'ShiftEntityResponseCollection';
  data: Array<ShiftEntity>;
  meta: ResponseCollectionMeta;
};

export type ShiftFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ShiftFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  duration?: InputMaybe<IntFilterInput>;
  employee?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ShiftFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ShiftFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tasks?: InputMaybe<TaskFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ShiftInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  employee?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tasks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Supplier = {
  __typename?: 'Supplier';
  contactInfo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryInfo?: Maybe<Array<Maybe<SupplierDeliveryInfoDynamicZone>>>;
  email?: Maybe<ComponentContactsEMail>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  order?: Maybe<OrderEntityResponse>;
  phone?: Maybe<ComponentContactsPhone>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<ResourceRelationResponseCollection>;
  socials?: Maybe<Array<Maybe<ComponentContactsSocial>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SupplierResourcesArgs = {
  filters?: InputMaybe<ResourceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SupplierSocialsArgs = {
  filters?: InputMaybe<ComponentContactsSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SupplierDeliveryInfoDynamicZone = ComponentLogisticsDeliveryByDate | ComponentLogisticsDeliveryByDaysOfTheWeek | ComponentLogisticsDeliveryByInternational | Error;

export type SupplierEntity = {
  __typename?: 'SupplierEntity';
  attributes?: Maybe<Supplier>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SupplierEntityResponse = {
  __typename?: 'SupplierEntityResponse';
  data?: Maybe<SupplierEntity>;
};

export type SupplierEntityResponseCollection = {
  __typename?: 'SupplierEntityResponseCollection';
  data: Array<SupplierEntity>;
  meta: ResponseCollectionMeta;
};

export type SupplierFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SupplierFiltersInput>>>;
  contactInfo?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<ComponentContactsEMailFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SupplierFiltersInput>;
  notes?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<SupplierFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  phone?: InputMaybe<ComponentContactsPhoneFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<IntFilterInput>;
  resources?: InputMaybe<ResourceFiltersInput>;
  socials?: InputMaybe<ComponentContactsSocialFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SupplierInput = {
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  deliveryInfo?: InputMaybe<Array<Scalars['SupplierDeliveryInfoDynamicZoneInput']['input']>>;
  email?: InputMaybe<ComponentContactsEMailInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<ComponentContactsPhoneInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  resources?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  socials?: InputMaybe<Array<InputMaybe<ComponentContactsSocialInput>>>;
};

export type Task = {
  __typename?: 'Task';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  frequency?: Maybe<Enum_Task_Frequency>;
  generalRating?: Maybe<ComponentKitsiteSelfAssessment>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TaskRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  procedure?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  resource?: Maybe<ResourceEntityResponse>;
  steps?: Maybe<Array<Maybe<ComponentKitsiteWorkflowItem>>>;
  type?: Maybe<Enum_Task_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TaskLocalizationsArgs = {
  filters?: InputMaybe<TaskFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TaskStepsArgs = {
  filters?: InputMaybe<ComponentKitsiteWorkflowItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TaskEntity = {
  __typename?: 'TaskEntity';
  attributes?: Maybe<Task>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TaskEntityResponse = {
  __typename?: 'TaskEntityResponse';
  data?: Maybe<TaskEntity>;
};

export type TaskEntityResponseCollection = {
  __typename?: 'TaskEntityResponseCollection';
  data: Array<TaskEntity>;
  meta: ResponseCollectionMeta;
};

export type TaskFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TaskFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  frequency?: InputMaybe<StringFilterInput>;
  generalRating?: InputMaybe<ComponentKitsiteSelfAssessmentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TaskFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TaskFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TaskFiltersInput>>>;
  procedure?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  resource?: InputMaybe<ResourceFiltersInput>;
  steps?: InputMaybe<ComponentKitsiteWorkflowItemFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TaskInput = {
  frequency?: InputMaybe<Enum_Task_Frequency>;
  generalRating?: InputMaybe<ComponentKitsiteSelfAssessmentInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  procedure?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resource?: InputMaybe<Scalars['ID']['input']>;
  steps?: InputMaybe<Array<InputMaybe<ComponentKitsiteWorkflowItemInput>>>;
  type?: InputMaybe<Enum_Task_Type>;
};

export type TaskRelationResponseCollection = {
  __typename?: 'TaskRelationResponseCollection';
  data: Array<TaskEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Webpage = {
  __typename?: 'Webpage';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Webpage_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WebpageEntity = {
  __typename?: 'WebpageEntity';
  attributes?: Maybe<Webpage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WebpageEntityResponse = {
  __typename?: 'WebpageEntityResponse';
  data?: Maybe<WebpageEntity>;
};

export type WebpageEntityResponseCollection = {
  __typename?: 'WebpageEntityResponseCollection';
  data: Array<WebpageEntity>;
  meta: ResponseCollectionMeta;
};

export type WebpageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WebpageFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WebpageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WebpageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WebpageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Webpage_Type>;
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WorkExperienceRelationResponseCollection>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  working_indutries?: Maybe<WorkingIndutryRelationResponseCollection>;
};


export type WorkExperienceLocalizationsArgs = {
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkExperienceProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkExperienceWorking_IndutriesArgs = {
  filters?: InputMaybe<WorkingIndutryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkExperienceEntity = {
  __typename?: 'WorkExperienceEntity';
  attributes?: Maybe<WorkExperience>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkExperienceEntityResponse = {
  __typename?: 'WorkExperienceEntityResponse';
  data?: Maybe<WorkExperienceEntity>;
};

export type WorkExperienceEntityResponseCollection = {
  __typename?: 'WorkExperienceEntityResponseCollection';
  data: Array<WorkExperienceEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkExperienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkExperienceFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WorkExperienceFiltersInput>;
  not?: InputMaybe<WorkExperienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkExperienceFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  working_indutries?: InputMaybe<WorkingIndutryFiltersInput>;
};

export type WorkExperienceInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  working_indutries?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type WorkExperienceRelationResponseCollection = {
  __typename?: 'WorkExperienceRelationResponseCollection';
  data: Array<WorkExperienceEntity>;
};

export type WorkingIndutry = {
  __typename?: 'WorkingIndutry';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  industryName?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WorkingIndutryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  work_experiences?: Maybe<WorkExperienceRelationResponseCollection>;
};


export type WorkingIndutryLocalizationsArgs = {
  filters?: InputMaybe<WorkingIndutryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkingIndutryWork_ExperiencesArgs = {
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkingIndutryEntity = {
  __typename?: 'WorkingIndutryEntity';
  attributes?: Maybe<WorkingIndutry>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkingIndutryEntityResponse = {
  __typename?: 'WorkingIndutryEntityResponse';
  data?: Maybe<WorkingIndutryEntity>;
};

export type WorkingIndutryEntityResponseCollection = {
  __typename?: 'WorkingIndutryEntityResponseCollection';
  data: Array<WorkingIndutryEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkingIndutryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkingIndutryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  industryName?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WorkingIndutryFiltersInput>;
  not?: InputMaybe<WorkingIndutryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkingIndutryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  work_experiences?: InputMaybe<WorkExperienceFiltersInput>;
};

export type WorkingIndutryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  industryName?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  work_experiences?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type WorkingIndutryRelationResponseCollection = {
  __typename?: 'WorkingIndutryRelationResponseCollection';
  data: Array<WorkingIndutryEntity>;
};

export type Workshop = {
  __typename?: 'Workshop';
  agenda?: Maybe<Scalars['String']['output']>;
  availableSlots?: Maybe<Scalars['Int']['output']>;
  coverImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  location?: Maybe<Scalars['String']['output']>;
  participants?: Maybe<Array<Maybe<ComponentEventsWorkshopParticipant>>>;
  price?: Maybe<Scalars['Float']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slides?: Maybe<UploadFileRelationResponseCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Enum_Workshop_State>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WorkshopGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkshopParticipantsArgs = {
  filters?: InputMaybe<ComponentEventsWorkshopParticipantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkshopSlidesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkshopEntity = {
  __typename?: 'WorkshopEntity';
  attributes?: Maybe<Workshop>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkshopEntityResponse = {
  __typename?: 'WorkshopEntityResponse';
  data?: Maybe<WorkshopEntity>;
};

export type WorkshopEntityResponseCollection = {
  __typename?: 'WorkshopEntityResponseCollection';
  data: Array<WorkshopEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkshopFiltersInput = {
  agenda?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WorkshopFiltersInput>>>;
  availableSlots?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  duration?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WorkshopFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkshopFiltersInput>>>;
  participants?: InputMaybe<ComponentEventsWorkshopParticipantFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WorkshopInput = {
  agenda?: InputMaybe<Scalars['String']['input']>;
  availableSlots?: InputMaybe<Scalars['Int']['input']>;
  coverImage?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<InputMaybe<ComponentEventsWorkshopParticipantInput>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slides?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Enum_Workshop_State>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CoverImageDataFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, url: string, caption?: string | null, alternativeText?: string | null } | null } | null };

export type ParticipantInfoFragment = { __typename?: 'ComponentEventsWorkshopParticipant', fullName?: string | null, requestDate?: any | null, requestStatus?: Enum_Componenteventsworkshopparticipant_Requeststatus | null, skillLevel?: Enum_Componenteventsworkshopparticipant_Skilllevel | null, numberOfParticipants?: number | null, unitPrice?: number | null };

export type GetAllWorkshopsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWorkshopsQuery = { __typename?: 'Query', workshops?: { __typename?: 'WorkshopEntityResponseCollection', data: Array<{ __typename?: 'WorkshopEntity', id?: string | null, attributes?: { __typename?: 'Workshop', title?: string | null, date?: any | null, duration?: number | null, agenda?: string | null, availableSlots?: number | null, price?: number | null, location?: string | null, state?: Enum_Workshop_State | null, coverImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', name: string, url: string, caption?: string | null, alternativeText?: string | null } | null } | null } | null, participants?: Array<{ __typename?: 'ComponentEventsWorkshopParticipant', fullName?: string | null, requestDate?: any | null, requestStatus?: Enum_Componenteventsworkshopparticipant_Requeststatus | null, skillLevel?: Enum_Componenteventsworkshopparticipant_Skilllevel | null, numberOfParticipants?: number | null, unitPrice?: number | null } | null> | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type GetWebsiteHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWebsiteHomepageQuery = { __typename?: 'Query', webpages?: { __typename?: 'WebpageEntityResponseCollection', data: Array<{ __typename?: 'WebpageEntity', attributes?: { __typename?: 'Webpage', title?: string | null, content?: string | null } | null }> } | null };

export type GetWorkshopIdBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetWorkshopIdBySlugQuery = { __typename?: 'Query', workshops?: { __typename?: 'WorkshopEntityResponseCollection', data: Array<{ __typename?: 'WorkshopEntity', id?: string | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export const CoverImageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoverImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]} as unknown as DocumentNode<CoverImageDataFragment, unknown>;
export const ParticipantInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParticipantInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentEventsWorkshopParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"requestDate"}},{"kind":"Field","name":{"kind":"Name","value":"requestStatus"}},{"kind":"Field","name":{"kind":"Name","value":"skillLevel"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfParticipants"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]} as unknown as DocumentNode<ParticipantInfoFragment, unknown>;
export const GetAllWorkshopsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllWorkshops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workshops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"PREVIEW"}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"agenda"}},{"kind":"Field","name":{"kind":"Name","value":"availableSlots"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoverImageData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParticipantInfo"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoverImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UploadFileEntityResponse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParticipantInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentEventsWorkshopParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"requestDate"}},{"kind":"Field","name":{"kind":"Name","value":"requestStatus"}},{"kind":"Field","name":{"kind":"Name","value":"skillLevel"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfParticipants"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]} as unknown as DocumentNode<GetAllWorkshopsQuery, GetAllWorkshopsQueryVariables>;
export const GetWebsiteHomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWebsiteHomepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webpages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"dream-lab-solutions","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWebsiteHomepageQuery, GetWebsiteHomepageQueryVariables>;
export const GetWorkshopIdBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWorkshopIDBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workshops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkshopIdBySlugQuery, GetWorkshopIdBySlugQueryVariables>;