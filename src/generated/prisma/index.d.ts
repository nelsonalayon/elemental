
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model independence
 * 
 */
export type independence = $Result.DefaultSelection<Prisma.$independencePayload>
/**
 * Model freedom
 * 
 */
export type freedom = $Result.DefaultSelection<Prisma.$freedomPayload>
/**
 * Model apto
 * 
 */
export type apto = $Result.DefaultSelection<Prisma.$aptoPayload>
/**
 * Model persona
 * 
 */
export type persona = $Result.DefaultSelection<Prisma.$personaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Independences
 * const independences = await prisma.independence.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Independences
   * const independences = await prisma.independence.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.independence`: Exposes CRUD operations for the **independence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Independences
    * const independences = await prisma.independence.findMany()
    * ```
    */
  get independence(): Prisma.independenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freedom`: Exposes CRUD operations for the **freedom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freedoms
    * const freedoms = await prisma.freedom.findMany()
    * ```
    */
  get freedom(): Prisma.freedomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apto`: Exposes CRUD operations for the **apto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aptos
    * const aptos = await prisma.apto.findMany()
    * ```
    */
  get apto(): Prisma.aptoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.personaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    independence: 'independence',
    freedom: 'freedom',
    apto: 'apto',
    persona: 'persona'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "independence" | "freedom" | "apto" | "persona"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      independence: {
        payload: Prisma.$independencePayload<ExtArgs>
        fields: Prisma.independenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.independenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.independenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          findFirst: {
            args: Prisma.independenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.independenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          findMany: {
            args: Prisma.independenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>[]
          }
          create: {
            args: Prisma.independenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          createMany: {
            args: Prisma.independenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.independenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          update: {
            args: Prisma.independenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          deleteMany: {
            args: Prisma.independenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.independenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.independenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$independencePayload>
          }
          aggregate: {
            args: Prisma.IndependenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndependence>
          }
          groupBy: {
            args: Prisma.independenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndependenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.independenceCountArgs<ExtArgs>
            result: $Utils.Optional<IndependenceCountAggregateOutputType> | number
          }
        }
      }
      freedom: {
        payload: Prisma.$freedomPayload<ExtArgs>
        fields: Prisma.freedomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.freedomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.freedomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          findFirst: {
            args: Prisma.freedomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.freedomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          findMany: {
            args: Prisma.freedomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>[]
          }
          create: {
            args: Prisma.freedomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          createMany: {
            args: Prisma.freedomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.freedomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          update: {
            args: Prisma.freedomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          deleteMany: {
            args: Prisma.freedomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.freedomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.freedomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freedomPayload>
          }
          aggregate: {
            args: Prisma.FreedomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreedom>
          }
          groupBy: {
            args: Prisma.freedomGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreedomGroupByOutputType>[]
          }
          count: {
            args: Prisma.freedomCountArgs<ExtArgs>
            result: $Utils.Optional<FreedomCountAggregateOutputType> | number
          }
        }
      }
      apto: {
        payload: Prisma.$aptoPayload<ExtArgs>
        fields: Prisma.aptoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aptoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aptoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          findFirst: {
            args: Prisma.aptoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aptoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          findMany: {
            args: Prisma.aptoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>[]
          }
          create: {
            args: Prisma.aptoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          createMany: {
            args: Prisma.aptoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.aptoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          update: {
            args: Prisma.aptoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          deleteMany: {
            args: Prisma.aptoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aptoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.aptoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aptoPayload>
          }
          aggregate: {
            args: Prisma.AptoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApto>
          }
          groupBy: {
            args: Prisma.aptoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AptoGroupByOutputType>[]
          }
          count: {
            args: Prisma.aptoCountArgs<ExtArgs>
            result: $Utils.Optional<AptoCountAggregateOutputType> | number
          }
        }
      }
      persona: {
        payload: Prisma.$personaPayload<ExtArgs>
        fields: Prisma.personaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findFirst: {
            args: Prisma.personaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findMany: {
            args: Prisma.personaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          create: {
            args: Prisma.personaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          createMany: {
            args: Prisma.personaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          update: {
            args: Prisma.personaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          deleteMany: {
            args: Prisma.personaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.personaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.personaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    independence?: independenceOmit
    freedom?: freedomOmit
    apto?: aptoOmit
    persona?: personaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AptoCountOutputType
   */

  export type AptoCountOutputType = {
    independence: number
  }

  export type AptoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    independence?: boolean | AptoCountOutputTypeCountIndependenceArgs
  }

  // Custom InputTypes
  /**
   * AptoCountOutputType without action
   */
  export type AptoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptoCountOutputType
     */
    select?: AptoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AptoCountOutputType without action
   */
  export type AptoCountOutputTypeCountIndependenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: independenceWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    independence_independence_personaTopersona: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    independence_independence_personaTopersona?: boolean | PersonaCountOutputTypeCountIndependence_independence_personaTopersonaArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountIndependence_independence_personaTopersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: independenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model independence
   */

  export type AggregateIndependence = {
    _count: IndependenceCountAggregateOutputType | null
    _avg: IndependenceAvgAggregateOutputType | null
    _sum: IndependenceSumAggregateOutputType | null
    _min: IndependenceMinAggregateOutputType | null
    _max: IndependenceMaxAggregateOutputType | null
  }

  export type IndependenceAvgAggregateOutputType = {
    idPago: number | null
    valorEsperado: number | null
    valorPagado: number | null
  }

  export type IndependenceSumAggregateOutputType = {
    idPago: number | null
    valorEsperado: number | null
    valorPagado: number | null
  }

  export type IndependenceMinAggregateOutputType = {
    idPago: number | null
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
  }

  export type IndependenceMaxAggregateOutputType = {
    idPago: number | null
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
  }

  export type IndependenceCountAggregateOutputType = {
    idPago: number
    referenciApto: number
    persona: number
    concepto: number
    fechaPago: number
    valorEsperado: number
    valorPagado: number
    consignacion: number
    _all: number
  }


  export type IndependenceAvgAggregateInputType = {
    idPago?: true
    valorEsperado?: true
    valorPagado?: true
  }

  export type IndependenceSumAggregateInputType = {
    idPago?: true
    valorEsperado?: true
    valorPagado?: true
  }

  export type IndependenceMinAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
  }

  export type IndependenceMaxAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
  }

  export type IndependenceCountAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
    _all?: true
  }

  export type IndependenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which independence to aggregate.
     */
    where?: independenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of independences to fetch.
     */
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: independenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` independences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` independences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned independences
    **/
    _count?: true | IndependenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndependenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndependenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndependenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndependenceMaxAggregateInputType
  }

  export type GetIndependenceAggregateType<T extends IndependenceAggregateArgs> = {
        [P in keyof T & keyof AggregateIndependence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndependence[P]>
      : GetScalarType<T[P], AggregateIndependence[P]>
  }




  export type independenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: independenceWhereInput
    orderBy?: independenceOrderByWithAggregationInput | independenceOrderByWithAggregationInput[]
    by: IndependenceScalarFieldEnum[] | IndependenceScalarFieldEnum
    having?: independenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndependenceCountAggregateInputType | true
    _avg?: IndependenceAvgAggregateInputType
    _sum?: IndependenceSumAggregateInputType
    _min?: IndependenceMinAggregateInputType
    _max?: IndependenceMaxAggregateInputType
  }

  export type IndependenceGroupByOutputType = {
    idPago: number
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
    _count: IndependenceCountAggregateOutputType | null
    _avg: IndependenceAvgAggregateOutputType | null
    _sum: IndependenceSumAggregateOutputType | null
    _min: IndependenceMinAggregateOutputType | null
    _max: IndependenceMaxAggregateOutputType | null
  }

  type GetIndependenceGroupByPayload<T extends independenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndependenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndependenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndependenceGroupByOutputType[P]>
            : GetScalarType<T[P], IndependenceGroupByOutputType[P]>
        }
      >
    >


  export type independenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPago?: boolean
    referenciApto?: boolean
    persona?: boolean
    concepto?: boolean
    fechaPago?: boolean
    valorEsperado?: boolean
    valorPagado?: boolean
    consignacion?: boolean
    persona_independence_personaTopersona?: boolean | independence$persona_independence_personaTopersonaArgs<ExtArgs>
    apto?: boolean | independence$aptoArgs<ExtArgs>
  }, ExtArgs["result"]["independence"]>



  export type independenceSelectScalar = {
    idPago?: boolean
    referenciApto?: boolean
    persona?: boolean
    concepto?: boolean
    fechaPago?: boolean
    valorEsperado?: boolean
    valorPagado?: boolean
    consignacion?: boolean
  }

  export type independenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPago" | "referenciApto" | "persona" | "concepto" | "fechaPago" | "valorEsperado" | "valorPagado" | "consignacion", ExtArgs["result"]["independence"]>
  export type independenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona_independence_personaTopersona?: boolean | independence$persona_independence_personaTopersonaArgs<ExtArgs>
    apto?: boolean | independence$aptoArgs<ExtArgs>
  }

  export type $independencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "independence"
    objects: {
      persona_independence_personaTopersona: Prisma.$personaPayload<ExtArgs> | null
      apto: Prisma.$aptoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idPago: number
      referenciApto: string | null
      persona: string | null
      concepto: string | null
      fechaPago: Date | null
      valorEsperado: number | null
      valorPagado: number | null
      consignacion: string | null
    }, ExtArgs["result"]["independence"]>
    composites: {}
  }

  type independenceGetPayload<S extends boolean | null | undefined | independenceDefaultArgs> = $Result.GetResult<Prisma.$independencePayload, S>

  type independenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<independenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndependenceCountAggregateInputType | true
    }

  export interface independenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['independence'], meta: { name: 'independence' } }
    /**
     * Find zero or one Independence that matches the filter.
     * @param {independenceFindUniqueArgs} args - Arguments to find a Independence
     * @example
     * // Get one Independence
     * const independence = await prisma.independence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends independenceFindUniqueArgs>(args: SelectSubset<T, independenceFindUniqueArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Independence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {independenceFindUniqueOrThrowArgs} args - Arguments to find a Independence
     * @example
     * // Get one Independence
     * const independence = await prisma.independence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends independenceFindUniqueOrThrowArgs>(args: SelectSubset<T, independenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Independence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceFindFirstArgs} args - Arguments to find a Independence
     * @example
     * // Get one Independence
     * const independence = await prisma.independence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends independenceFindFirstArgs>(args?: SelectSubset<T, independenceFindFirstArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Independence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceFindFirstOrThrowArgs} args - Arguments to find a Independence
     * @example
     * // Get one Independence
     * const independence = await prisma.independence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends independenceFindFirstOrThrowArgs>(args?: SelectSubset<T, independenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Independences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Independences
     * const independences = await prisma.independence.findMany()
     * 
     * // Get first 10 Independences
     * const independences = await prisma.independence.findMany({ take: 10 })
     * 
     * // Only select the `idPago`
     * const independenceWithIdPagoOnly = await prisma.independence.findMany({ select: { idPago: true } })
     * 
     */
    findMany<T extends independenceFindManyArgs>(args?: SelectSubset<T, independenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Independence.
     * @param {independenceCreateArgs} args - Arguments to create a Independence.
     * @example
     * // Create one Independence
     * const Independence = await prisma.independence.create({
     *   data: {
     *     // ... data to create a Independence
     *   }
     * })
     * 
     */
    create<T extends independenceCreateArgs>(args: SelectSubset<T, independenceCreateArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Independences.
     * @param {independenceCreateManyArgs} args - Arguments to create many Independences.
     * @example
     * // Create many Independences
     * const independence = await prisma.independence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends independenceCreateManyArgs>(args?: SelectSubset<T, independenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Independence.
     * @param {independenceDeleteArgs} args - Arguments to delete one Independence.
     * @example
     * // Delete one Independence
     * const Independence = await prisma.independence.delete({
     *   where: {
     *     // ... filter to delete one Independence
     *   }
     * })
     * 
     */
    delete<T extends independenceDeleteArgs>(args: SelectSubset<T, independenceDeleteArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Independence.
     * @param {independenceUpdateArgs} args - Arguments to update one Independence.
     * @example
     * // Update one Independence
     * const independence = await prisma.independence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends independenceUpdateArgs>(args: SelectSubset<T, independenceUpdateArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Independences.
     * @param {independenceDeleteManyArgs} args - Arguments to filter Independences to delete.
     * @example
     * // Delete a few Independences
     * const { count } = await prisma.independence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends independenceDeleteManyArgs>(args?: SelectSubset<T, independenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Independences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Independences
     * const independence = await prisma.independence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends independenceUpdateManyArgs>(args: SelectSubset<T, independenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Independence.
     * @param {independenceUpsertArgs} args - Arguments to update or create a Independence.
     * @example
     * // Update or create a Independence
     * const independence = await prisma.independence.upsert({
     *   create: {
     *     // ... data to create a Independence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Independence we want to update
     *   }
     * })
     */
    upsert<T extends independenceUpsertArgs>(args: SelectSubset<T, independenceUpsertArgs<ExtArgs>>): Prisma__independenceClient<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Independences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceCountArgs} args - Arguments to filter Independences to count.
     * @example
     * // Count the number of Independences
     * const count = await prisma.independence.count({
     *   where: {
     *     // ... the filter for the Independences we want to count
     *   }
     * })
    **/
    count<T extends independenceCountArgs>(
      args?: Subset<T, independenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndependenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Independence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndependenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndependenceAggregateArgs>(args: Subset<T, IndependenceAggregateArgs>): Prisma.PrismaPromise<GetIndependenceAggregateType<T>>

    /**
     * Group by Independence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {independenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends independenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: independenceGroupByArgs['orderBy'] }
        : { orderBy?: independenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, independenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndependenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the independence model
   */
  readonly fields: independenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for independence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__independenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona_independence_personaTopersona<T extends independence$persona_independence_personaTopersonaArgs<ExtArgs> = {}>(args?: Subset<T, independence$persona_independence_personaTopersonaArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apto<T extends independence$aptoArgs<ExtArgs> = {}>(args?: Subset<T, independence$aptoArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the independence model
   */
  interface independenceFieldRefs {
    readonly idPago: FieldRef<"independence", 'Int'>
    readonly referenciApto: FieldRef<"independence", 'String'>
    readonly persona: FieldRef<"independence", 'String'>
    readonly concepto: FieldRef<"independence", 'String'>
    readonly fechaPago: FieldRef<"independence", 'DateTime'>
    readonly valorEsperado: FieldRef<"independence", 'Int'>
    readonly valorPagado: FieldRef<"independence", 'Int'>
    readonly consignacion: FieldRef<"independence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * independence findUnique
   */
  export type independenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter, which independence to fetch.
     */
    where: independenceWhereUniqueInput
  }

  /**
   * independence findUniqueOrThrow
   */
  export type independenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter, which independence to fetch.
     */
    where: independenceWhereUniqueInput
  }

  /**
   * independence findFirst
   */
  export type independenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter, which independence to fetch.
     */
    where?: independenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of independences to fetch.
     */
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for independences.
     */
    cursor?: independenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` independences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` independences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of independences.
     */
    distinct?: IndependenceScalarFieldEnum | IndependenceScalarFieldEnum[]
  }

  /**
   * independence findFirstOrThrow
   */
  export type independenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter, which independence to fetch.
     */
    where?: independenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of independences to fetch.
     */
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for independences.
     */
    cursor?: independenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` independences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` independences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of independences.
     */
    distinct?: IndependenceScalarFieldEnum | IndependenceScalarFieldEnum[]
  }

  /**
   * independence findMany
   */
  export type independenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter, which independences to fetch.
     */
    where?: independenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of independences to fetch.
     */
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing independences.
     */
    cursor?: independenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` independences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` independences.
     */
    skip?: number
    distinct?: IndependenceScalarFieldEnum | IndependenceScalarFieldEnum[]
  }

  /**
   * independence create
   */
  export type independenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * The data needed to create a independence.
     */
    data?: XOR<independenceCreateInput, independenceUncheckedCreateInput>
  }

  /**
   * independence createMany
   */
  export type independenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many independences.
     */
    data: independenceCreateManyInput | independenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * independence update
   */
  export type independenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * The data needed to update a independence.
     */
    data: XOR<independenceUpdateInput, independenceUncheckedUpdateInput>
    /**
     * Choose, which independence to update.
     */
    where: independenceWhereUniqueInput
  }

  /**
   * independence updateMany
   */
  export type independenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update independences.
     */
    data: XOR<independenceUpdateManyMutationInput, independenceUncheckedUpdateManyInput>
    /**
     * Filter which independences to update
     */
    where?: independenceWhereInput
    /**
     * Limit how many independences to update.
     */
    limit?: number
  }

  /**
   * independence upsert
   */
  export type independenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * The filter to search for the independence to update in case it exists.
     */
    where: independenceWhereUniqueInput
    /**
     * In case the independence found by the `where` argument doesn't exist, create a new independence with this data.
     */
    create: XOR<independenceCreateInput, independenceUncheckedCreateInput>
    /**
     * In case the independence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<independenceUpdateInput, independenceUncheckedUpdateInput>
  }

  /**
   * independence delete
   */
  export type independenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    /**
     * Filter which independence to delete.
     */
    where: independenceWhereUniqueInput
  }

  /**
   * independence deleteMany
   */
  export type independenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which independences to delete
     */
    where?: independenceWhereInput
    /**
     * Limit how many independences to delete.
     */
    limit?: number
  }

  /**
   * independence.persona_independence_personaTopersona
   */
  export type independence$persona_independence_personaTopersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    where?: personaWhereInput
  }

  /**
   * independence.apto
   */
  export type independence$aptoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    where?: aptoWhereInput
  }

  /**
   * independence without action
   */
  export type independenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
  }


  /**
   * Model freedom
   */

  export type AggregateFreedom = {
    _count: FreedomCountAggregateOutputType | null
    _avg: FreedomAvgAggregateOutputType | null
    _sum: FreedomSumAggregateOutputType | null
    _min: FreedomMinAggregateOutputType | null
    _max: FreedomMaxAggregateOutputType | null
  }

  export type FreedomAvgAggregateOutputType = {
    idPago: number | null
    valorEsperado: number | null
    valorPagado: number | null
  }

  export type FreedomSumAggregateOutputType = {
    idPago: number | null
    valorEsperado: number | null
    valorPagado: number | null
  }

  export type FreedomMinAggregateOutputType = {
    idPago: number | null
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
  }

  export type FreedomMaxAggregateOutputType = {
    idPago: number | null
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
  }

  export type FreedomCountAggregateOutputType = {
    idPago: number
    referenciApto: number
    persona: number
    concepto: number
    fechaPago: number
    valorEsperado: number
    valorPagado: number
    consignacion: number
    _all: number
  }


  export type FreedomAvgAggregateInputType = {
    idPago?: true
    valorEsperado?: true
    valorPagado?: true
  }

  export type FreedomSumAggregateInputType = {
    idPago?: true
    valorEsperado?: true
    valorPagado?: true
  }

  export type FreedomMinAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
  }

  export type FreedomMaxAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
  }

  export type FreedomCountAggregateInputType = {
    idPago?: true
    referenciApto?: true
    persona?: true
    concepto?: true
    fechaPago?: true
    valorEsperado?: true
    valorPagado?: true
    consignacion?: true
    _all?: true
  }

  export type FreedomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freedom to aggregate.
     */
    where?: freedomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freedoms to fetch.
     */
    orderBy?: freedomOrderByWithRelationInput | freedomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: freedomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freedoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freedoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned freedoms
    **/
    _count?: true | FreedomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreedomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreedomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreedomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreedomMaxAggregateInputType
  }

  export type GetFreedomAggregateType<T extends FreedomAggregateArgs> = {
        [P in keyof T & keyof AggregateFreedom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreedom[P]>
      : GetScalarType<T[P], AggregateFreedom[P]>
  }




  export type freedomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freedomWhereInput
    orderBy?: freedomOrderByWithAggregationInput | freedomOrderByWithAggregationInput[]
    by: FreedomScalarFieldEnum[] | FreedomScalarFieldEnum
    having?: freedomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreedomCountAggregateInputType | true
    _avg?: FreedomAvgAggregateInputType
    _sum?: FreedomSumAggregateInputType
    _min?: FreedomMinAggregateInputType
    _max?: FreedomMaxAggregateInputType
  }

  export type FreedomGroupByOutputType = {
    idPago: number
    referenciApto: string | null
    persona: string | null
    concepto: string | null
    fechaPago: Date | null
    valorEsperado: number | null
    valorPagado: number | null
    consignacion: string | null
    _count: FreedomCountAggregateOutputType | null
    _avg: FreedomAvgAggregateOutputType | null
    _sum: FreedomSumAggregateOutputType | null
    _min: FreedomMinAggregateOutputType | null
    _max: FreedomMaxAggregateOutputType | null
  }

  type GetFreedomGroupByPayload<T extends freedomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreedomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreedomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreedomGroupByOutputType[P]>
            : GetScalarType<T[P], FreedomGroupByOutputType[P]>
        }
      >
    >


  export type freedomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPago?: boolean
    referenciApto?: boolean
    persona?: boolean
    concepto?: boolean
    fechaPago?: boolean
    valorEsperado?: boolean
    valorPagado?: boolean
    consignacion?: boolean
  }, ExtArgs["result"]["freedom"]>



  export type freedomSelectScalar = {
    idPago?: boolean
    referenciApto?: boolean
    persona?: boolean
    concepto?: boolean
    fechaPago?: boolean
    valorEsperado?: boolean
    valorPagado?: boolean
    consignacion?: boolean
  }

  export type freedomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPago" | "referenciApto" | "persona" | "concepto" | "fechaPago" | "valorEsperado" | "valorPagado" | "consignacion", ExtArgs["result"]["freedom"]>

  export type $freedomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "freedom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idPago: number
      referenciApto: string | null
      persona: string | null
      concepto: string | null
      fechaPago: Date | null
      valorEsperado: number | null
      valorPagado: number | null
      consignacion: string | null
    }, ExtArgs["result"]["freedom"]>
    composites: {}
  }

  type freedomGetPayload<S extends boolean | null | undefined | freedomDefaultArgs> = $Result.GetResult<Prisma.$freedomPayload, S>

  type freedomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<freedomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreedomCountAggregateInputType | true
    }

  export interface freedomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freedom'], meta: { name: 'freedom' } }
    /**
     * Find zero or one Freedom that matches the filter.
     * @param {freedomFindUniqueArgs} args - Arguments to find a Freedom
     * @example
     * // Get one Freedom
     * const freedom = await prisma.freedom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends freedomFindUniqueArgs>(args: SelectSubset<T, freedomFindUniqueArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Freedom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {freedomFindUniqueOrThrowArgs} args - Arguments to find a Freedom
     * @example
     * // Get one Freedom
     * const freedom = await prisma.freedom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends freedomFindUniqueOrThrowArgs>(args: SelectSubset<T, freedomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freedom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomFindFirstArgs} args - Arguments to find a Freedom
     * @example
     * // Get one Freedom
     * const freedom = await prisma.freedom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends freedomFindFirstArgs>(args?: SelectSubset<T, freedomFindFirstArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freedom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomFindFirstOrThrowArgs} args - Arguments to find a Freedom
     * @example
     * // Get one Freedom
     * const freedom = await prisma.freedom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends freedomFindFirstOrThrowArgs>(args?: SelectSubset<T, freedomFindFirstOrThrowArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Freedoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freedoms
     * const freedoms = await prisma.freedom.findMany()
     * 
     * // Get first 10 Freedoms
     * const freedoms = await prisma.freedom.findMany({ take: 10 })
     * 
     * // Only select the `idPago`
     * const freedomWithIdPagoOnly = await prisma.freedom.findMany({ select: { idPago: true } })
     * 
     */
    findMany<T extends freedomFindManyArgs>(args?: SelectSubset<T, freedomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Freedom.
     * @param {freedomCreateArgs} args - Arguments to create a Freedom.
     * @example
     * // Create one Freedom
     * const Freedom = await prisma.freedom.create({
     *   data: {
     *     // ... data to create a Freedom
     *   }
     * })
     * 
     */
    create<T extends freedomCreateArgs>(args: SelectSubset<T, freedomCreateArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Freedoms.
     * @param {freedomCreateManyArgs} args - Arguments to create many Freedoms.
     * @example
     * // Create many Freedoms
     * const freedom = await prisma.freedom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends freedomCreateManyArgs>(args?: SelectSubset<T, freedomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Freedom.
     * @param {freedomDeleteArgs} args - Arguments to delete one Freedom.
     * @example
     * // Delete one Freedom
     * const Freedom = await prisma.freedom.delete({
     *   where: {
     *     // ... filter to delete one Freedom
     *   }
     * })
     * 
     */
    delete<T extends freedomDeleteArgs>(args: SelectSubset<T, freedomDeleteArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Freedom.
     * @param {freedomUpdateArgs} args - Arguments to update one Freedom.
     * @example
     * // Update one Freedom
     * const freedom = await prisma.freedom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends freedomUpdateArgs>(args: SelectSubset<T, freedomUpdateArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Freedoms.
     * @param {freedomDeleteManyArgs} args - Arguments to filter Freedoms to delete.
     * @example
     * // Delete a few Freedoms
     * const { count } = await prisma.freedom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends freedomDeleteManyArgs>(args?: SelectSubset<T, freedomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freedoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freedoms
     * const freedom = await prisma.freedom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends freedomUpdateManyArgs>(args: SelectSubset<T, freedomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Freedom.
     * @param {freedomUpsertArgs} args - Arguments to update or create a Freedom.
     * @example
     * // Update or create a Freedom
     * const freedom = await prisma.freedom.upsert({
     *   create: {
     *     // ... data to create a Freedom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freedom we want to update
     *   }
     * })
     */
    upsert<T extends freedomUpsertArgs>(args: SelectSubset<T, freedomUpsertArgs<ExtArgs>>): Prisma__freedomClient<$Result.GetResult<Prisma.$freedomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Freedoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomCountArgs} args - Arguments to filter Freedoms to count.
     * @example
     * // Count the number of Freedoms
     * const count = await prisma.freedom.count({
     *   where: {
     *     // ... the filter for the Freedoms we want to count
     *   }
     * })
    **/
    count<T extends freedomCountArgs>(
      args?: Subset<T, freedomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreedomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freedom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreedomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreedomAggregateArgs>(args: Subset<T, FreedomAggregateArgs>): Prisma.PrismaPromise<GetFreedomAggregateType<T>>

    /**
     * Group by Freedom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freedomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends freedomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freedomGroupByArgs['orderBy'] }
        : { orderBy?: freedomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, freedomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreedomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the freedom model
   */
  readonly fields: freedomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freedom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freedomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the freedom model
   */
  interface freedomFieldRefs {
    readonly idPago: FieldRef<"freedom", 'Int'>
    readonly referenciApto: FieldRef<"freedom", 'String'>
    readonly persona: FieldRef<"freedom", 'String'>
    readonly concepto: FieldRef<"freedom", 'String'>
    readonly fechaPago: FieldRef<"freedom", 'DateTime'>
    readonly valorEsperado: FieldRef<"freedom", 'Int'>
    readonly valorPagado: FieldRef<"freedom", 'Int'>
    readonly consignacion: FieldRef<"freedom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * freedom findUnique
   */
  export type freedomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter, which freedom to fetch.
     */
    where: freedomWhereUniqueInput
  }

  /**
   * freedom findUniqueOrThrow
   */
  export type freedomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter, which freedom to fetch.
     */
    where: freedomWhereUniqueInput
  }

  /**
   * freedom findFirst
   */
  export type freedomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter, which freedom to fetch.
     */
    where?: freedomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freedoms to fetch.
     */
    orderBy?: freedomOrderByWithRelationInput | freedomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freedoms.
     */
    cursor?: freedomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freedoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freedoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freedoms.
     */
    distinct?: FreedomScalarFieldEnum | FreedomScalarFieldEnum[]
  }

  /**
   * freedom findFirstOrThrow
   */
  export type freedomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter, which freedom to fetch.
     */
    where?: freedomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freedoms to fetch.
     */
    orderBy?: freedomOrderByWithRelationInput | freedomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freedoms.
     */
    cursor?: freedomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freedoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freedoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freedoms.
     */
    distinct?: FreedomScalarFieldEnum | FreedomScalarFieldEnum[]
  }

  /**
   * freedom findMany
   */
  export type freedomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter, which freedoms to fetch.
     */
    where?: freedomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freedoms to fetch.
     */
    orderBy?: freedomOrderByWithRelationInput | freedomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing freedoms.
     */
    cursor?: freedomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freedoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freedoms.
     */
    skip?: number
    distinct?: FreedomScalarFieldEnum | FreedomScalarFieldEnum[]
  }

  /**
   * freedom create
   */
  export type freedomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * The data needed to create a freedom.
     */
    data?: XOR<freedomCreateInput, freedomUncheckedCreateInput>
  }

  /**
   * freedom createMany
   */
  export type freedomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freedoms.
     */
    data: freedomCreateManyInput | freedomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * freedom update
   */
  export type freedomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * The data needed to update a freedom.
     */
    data: XOR<freedomUpdateInput, freedomUncheckedUpdateInput>
    /**
     * Choose, which freedom to update.
     */
    where: freedomWhereUniqueInput
  }

  /**
   * freedom updateMany
   */
  export type freedomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freedoms.
     */
    data: XOR<freedomUpdateManyMutationInput, freedomUncheckedUpdateManyInput>
    /**
     * Filter which freedoms to update
     */
    where?: freedomWhereInput
    /**
     * Limit how many freedoms to update.
     */
    limit?: number
  }

  /**
   * freedom upsert
   */
  export type freedomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * The filter to search for the freedom to update in case it exists.
     */
    where: freedomWhereUniqueInput
    /**
     * In case the freedom found by the `where` argument doesn't exist, create a new freedom with this data.
     */
    create: XOR<freedomCreateInput, freedomUncheckedCreateInput>
    /**
     * In case the freedom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freedomUpdateInput, freedomUncheckedUpdateInput>
  }

  /**
   * freedom delete
   */
  export type freedomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
    /**
     * Filter which freedom to delete.
     */
    where: freedomWhereUniqueInput
  }

  /**
   * freedom deleteMany
   */
  export type freedomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freedoms to delete
     */
    where?: freedomWhereInput
    /**
     * Limit how many freedoms to delete.
     */
    limit?: number
  }

  /**
   * freedom without action
   */
  export type freedomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freedom
     */
    select?: freedomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freedom
     */
    omit?: freedomOmit<ExtArgs> | null
  }


  /**
   * Model apto
   */

  export type AggregateApto = {
    _count: AptoCountAggregateOutputType | null
    _avg: AptoAvgAggregateOutputType | null
    _sum: AptoSumAggregateOutputType | null
    _min: AptoMinAggregateOutputType | null
    _max: AptoMaxAggregateOutputType | null
  }

  export type AptoAvgAggregateOutputType = {
    valor: number | null
    cuota_inicial: number | null
  }

  export type AptoSumAggregateOutputType = {
    valor: number | null
    cuota_inicial: number | null
  }

  export type AptoMinAggregateOutputType = {
    idapto: string | null
    nombre: string | null
    valor: number | null
    cuota_inicial: number | null
    fecha_de_entrega: Date | null
    linkConsignacion: string | null
  }

  export type AptoMaxAggregateOutputType = {
    idapto: string | null
    nombre: string | null
    valor: number | null
    cuota_inicial: number | null
    fecha_de_entrega: Date | null
    linkConsignacion: string | null
  }

  export type AptoCountAggregateOutputType = {
    idapto: number
    nombre: number
    valor: number
    cuota_inicial: number
    fecha_de_entrega: number
    linkConsignacion: number
    _all: number
  }


  export type AptoAvgAggregateInputType = {
    valor?: true
    cuota_inicial?: true
  }

  export type AptoSumAggregateInputType = {
    valor?: true
    cuota_inicial?: true
  }

  export type AptoMinAggregateInputType = {
    idapto?: true
    nombre?: true
    valor?: true
    cuota_inicial?: true
    fecha_de_entrega?: true
    linkConsignacion?: true
  }

  export type AptoMaxAggregateInputType = {
    idapto?: true
    nombre?: true
    valor?: true
    cuota_inicial?: true
    fecha_de_entrega?: true
    linkConsignacion?: true
  }

  export type AptoCountAggregateInputType = {
    idapto?: true
    nombre?: true
    valor?: true
    cuota_inicial?: true
    fecha_de_entrega?: true
    linkConsignacion?: true
    _all?: true
  }

  export type AptoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apto to aggregate.
     */
    where?: aptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aptos to fetch.
     */
    orderBy?: aptoOrderByWithRelationInput | aptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aptos
    **/
    _count?: true | AptoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AptoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AptoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AptoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AptoMaxAggregateInputType
  }

  export type GetAptoAggregateType<T extends AptoAggregateArgs> = {
        [P in keyof T & keyof AggregateApto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApto[P]>
      : GetScalarType<T[P], AggregateApto[P]>
  }




  export type aptoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aptoWhereInput
    orderBy?: aptoOrderByWithAggregationInput | aptoOrderByWithAggregationInput[]
    by: AptoScalarFieldEnum[] | AptoScalarFieldEnum
    having?: aptoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AptoCountAggregateInputType | true
    _avg?: AptoAvgAggregateInputType
    _sum?: AptoSumAggregateInputType
    _min?: AptoMinAggregateInputType
    _max?: AptoMaxAggregateInputType
  }

  export type AptoGroupByOutputType = {
    idapto: string
    nombre: string | null
    valor: number | null
    cuota_inicial: number | null
    fecha_de_entrega: Date | null
    linkConsignacion: string | null
    _count: AptoCountAggregateOutputType | null
    _avg: AptoAvgAggregateOutputType | null
    _sum: AptoSumAggregateOutputType | null
    _min: AptoMinAggregateOutputType | null
    _max: AptoMaxAggregateOutputType | null
  }

  type GetAptoGroupByPayload<T extends aptoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AptoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AptoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AptoGroupByOutputType[P]>
            : GetScalarType<T[P], AptoGroupByOutputType[P]>
        }
      >
    >


  export type aptoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idapto?: boolean
    nombre?: boolean
    valor?: boolean
    cuota_inicial?: boolean
    fecha_de_entrega?: boolean
    linkConsignacion?: boolean
    independence?: boolean | apto$independenceArgs<ExtArgs>
    _count?: boolean | AptoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apto"]>



  export type aptoSelectScalar = {
    idapto?: boolean
    nombre?: boolean
    valor?: boolean
    cuota_inicial?: boolean
    fecha_de_entrega?: boolean
    linkConsignacion?: boolean
  }

  export type aptoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idapto" | "nombre" | "valor" | "cuota_inicial" | "fecha_de_entrega" | "linkConsignacion", ExtArgs["result"]["apto"]>
  export type aptoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    independence?: boolean | apto$independenceArgs<ExtArgs>
    _count?: boolean | AptoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $aptoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apto"
    objects: {
      independence: Prisma.$independencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idapto: string
      nombre: string | null
      valor: number | null
      cuota_inicial: number | null
      fecha_de_entrega: Date | null
      linkConsignacion: string | null
    }, ExtArgs["result"]["apto"]>
    composites: {}
  }

  type aptoGetPayload<S extends boolean | null | undefined | aptoDefaultArgs> = $Result.GetResult<Prisma.$aptoPayload, S>

  type aptoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aptoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AptoCountAggregateInputType | true
    }

  export interface aptoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apto'], meta: { name: 'apto' } }
    /**
     * Find zero or one Apto that matches the filter.
     * @param {aptoFindUniqueArgs} args - Arguments to find a Apto
     * @example
     * // Get one Apto
     * const apto = await prisma.apto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aptoFindUniqueArgs>(args: SelectSubset<T, aptoFindUniqueArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aptoFindUniqueOrThrowArgs} args - Arguments to find a Apto
     * @example
     * // Get one Apto
     * const apto = await prisma.apto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aptoFindUniqueOrThrowArgs>(args: SelectSubset<T, aptoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoFindFirstArgs} args - Arguments to find a Apto
     * @example
     * // Get one Apto
     * const apto = await prisma.apto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aptoFindFirstArgs>(args?: SelectSubset<T, aptoFindFirstArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoFindFirstOrThrowArgs} args - Arguments to find a Apto
     * @example
     * // Get one Apto
     * const apto = await prisma.apto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aptoFindFirstOrThrowArgs>(args?: SelectSubset<T, aptoFindFirstOrThrowArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aptos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aptos
     * const aptos = await prisma.apto.findMany()
     * 
     * // Get first 10 Aptos
     * const aptos = await prisma.apto.findMany({ take: 10 })
     * 
     * // Only select the `idapto`
     * const aptoWithIdaptoOnly = await prisma.apto.findMany({ select: { idapto: true } })
     * 
     */
    findMany<T extends aptoFindManyArgs>(args?: SelectSubset<T, aptoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apto.
     * @param {aptoCreateArgs} args - Arguments to create a Apto.
     * @example
     * // Create one Apto
     * const Apto = await prisma.apto.create({
     *   data: {
     *     // ... data to create a Apto
     *   }
     * })
     * 
     */
    create<T extends aptoCreateArgs>(args: SelectSubset<T, aptoCreateArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aptos.
     * @param {aptoCreateManyArgs} args - Arguments to create many Aptos.
     * @example
     * // Create many Aptos
     * const apto = await prisma.apto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aptoCreateManyArgs>(args?: SelectSubset<T, aptoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Apto.
     * @param {aptoDeleteArgs} args - Arguments to delete one Apto.
     * @example
     * // Delete one Apto
     * const Apto = await prisma.apto.delete({
     *   where: {
     *     // ... filter to delete one Apto
     *   }
     * })
     * 
     */
    delete<T extends aptoDeleteArgs>(args: SelectSubset<T, aptoDeleteArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apto.
     * @param {aptoUpdateArgs} args - Arguments to update one Apto.
     * @example
     * // Update one Apto
     * const apto = await prisma.apto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aptoUpdateArgs>(args: SelectSubset<T, aptoUpdateArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aptos.
     * @param {aptoDeleteManyArgs} args - Arguments to filter Aptos to delete.
     * @example
     * // Delete a few Aptos
     * const { count } = await prisma.apto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aptoDeleteManyArgs>(args?: SelectSubset<T, aptoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aptos
     * const apto = await prisma.apto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aptoUpdateManyArgs>(args: SelectSubset<T, aptoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Apto.
     * @param {aptoUpsertArgs} args - Arguments to update or create a Apto.
     * @example
     * // Update or create a Apto
     * const apto = await prisma.apto.upsert({
     *   create: {
     *     // ... data to create a Apto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apto we want to update
     *   }
     * })
     */
    upsert<T extends aptoUpsertArgs>(args: SelectSubset<T, aptoUpsertArgs<ExtArgs>>): Prisma__aptoClient<$Result.GetResult<Prisma.$aptoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoCountArgs} args - Arguments to filter Aptos to count.
     * @example
     * // Count the number of Aptos
     * const count = await prisma.apto.count({
     *   where: {
     *     // ... the filter for the Aptos we want to count
     *   }
     * })
    **/
    count<T extends aptoCountArgs>(
      args?: Subset<T, aptoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AptoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AptoAggregateArgs>(args: Subset<T, AptoAggregateArgs>): Prisma.PrismaPromise<GetAptoAggregateType<T>>

    /**
     * Group by Apto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aptoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aptoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aptoGroupByArgs['orderBy'] }
        : { orderBy?: aptoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aptoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAptoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apto model
   */
  readonly fields: aptoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aptoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    independence<T extends apto$independenceArgs<ExtArgs> = {}>(args?: Subset<T, apto$independenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the apto model
   */
  interface aptoFieldRefs {
    readonly idapto: FieldRef<"apto", 'String'>
    readonly nombre: FieldRef<"apto", 'String'>
    readonly valor: FieldRef<"apto", 'Int'>
    readonly cuota_inicial: FieldRef<"apto", 'Int'>
    readonly fecha_de_entrega: FieldRef<"apto", 'DateTime'>
    readonly linkConsignacion: FieldRef<"apto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * apto findUnique
   */
  export type aptoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter, which apto to fetch.
     */
    where: aptoWhereUniqueInput
  }

  /**
   * apto findUniqueOrThrow
   */
  export type aptoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter, which apto to fetch.
     */
    where: aptoWhereUniqueInput
  }

  /**
   * apto findFirst
   */
  export type aptoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter, which apto to fetch.
     */
    where?: aptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aptos to fetch.
     */
    orderBy?: aptoOrderByWithRelationInput | aptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aptos.
     */
    cursor?: aptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aptos.
     */
    distinct?: AptoScalarFieldEnum | AptoScalarFieldEnum[]
  }

  /**
   * apto findFirstOrThrow
   */
  export type aptoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter, which apto to fetch.
     */
    where?: aptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aptos to fetch.
     */
    orderBy?: aptoOrderByWithRelationInput | aptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aptos.
     */
    cursor?: aptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aptos.
     */
    distinct?: AptoScalarFieldEnum | AptoScalarFieldEnum[]
  }

  /**
   * apto findMany
   */
  export type aptoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter, which aptos to fetch.
     */
    where?: aptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aptos to fetch.
     */
    orderBy?: aptoOrderByWithRelationInput | aptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aptos.
     */
    cursor?: aptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aptos.
     */
    skip?: number
    distinct?: AptoScalarFieldEnum | AptoScalarFieldEnum[]
  }

  /**
   * apto create
   */
  export type aptoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * The data needed to create a apto.
     */
    data: XOR<aptoCreateInput, aptoUncheckedCreateInput>
  }

  /**
   * apto createMany
   */
  export type aptoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aptos.
     */
    data: aptoCreateManyInput | aptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apto update
   */
  export type aptoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * The data needed to update a apto.
     */
    data: XOR<aptoUpdateInput, aptoUncheckedUpdateInput>
    /**
     * Choose, which apto to update.
     */
    where: aptoWhereUniqueInput
  }

  /**
   * apto updateMany
   */
  export type aptoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aptos.
     */
    data: XOR<aptoUpdateManyMutationInput, aptoUncheckedUpdateManyInput>
    /**
     * Filter which aptos to update
     */
    where?: aptoWhereInput
    /**
     * Limit how many aptos to update.
     */
    limit?: number
  }

  /**
   * apto upsert
   */
  export type aptoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * The filter to search for the apto to update in case it exists.
     */
    where: aptoWhereUniqueInput
    /**
     * In case the apto found by the `where` argument doesn't exist, create a new apto with this data.
     */
    create: XOR<aptoCreateInput, aptoUncheckedCreateInput>
    /**
     * In case the apto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aptoUpdateInput, aptoUncheckedUpdateInput>
  }

  /**
   * apto delete
   */
  export type aptoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
    /**
     * Filter which apto to delete.
     */
    where: aptoWhereUniqueInput
  }

  /**
   * apto deleteMany
   */
  export type aptoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aptos to delete
     */
    where?: aptoWhereInput
    /**
     * Limit how many aptos to delete.
     */
    limit?: number
  }

  /**
   * apto.independence
   */
  export type apto$independenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    where?: independenceWhereInput
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    cursor?: independenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndependenceScalarFieldEnum | IndependenceScalarFieldEnum[]
  }

  /**
   * apto without action
   */
  export type aptoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apto
     */
    select?: aptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the apto
     */
    omit?: aptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aptoInclude<ExtArgs> | null
  }


  /**
   * Model persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaMinAggregateOutputType = {
    idPersona: string | null
    nombre: string | null
    email: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    idPersona: string | null
    nombre: string | null
    email: string | null
  }

  export type PersonaCountAggregateOutputType = {
    idPersona: number
    nombre: number
    email: number
    _all: number
  }


  export type PersonaMinAggregateInputType = {
    idPersona?: true
    nombre?: true
    email?: true
  }

  export type PersonaMaxAggregateInputType = {
    idPersona?: true
    nombre?: true
    email?: true
  }

  export type PersonaCountAggregateInputType = {
    idPersona?: true
    nombre?: true
    email?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which persona to aggregate.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type personaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personaWhereInput
    orderBy?: personaOrderByWithAggregationInput | personaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: personaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    idPersona: string
    nombre: string | null
    email: string | null
    _count: PersonaCountAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends personaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type personaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPersona?: boolean
    nombre?: boolean
    email?: boolean
    independence_independence_personaTopersona?: boolean | persona$independence_independence_personaTopersonaArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>



  export type personaSelectScalar = {
    idPersona?: boolean
    nombre?: boolean
    email?: boolean
  }

  export type personaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPersona" | "nombre" | "email", ExtArgs["result"]["persona"]>
  export type personaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    independence_independence_personaTopersona?: boolean | persona$independence_independence_personaTopersonaArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $personaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "persona"
    objects: {
      independence_independence_personaTopersona: Prisma.$independencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPersona: string
      nombre: string | null
      email: string | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type personaGetPayload<S extends boolean | null | undefined | personaDefaultArgs> = $Result.GetResult<Prisma.$personaPayload, S>

  type personaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface personaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['persona'], meta: { name: 'persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {personaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personaFindUniqueArgs>(args: SelectSubset<T, personaFindUniqueArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personaFindUniqueOrThrowArgs>(args: SelectSubset<T, personaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personaFindFirstArgs>(args?: SelectSubset<T, personaFindFirstArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personaFindFirstOrThrowArgs>(args?: SelectSubset<T, personaFindFirstOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `idPersona`
     * const personaWithIdPersonaOnly = await prisma.persona.findMany({ select: { idPersona: true } })
     * 
     */
    findMany<T extends personaFindManyArgs>(args?: SelectSubset<T, personaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {personaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends personaCreateArgs>(args: SelectSubset<T, personaCreateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {personaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personaCreateManyArgs>(args?: SelectSubset<T, personaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Persona.
     * @param {personaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends personaDeleteArgs>(args: SelectSubset<T, personaDeleteArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {personaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personaUpdateArgs>(args: SelectSubset<T, personaUpdateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {personaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personaDeleteManyArgs>(args?: SelectSubset<T, personaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personaUpdateManyArgs>(args: SelectSubset<T, personaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Persona.
     * @param {personaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends personaUpsertArgs>(args: SelectSubset<T, personaUpsertArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends personaCountArgs>(
      args?: Subset<T, personaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personaGroupByArgs['orderBy'] }
        : { orderBy?: personaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the persona model
   */
  readonly fields: personaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    independence_independence_personaTopersona<T extends persona$independence_independence_personaTopersonaArgs<ExtArgs> = {}>(args?: Subset<T, persona$independence_independence_personaTopersonaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$independencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the persona model
   */
  interface personaFieldRefs {
    readonly idPersona: FieldRef<"persona", 'String'>
    readonly nombre: FieldRef<"persona", 'String'>
    readonly email: FieldRef<"persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * persona findUnique
   */
  export type personaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findUniqueOrThrow
   */
  export type personaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findFirst
   */
  export type personaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findFirstOrThrow
   */
  export type personaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findMany
   */
  export type personaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which personas to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona create
   */
  export type personaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to create a persona.
     */
    data: XOR<personaCreateInput, personaUncheckedCreateInput>
  }

  /**
   * persona createMany
   */
  export type personaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * persona update
   */
  export type personaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to update a persona.
     */
    data: XOR<personaUpdateInput, personaUncheckedUpdateInput>
    /**
     * Choose, which persona to update.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona updateMany
   */
  export type personaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to update.
     */
    limit?: number
  }

  /**
   * persona upsert
   */
  export type personaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The filter to search for the persona to update in case it exists.
     */
    where: personaWhereUniqueInput
    /**
     * In case the persona found by the `where` argument doesn't exist, create a new persona with this data.
     */
    create: XOR<personaCreateInput, personaUncheckedCreateInput>
    /**
     * In case the persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personaUpdateInput, personaUncheckedUpdateInput>
  }

  /**
   * persona delete
   */
  export type personaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter which persona to delete.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona deleteMany
   */
  export type personaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personas to delete
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to delete.
     */
    limit?: number
  }

  /**
   * persona.independence_independence_personaTopersona
   */
  export type persona$independence_independence_personaTopersonaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the independence
     */
    select?: independenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the independence
     */
    omit?: independenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: independenceInclude<ExtArgs> | null
    where?: independenceWhereInput
    orderBy?: independenceOrderByWithRelationInput | independenceOrderByWithRelationInput[]
    cursor?: independenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IndependenceScalarFieldEnum | IndependenceScalarFieldEnum[]
  }

  /**
   * persona without action
   */
  export type personaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IndependenceScalarFieldEnum: {
    idPago: 'idPago',
    referenciApto: 'referenciApto',
    persona: 'persona',
    concepto: 'concepto',
    fechaPago: 'fechaPago',
    valorEsperado: 'valorEsperado',
    valorPagado: 'valorPagado',
    consignacion: 'consignacion'
  };

  export type IndependenceScalarFieldEnum = (typeof IndependenceScalarFieldEnum)[keyof typeof IndependenceScalarFieldEnum]


  export const FreedomScalarFieldEnum: {
    idPago: 'idPago',
    referenciApto: 'referenciApto',
    persona: 'persona',
    concepto: 'concepto',
    fechaPago: 'fechaPago',
    valorEsperado: 'valorEsperado',
    valorPagado: 'valorPagado',
    consignacion: 'consignacion'
  };

  export type FreedomScalarFieldEnum = (typeof FreedomScalarFieldEnum)[keyof typeof FreedomScalarFieldEnum]


  export const AptoScalarFieldEnum: {
    idapto: 'idapto',
    nombre: 'nombre',
    valor: 'valor',
    cuota_inicial: 'cuota_inicial',
    fecha_de_entrega: 'fecha_de_entrega',
    linkConsignacion: 'linkConsignacion'
  };

  export type AptoScalarFieldEnum = (typeof AptoScalarFieldEnum)[keyof typeof AptoScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    idPersona: 'idPersona',
    nombre: 'nombre',
    email: 'email'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const independenceOrderByRelevanceFieldEnum: {
    referenciApto: 'referenciApto',
    persona: 'persona',
    concepto: 'concepto',
    consignacion: 'consignacion'
  };

  export type independenceOrderByRelevanceFieldEnum = (typeof independenceOrderByRelevanceFieldEnum)[keyof typeof independenceOrderByRelevanceFieldEnum]


  export const freedomOrderByRelevanceFieldEnum: {
    referenciApto: 'referenciApto',
    persona: 'persona',
    concepto: 'concepto',
    consignacion: 'consignacion'
  };

  export type freedomOrderByRelevanceFieldEnum = (typeof freedomOrderByRelevanceFieldEnum)[keyof typeof freedomOrderByRelevanceFieldEnum]


  export const aptoOrderByRelevanceFieldEnum: {
    idapto: 'idapto',
    nombre: 'nombre',
    linkConsignacion: 'linkConsignacion'
  };

  export type aptoOrderByRelevanceFieldEnum = (typeof aptoOrderByRelevanceFieldEnum)[keyof typeof aptoOrderByRelevanceFieldEnum]


  export const personaOrderByRelevanceFieldEnum: {
    idPersona: 'idPersona',
    nombre: 'nombre',
    email: 'email'
  };

  export type personaOrderByRelevanceFieldEnum = (typeof personaOrderByRelevanceFieldEnum)[keyof typeof personaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type independenceWhereInput = {
    AND?: independenceWhereInput | independenceWhereInput[]
    OR?: independenceWhereInput[]
    NOT?: independenceWhereInput | independenceWhereInput[]
    idPago?: IntFilter<"independence"> | number
    referenciApto?: StringNullableFilter<"independence"> | string | null
    persona?: StringNullableFilter<"independence"> | string | null
    concepto?: StringNullableFilter<"independence"> | string | null
    fechaPago?: DateTimeNullableFilter<"independence"> | Date | string | null
    valorEsperado?: IntNullableFilter<"independence"> | number | null
    valorPagado?: IntNullableFilter<"independence"> | number | null
    consignacion?: StringNullableFilter<"independence"> | string | null
    persona_independence_personaTopersona?: XOR<PersonaNullableScalarRelationFilter, personaWhereInput> | null
    apto?: XOR<AptoNullableScalarRelationFilter, aptoWhereInput> | null
  }

  export type independenceOrderByWithRelationInput = {
    idPago?: SortOrder
    referenciApto?: SortOrderInput | SortOrder
    persona?: SortOrderInput | SortOrder
    concepto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valorEsperado?: SortOrderInput | SortOrder
    valorPagado?: SortOrderInput | SortOrder
    consignacion?: SortOrderInput | SortOrder
    persona_independence_personaTopersona?: personaOrderByWithRelationInput
    apto?: aptoOrderByWithRelationInput
    _relevance?: independenceOrderByRelevanceInput
  }

  export type independenceWhereUniqueInput = Prisma.AtLeast<{
    idPago?: number
    AND?: independenceWhereInput | independenceWhereInput[]
    OR?: independenceWhereInput[]
    NOT?: independenceWhereInput | independenceWhereInput[]
    referenciApto?: StringNullableFilter<"independence"> | string | null
    persona?: StringNullableFilter<"independence"> | string | null
    concepto?: StringNullableFilter<"independence"> | string | null
    fechaPago?: DateTimeNullableFilter<"independence"> | Date | string | null
    valorEsperado?: IntNullableFilter<"independence"> | number | null
    valorPagado?: IntNullableFilter<"independence"> | number | null
    consignacion?: StringNullableFilter<"independence"> | string | null
    persona_independence_personaTopersona?: XOR<PersonaNullableScalarRelationFilter, personaWhereInput> | null
    apto?: XOR<AptoNullableScalarRelationFilter, aptoWhereInput> | null
  }, "idPago">

  export type independenceOrderByWithAggregationInput = {
    idPago?: SortOrder
    referenciApto?: SortOrderInput | SortOrder
    persona?: SortOrderInput | SortOrder
    concepto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valorEsperado?: SortOrderInput | SortOrder
    valorPagado?: SortOrderInput | SortOrder
    consignacion?: SortOrderInput | SortOrder
    _count?: independenceCountOrderByAggregateInput
    _avg?: independenceAvgOrderByAggregateInput
    _max?: independenceMaxOrderByAggregateInput
    _min?: independenceMinOrderByAggregateInput
    _sum?: independenceSumOrderByAggregateInput
  }

  export type independenceScalarWhereWithAggregatesInput = {
    AND?: independenceScalarWhereWithAggregatesInput | independenceScalarWhereWithAggregatesInput[]
    OR?: independenceScalarWhereWithAggregatesInput[]
    NOT?: independenceScalarWhereWithAggregatesInput | independenceScalarWhereWithAggregatesInput[]
    idPago?: IntWithAggregatesFilter<"independence"> | number
    referenciApto?: StringNullableWithAggregatesFilter<"independence"> | string | null
    persona?: StringNullableWithAggregatesFilter<"independence"> | string | null
    concepto?: StringNullableWithAggregatesFilter<"independence"> | string | null
    fechaPago?: DateTimeNullableWithAggregatesFilter<"independence"> | Date | string | null
    valorEsperado?: IntNullableWithAggregatesFilter<"independence"> | number | null
    valorPagado?: IntNullableWithAggregatesFilter<"independence"> | number | null
    consignacion?: StringNullableWithAggregatesFilter<"independence"> | string | null
  }

  export type freedomWhereInput = {
    AND?: freedomWhereInput | freedomWhereInput[]
    OR?: freedomWhereInput[]
    NOT?: freedomWhereInput | freedomWhereInput[]
    idPago?: IntFilter<"freedom"> | number
    referenciApto?: StringNullableFilter<"freedom"> | string | null
    persona?: StringNullableFilter<"freedom"> | string | null
    concepto?: StringNullableFilter<"freedom"> | string | null
    fechaPago?: DateTimeNullableFilter<"freedom"> | Date | string | null
    valorEsperado?: IntNullableFilter<"freedom"> | number | null
    valorPagado?: IntNullableFilter<"freedom"> | number | null
    consignacion?: StringNullableFilter<"freedom"> | string | null
  }

  export type freedomOrderByWithRelationInput = {
    idPago?: SortOrder
    referenciApto?: SortOrderInput | SortOrder
    persona?: SortOrderInput | SortOrder
    concepto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valorEsperado?: SortOrderInput | SortOrder
    valorPagado?: SortOrderInput | SortOrder
    consignacion?: SortOrderInput | SortOrder
    _relevance?: freedomOrderByRelevanceInput
  }

  export type freedomWhereUniqueInput = Prisma.AtLeast<{
    idPago?: number
    AND?: freedomWhereInput | freedomWhereInput[]
    OR?: freedomWhereInput[]
    NOT?: freedomWhereInput | freedomWhereInput[]
    referenciApto?: StringNullableFilter<"freedom"> | string | null
    persona?: StringNullableFilter<"freedom"> | string | null
    concepto?: StringNullableFilter<"freedom"> | string | null
    fechaPago?: DateTimeNullableFilter<"freedom"> | Date | string | null
    valorEsperado?: IntNullableFilter<"freedom"> | number | null
    valorPagado?: IntNullableFilter<"freedom"> | number | null
    consignacion?: StringNullableFilter<"freedom"> | string | null
  }, "idPago">

  export type freedomOrderByWithAggregationInput = {
    idPago?: SortOrder
    referenciApto?: SortOrderInput | SortOrder
    persona?: SortOrderInput | SortOrder
    concepto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    valorEsperado?: SortOrderInput | SortOrder
    valorPagado?: SortOrderInput | SortOrder
    consignacion?: SortOrderInput | SortOrder
    _count?: freedomCountOrderByAggregateInput
    _avg?: freedomAvgOrderByAggregateInput
    _max?: freedomMaxOrderByAggregateInput
    _min?: freedomMinOrderByAggregateInput
    _sum?: freedomSumOrderByAggregateInput
  }

  export type freedomScalarWhereWithAggregatesInput = {
    AND?: freedomScalarWhereWithAggregatesInput | freedomScalarWhereWithAggregatesInput[]
    OR?: freedomScalarWhereWithAggregatesInput[]
    NOT?: freedomScalarWhereWithAggregatesInput | freedomScalarWhereWithAggregatesInput[]
    idPago?: IntWithAggregatesFilter<"freedom"> | number
    referenciApto?: StringNullableWithAggregatesFilter<"freedom"> | string | null
    persona?: StringNullableWithAggregatesFilter<"freedom"> | string | null
    concepto?: StringNullableWithAggregatesFilter<"freedom"> | string | null
    fechaPago?: DateTimeNullableWithAggregatesFilter<"freedom"> | Date | string | null
    valorEsperado?: IntNullableWithAggregatesFilter<"freedom"> | number | null
    valorPagado?: IntNullableWithAggregatesFilter<"freedom"> | number | null
    consignacion?: StringNullableWithAggregatesFilter<"freedom"> | string | null
  }

  export type aptoWhereInput = {
    AND?: aptoWhereInput | aptoWhereInput[]
    OR?: aptoWhereInput[]
    NOT?: aptoWhereInput | aptoWhereInput[]
    idapto?: StringFilter<"apto"> | string
    nombre?: StringNullableFilter<"apto"> | string | null
    valor?: IntNullableFilter<"apto"> | number | null
    cuota_inicial?: IntNullableFilter<"apto"> | number | null
    fecha_de_entrega?: DateTimeNullableFilter<"apto"> | Date | string | null
    linkConsignacion?: StringNullableFilter<"apto"> | string | null
    independence?: IndependenceListRelationFilter
  }

  export type aptoOrderByWithRelationInput = {
    idapto?: SortOrder
    nombre?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    cuota_inicial?: SortOrderInput | SortOrder
    fecha_de_entrega?: SortOrderInput | SortOrder
    linkConsignacion?: SortOrderInput | SortOrder
    independence?: independenceOrderByRelationAggregateInput
    _relevance?: aptoOrderByRelevanceInput
  }

  export type aptoWhereUniqueInput = Prisma.AtLeast<{
    idapto?: string
    AND?: aptoWhereInput | aptoWhereInput[]
    OR?: aptoWhereInput[]
    NOT?: aptoWhereInput | aptoWhereInput[]
    nombre?: StringNullableFilter<"apto"> | string | null
    valor?: IntNullableFilter<"apto"> | number | null
    cuota_inicial?: IntNullableFilter<"apto"> | number | null
    fecha_de_entrega?: DateTimeNullableFilter<"apto"> | Date | string | null
    linkConsignacion?: StringNullableFilter<"apto"> | string | null
    independence?: IndependenceListRelationFilter
  }, "idapto">

  export type aptoOrderByWithAggregationInput = {
    idapto?: SortOrder
    nombre?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    cuota_inicial?: SortOrderInput | SortOrder
    fecha_de_entrega?: SortOrderInput | SortOrder
    linkConsignacion?: SortOrderInput | SortOrder
    _count?: aptoCountOrderByAggregateInput
    _avg?: aptoAvgOrderByAggregateInput
    _max?: aptoMaxOrderByAggregateInput
    _min?: aptoMinOrderByAggregateInput
    _sum?: aptoSumOrderByAggregateInput
  }

  export type aptoScalarWhereWithAggregatesInput = {
    AND?: aptoScalarWhereWithAggregatesInput | aptoScalarWhereWithAggregatesInput[]
    OR?: aptoScalarWhereWithAggregatesInput[]
    NOT?: aptoScalarWhereWithAggregatesInput | aptoScalarWhereWithAggregatesInput[]
    idapto?: StringWithAggregatesFilter<"apto"> | string
    nombre?: StringNullableWithAggregatesFilter<"apto"> | string | null
    valor?: IntNullableWithAggregatesFilter<"apto"> | number | null
    cuota_inicial?: IntNullableWithAggregatesFilter<"apto"> | number | null
    fecha_de_entrega?: DateTimeNullableWithAggregatesFilter<"apto"> | Date | string | null
    linkConsignacion?: StringNullableWithAggregatesFilter<"apto"> | string | null
  }

  export type personaWhereInput = {
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    idPersona?: StringFilter<"persona"> | string
    nombre?: StringNullableFilter<"persona"> | string | null
    email?: StringNullableFilter<"persona"> | string | null
    independence_independence_personaTopersona?: IndependenceListRelationFilter
  }

  export type personaOrderByWithRelationInput = {
    idPersona?: SortOrder
    nombre?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    independence_independence_personaTopersona?: independenceOrderByRelationAggregateInput
    _relevance?: personaOrderByRelevanceInput
  }

  export type personaWhereUniqueInput = Prisma.AtLeast<{
    idPersona?: string
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    nombre?: StringNullableFilter<"persona"> | string | null
    email?: StringNullableFilter<"persona"> | string | null
    independence_independence_personaTopersona?: IndependenceListRelationFilter
  }, "idPersona">

  export type personaOrderByWithAggregationInput = {
    idPersona?: SortOrder
    nombre?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: personaCountOrderByAggregateInput
    _max?: personaMaxOrderByAggregateInput
    _min?: personaMinOrderByAggregateInput
  }

  export type personaScalarWhereWithAggregatesInput = {
    AND?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    OR?: personaScalarWhereWithAggregatesInput[]
    NOT?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    idPersona?: StringWithAggregatesFilter<"persona"> | string
    nombre?: StringNullableWithAggregatesFilter<"persona"> | string | null
    email?: StringNullableWithAggregatesFilter<"persona"> | string | null
  }

  export type independenceCreateInput = {
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
    persona_independence_personaTopersona?: personaCreateNestedOneWithoutIndependence_independence_personaTopersonaInput
    apto?: aptoCreateNestedOneWithoutIndependenceInput
  }

  export type independenceUncheckedCreateInput = {
    idPago?: number
    referenciApto?: string | null
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceUpdateInput = {
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
    persona_independence_personaTopersona?: personaUpdateOneWithoutIndependence_independence_personaTopersonaNestedInput
    apto?: aptoUpdateOneWithoutIndependenceNestedInput
  }

  export type independenceUncheckedUpdateInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceCreateManyInput = {
    idPago?: number
    referenciApto?: string | null
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceUpdateManyMutationInput = {
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceUncheckedUpdateManyInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type freedomCreateInput = {
    referenciApto?: string | null
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type freedomUncheckedCreateInput = {
    idPago?: number
    referenciApto?: string | null
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type freedomUpdateInput = {
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type freedomUncheckedUpdateInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type freedomCreateManyInput = {
    idPago?: number
    referenciApto?: string | null
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type freedomUpdateManyMutationInput = {
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type freedomUncheckedUpdateManyInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aptoCreateInput = {
    idapto: string
    nombre?: string | null
    valor?: number | null
    cuota_inicial?: number | null
    fecha_de_entrega?: Date | string | null
    linkConsignacion?: string | null
    independence?: independenceCreateNestedManyWithoutAptoInput
  }

  export type aptoUncheckedCreateInput = {
    idapto: string
    nombre?: string | null
    valor?: number | null
    cuota_inicial?: number | null
    fecha_de_entrega?: Date | string | null
    linkConsignacion?: string | null
    independence?: independenceUncheckedCreateNestedManyWithoutAptoInput
  }

  export type aptoUpdateInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    independence?: independenceUpdateManyWithoutAptoNestedInput
  }

  export type aptoUncheckedUpdateInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
    independence?: independenceUncheckedUpdateManyWithoutAptoNestedInput
  }

  export type aptoCreateManyInput = {
    idapto: string
    nombre?: string | null
    valor?: number | null
    cuota_inicial?: number | null
    fecha_de_entrega?: Date | string | null
    linkConsignacion?: string | null
  }

  export type aptoUpdateManyMutationInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aptoUncheckedUpdateManyInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaCreateInput = {
    idPersona: string
    nombre?: string | null
    email?: string | null
    independence_independence_personaTopersona?: independenceCreateNestedManyWithoutPersona_independence_personaTopersonaInput
  }

  export type personaUncheckedCreateInput = {
    idPersona: string
    nombre?: string | null
    email?: string | null
    independence_independence_personaTopersona?: independenceUncheckedCreateNestedManyWithoutPersona_independence_personaTopersonaInput
  }

  export type personaUpdateInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    independence_independence_personaTopersona?: independenceUpdateManyWithoutPersona_independence_personaTopersonaNestedInput
  }

  export type personaUncheckedUpdateInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    independence_independence_personaTopersona?: independenceUncheckedUpdateManyWithoutPersona_independence_personaTopersonaNestedInput
  }

  export type personaCreateManyInput = {
    idPersona: string
    nombre?: string | null
    email?: string | null
  }

  export type personaUpdateManyMutationInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaUncheckedUpdateManyInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PersonaNullableScalarRelationFilter = {
    is?: personaWhereInput | null
    isNot?: personaWhereInput | null
  }

  export type AptoNullableScalarRelationFilter = {
    is?: aptoWhereInput | null
    isNot?: aptoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type independenceOrderByRelevanceInput = {
    fields: independenceOrderByRelevanceFieldEnum | independenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type independenceCountOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type independenceAvgOrderByAggregateInput = {
    idPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
  }

  export type independenceMaxOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type independenceMinOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type independenceSumOrderByAggregateInput = {
    idPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type freedomOrderByRelevanceInput = {
    fields: freedomOrderByRelevanceFieldEnum | freedomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type freedomCountOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type freedomAvgOrderByAggregateInput = {
    idPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
  }

  export type freedomMaxOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type freedomMinOrderByAggregateInput = {
    idPago?: SortOrder
    referenciApto?: SortOrder
    persona?: SortOrder
    concepto?: SortOrder
    fechaPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
    consignacion?: SortOrder
  }

  export type freedomSumOrderByAggregateInput = {
    idPago?: SortOrder
    valorEsperado?: SortOrder
    valorPagado?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IndependenceListRelationFilter = {
    every?: independenceWhereInput
    some?: independenceWhereInput
    none?: independenceWhereInput
  }

  export type independenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type aptoOrderByRelevanceInput = {
    fields: aptoOrderByRelevanceFieldEnum | aptoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type aptoCountOrderByAggregateInput = {
    idapto?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cuota_inicial?: SortOrder
    fecha_de_entrega?: SortOrder
    linkConsignacion?: SortOrder
  }

  export type aptoAvgOrderByAggregateInput = {
    valor?: SortOrder
    cuota_inicial?: SortOrder
  }

  export type aptoMaxOrderByAggregateInput = {
    idapto?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cuota_inicial?: SortOrder
    fecha_de_entrega?: SortOrder
    linkConsignacion?: SortOrder
  }

  export type aptoMinOrderByAggregateInput = {
    idapto?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cuota_inicial?: SortOrder
    fecha_de_entrega?: SortOrder
    linkConsignacion?: SortOrder
  }

  export type aptoSumOrderByAggregateInput = {
    valor?: SortOrder
    cuota_inicial?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type personaOrderByRelevanceInput = {
    fields: personaOrderByRelevanceFieldEnum | personaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personaCountOrderByAggregateInput = {
    idPersona?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
  }

  export type personaMaxOrderByAggregateInput = {
    idPersona?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
  }

  export type personaMinOrderByAggregateInput = {
    idPersona?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
  }

  export type personaCreateNestedOneWithoutIndependence_independence_personaTopersonaInput = {
    create?: XOR<personaCreateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedCreateWithoutIndependence_independence_personaTopersonaInput>
    connectOrCreate?: personaCreateOrConnectWithoutIndependence_independence_personaTopersonaInput
    connect?: personaWhereUniqueInput
  }

  export type aptoCreateNestedOneWithoutIndependenceInput = {
    create?: XOR<aptoCreateWithoutIndependenceInput, aptoUncheckedCreateWithoutIndependenceInput>
    connectOrCreate?: aptoCreateOrConnectWithoutIndependenceInput
    connect?: aptoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type personaUpdateOneWithoutIndependence_independence_personaTopersonaNestedInput = {
    create?: XOR<personaCreateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedCreateWithoutIndependence_independence_personaTopersonaInput>
    connectOrCreate?: personaCreateOrConnectWithoutIndependence_independence_personaTopersonaInput
    upsert?: personaUpsertWithoutIndependence_independence_personaTopersonaInput
    disconnect?: personaWhereInput | boolean
    delete?: personaWhereInput | boolean
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutIndependence_independence_personaTopersonaInput, personaUpdateWithoutIndependence_independence_personaTopersonaInput>, personaUncheckedUpdateWithoutIndependence_independence_personaTopersonaInput>
  }

  export type aptoUpdateOneWithoutIndependenceNestedInput = {
    create?: XOR<aptoCreateWithoutIndependenceInput, aptoUncheckedCreateWithoutIndependenceInput>
    connectOrCreate?: aptoCreateOrConnectWithoutIndependenceInput
    upsert?: aptoUpsertWithoutIndependenceInput
    disconnect?: aptoWhereInput | boolean
    delete?: aptoWhereInput | boolean
    connect?: aptoWhereUniqueInput
    update?: XOR<XOR<aptoUpdateToOneWithWhereWithoutIndependenceInput, aptoUpdateWithoutIndependenceInput>, aptoUncheckedUpdateWithoutIndependenceInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type independenceCreateNestedManyWithoutAptoInput = {
    create?: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput> | independenceCreateWithoutAptoInput[] | independenceUncheckedCreateWithoutAptoInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutAptoInput | independenceCreateOrConnectWithoutAptoInput[]
    createMany?: independenceCreateManyAptoInputEnvelope
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
  }

  export type independenceUncheckedCreateNestedManyWithoutAptoInput = {
    create?: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput> | independenceCreateWithoutAptoInput[] | independenceUncheckedCreateWithoutAptoInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutAptoInput | independenceCreateOrConnectWithoutAptoInput[]
    createMany?: independenceCreateManyAptoInputEnvelope
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type independenceUpdateManyWithoutAptoNestedInput = {
    create?: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput> | independenceCreateWithoutAptoInput[] | independenceUncheckedCreateWithoutAptoInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutAptoInput | independenceCreateOrConnectWithoutAptoInput[]
    upsert?: independenceUpsertWithWhereUniqueWithoutAptoInput | independenceUpsertWithWhereUniqueWithoutAptoInput[]
    createMany?: independenceCreateManyAptoInputEnvelope
    set?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    disconnect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    delete?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    update?: independenceUpdateWithWhereUniqueWithoutAptoInput | independenceUpdateWithWhereUniqueWithoutAptoInput[]
    updateMany?: independenceUpdateManyWithWhereWithoutAptoInput | independenceUpdateManyWithWhereWithoutAptoInput[]
    deleteMany?: independenceScalarWhereInput | independenceScalarWhereInput[]
  }

  export type independenceUncheckedUpdateManyWithoutAptoNestedInput = {
    create?: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput> | independenceCreateWithoutAptoInput[] | independenceUncheckedCreateWithoutAptoInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutAptoInput | independenceCreateOrConnectWithoutAptoInput[]
    upsert?: independenceUpsertWithWhereUniqueWithoutAptoInput | independenceUpsertWithWhereUniqueWithoutAptoInput[]
    createMany?: independenceCreateManyAptoInputEnvelope
    set?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    disconnect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    delete?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    update?: independenceUpdateWithWhereUniqueWithoutAptoInput | independenceUpdateWithWhereUniqueWithoutAptoInput[]
    updateMany?: independenceUpdateManyWithWhereWithoutAptoInput | independenceUpdateManyWithWhereWithoutAptoInput[]
    deleteMany?: independenceScalarWhereInput | independenceScalarWhereInput[]
  }

  export type independenceCreateNestedManyWithoutPersona_independence_personaTopersonaInput = {
    create?: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput> | independenceCreateWithoutPersona_independence_personaTopersonaInput[] | independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput | independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput[]
    createMany?: independenceCreateManyPersona_independence_personaTopersonaInputEnvelope
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
  }

  export type independenceUncheckedCreateNestedManyWithoutPersona_independence_personaTopersonaInput = {
    create?: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput> | independenceCreateWithoutPersona_independence_personaTopersonaInput[] | independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput | independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput[]
    createMany?: independenceCreateManyPersona_independence_personaTopersonaInputEnvelope
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
  }

  export type independenceUpdateManyWithoutPersona_independence_personaTopersonaNestedInput = {
    create?: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput> | independenceCreateWithoutPersona_independence_personaTopersonaInput[] | independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput | independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput[]
    upsert?: independenceUpsertWithWhereUniqueWithoutPersona_independence_personaTopersonaInput | independenceUpsertWithWhereUniqueWithoutPersona_independence_personaTopersonaInput[]
    createMany?: independenceCreateManyPersona_independence_personaTopersonaInputEnvelope
    set?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    disconnect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    delete?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    update?: independenceUpdateWithWhereUniqueWithoutPersona_independence_personaTopersonaInput | independenceUpdateWithWhereUniqueWithoutPersona_independence_personaTopersonaInput[]
    updateMany?: independenceUpdateManyWithWhereWithoutPersona_independence_personaTopersonaInput | independenceUpdateManyWithWhereWithoutPersona_independence_personaTopersonaInput[]
    deleteMany?: independenceScalarWhereInput | independenceScalarWhereInput[]
  }

  export type independenceUncheckedUpdateManyWithoutPersona_independence_personaTopersonaNestedInput = {
    create?: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput> | independenceCreateWithoutPersona_independence_personaTopersonaInput[] | independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput[]
    connectOrCreate?: independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput | independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput[]
    upsert?: independenceUpsertWithWhereUniqueWithoutPersona_independence_personaTopersonaInput | independenceUpsertWithWhereUniqueWithoutPersona_independence_personaTopersonaInput[]
    createMany?: independenceCreateManyPersona_independence_personaTopersonaInputEnvelope
    set?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    disconnect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    delete?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    connect?: independenceWhereUniqueInput | independenceWhereUniqueInput[]
    update?: independenceUpdateWithWhereUniqueWithoutPersona_independence_personaTopersonaInput | independenceUpdateWithWhereUniqueWithoutPersona_independence_personaTopersonaInput[]
    updateMany?: independenceUpdateManyWithWhereWithoutPersona_independence_personaTopersonaInput | independenceUpdateManyWithWhereWithoutPersona_independence_personaTopersonaInput[]
    deleteMany?: independenceScalarWhereInput | independenceScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type personaCreateWithoutIndependence_independence_personaTopersonaInput = {
    idPersona: string
    nombre?: string | null
    email?: string | null
  }

  export type personaUncheckedCreateWithoutIndependence_independence_personaTopersonaInput = {
    idPersona: string
    nombre?: string | null
    email?: string | null
  }

  export type personaCreateOrConnectWithoutIndependence_independence_personaTopersonaInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedCreateWithoutIndependence_independence_personaTopersonaInput>
  }

  export type aptoCreateWithoutIndependenceInput = {
    idapto: string
    nombre?: string | null
    valor?: number | null
    cuota_inicial?: number | null
    fecha_de_entrega?: Date | string | null
    linkConsignacion?: string | null
  }

  export type aptoUncheckedCreateWithoutIndependenceInput = {
    idapto: string
    nombre?: string | null
    valor?: number | null
    cuota_inicial?: number | null
    fecha_de_entrega?: Date | string | null
    linkConsignacion?: string | null
  }

  export type aptoCreateOrConnectWithoutIndependenceInput = {
    where: aptoWhereUniqueInput
    create: XOR<aptoCreateWithoutIndependenceInput, aptoUncheckedCreateWithoutIndependenceInput>
  }

  export type personaUpsertWithoutIndependence_independence_personaTopersonaInput = {
    update: XOR<personaUpdateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedUpdateWithoutIndependence_independence_personaTopersonaInput>
    create: XOR<personaCreateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedCreateWithoutIndependence_independence_personaTopersonaInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutIndependence_independence_personaTopersonaInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutIndependence_independence_personaTopersonaInput, personaUncheckedUpdateWithoutIndependence_independence_personaTopersonaInput>
  }

  export type personaUpdateWithoutIndependence_independence_personaTopersonaInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaUncheckedUpdateWithoutIndependence_independence_personaTopersonaInput = {
    idPersona?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aptoUpsertWithoutIndependenceInput = {
    update: XOR<aptoUpdateWithoutIndependenceInput, aptoUncheckedUpdateWithoutIndependenceInput>
    create: XOR<aptoCreateWithoutIndependenceInput, aptoUncheckedCreateWithoutIndependenceInput>
    where?: aptoWhereInput
  }

  export type aptoUpdateToOneWithWhereWithoutIndependenceInput = {
    where?: aptoWhereInput
    data: XOR<aptoUpdateWithoutIndependenceInput, aptoUncheckedUpdateWithoutIndependenceInput>
  }

  export type aptoUpdateWithoutIndependenceInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type aptoUncheckedUpdateWithoutIndependenceInput = {
    idapto?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableIntFieldUpdateOperationsInput | number | null
    cuota_inicial?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_de_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkConsignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceCreateWithoutAptoInput = {
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
    persona_independence_personaTopersona?: personaCreateNestedOneWithoutIndependence_independence_personaTopersonaInput
  }

  export type independenceUncheckedCreateWithoutAptoInput = {
    idPago?: number
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceCreateOrConnectWithoutAptoInput = {
    where: independenceWhereUniqueInput
    create: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput>
  }

  export type independenceCreateManyAptoInputEnvelope = {
    data: independenceCreateManyAptoInput | independenceCreateManyAptoInput[]
    skipDuplicates?: boolean
  }

  export type independenceUpsertWithWhereUniqueWithoutAptoInput = {
    where: independenceWhereUniqueInput
    update: XOR<independenceUpdateWithoutAptoInput, independenceUncheckedUpdateWithoutAptoInput>
    create: XOR<independenceCreateWithoutAptoInput, independenceUncheckedCreateWithoutAptoInput>
  }

  export type independenceUpdateWithWhereUniqueWithoutAptoInput = {
    where: independenceWhereUniqueInput
    data: XOR<independenceUpdateWithoutAptoInput, independenceUncheckedUpdateWithoutAptoInput>
  }

  export type independenceUpdateManyWithWhereWithoutAptoInput = {
    where: independenceScalarWhereInput
    data: XOR<independenceUpdateManyMutationInput, independenceUncheckedUpdateManyWithoutAptoInput>
  }

  export type independenceScalarWhereInput = {
    AND?: independenceScalarWhereInput | independenceScalarWhereInput[]
    OR?: independenceScalarWhereInput[]
    NOT?: independenceScalarWhereInput | independenceScalarWhereInput[]
    idPago?: IntFilter<"independence"> | number
    referenciApto?: StringNullableFilter<"independence"> | string | null
    persona?: StringNullableFilter<"independence"> | string | null
    concepto?: StringNullableFilter<"independence"> | string | null
    fechaPago?: DateTimeNullableFilter<"independence"> | Date | string | null
    valorEsperado?: IntNullableFilter<"independence"> | number | null
    valorPagado?: IntNullableFilter<"independence"> | number | null
    consignacion?: StringNullableFilter<"independence"> | string | null
  }

  export type independenceCreateWithoutPersona_independence_personaTopersonaInput = {
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
    apto?: aptoCreateNestedOneWithoutIndependenceInput
  }

  export type independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput = {
    idPago?: number
    referenciApto?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceCreateOrConnectWithoutPersona_independence_personaTopersonaInput = {
    where: independenceWhereUniqueInput
    create: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput>
  }

  export type independenceCreateManyPersona_independence_personaTopersonaInputEnvelope = {
    data: independenceCreateManyPersona_independence_personaTopersonaInput | independenceCreateManyPersona_independence_personaTopersonaInput[]
    skipDuplicates?: boolean
  }

  export type independenceUpsertWithWhereUniqueWithoutPersona_independence_personaTopersonaInput = {
    where: independenceWhereUniqueInput
    update: XOR<independenceUpdateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedUpdateWithoutPersona_independence_personaTopersonaInput>
    create: XOR<independenceCreateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedCreateWithoutPersona_independence_personaTopersonaInput>
  }

  export type independenceUpdateWithWhereUniqueWithoutPersona_independence_personaTopersonaInput = {
    where: independenceWhereUniqueInput
    data: XOR<independenceUpdateWithoutPersona_independence_personaTopersonaInput, independenceUncheckedUpdateWithoutPersona_independence_personaTopersonaInput>
  }

  export type independenceUpdateManyWithWhereWithoutPersona_independence_personaTopersonaInput = {
    where: independenceScalarWhereInput
    data: XOR<independenceUpdateManyMutationInput, independenceUncheckedUpdateManyWithoutPersona_independence_personaTopersonaInput>
  }

  export type independenceCreateManyAptoInput = {
    idPago?: number
    persona?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceUpdateWithoutAptoInput = {
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
    persona_independence_personaTopersona?: personaUpdateOneWithoutIndependence_independence_personaTopersonaNestedInput
  }

  export type independenceUncheckedUpdateWithoutAptoInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceUncheckedUpdateManyWithoutAptoInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    persona?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceCreateManyPersona_independence_personaTopersonaInput = {
    idPago?: number
    referenciApto?: string | null
    concepto?: string | null
    fechaPago?: Date | string | null
    valorEsperado?: number | null
    valorPagado?: number | null
    consignacion?: string | null
  }

  export type independenceUpdateWithoutPersona_independence_personaTopersonaInput = {
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: aptoUpdateOneWithoutIndependenceNestedInput
  }

  export type independenceUncheckedUpdateWithoutPersona_independence_personaTopersonaInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type independenceUncheckedUpdateManyWithoutPersona_independence_personaTopersonaInput = {
    idPago?: IntFieldUpdateOperationsInput | number
    referenciApto?: NullableStringFieldUpdateOperationsInput | string | null
    concepto?: NullableStringFieldUpdateOperationsInput | string | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorEsperado?: NullableIntFieldUpdateOperationsInput | number | null
    valorPagado?: NullableIntFieldUpdateOperationsInput | number | null
    consignacion?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}