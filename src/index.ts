import { Fetcher } from './fetcher.js'
import { arrayRequestBody } from './utils.js'

import type {
  ApiResponse,
  FetchArgType,
  FetchReturnType,
  FetchErrorType,
  Middleware,
  OpArgType,
  OpErrorType,
  OpDefaultReturnType,
  OpReturnType,
  TypedFetch,
  FetchFn,
} from './types.js'

import { ApiError } from './types.js'

export type {
  OpArgType,
  OpErrorType,
  OpDefaultReturnType,
  OpReturnType,
  FetchArgType,
  FetchReturnType,
  FetchErrorType,
  ApiResponse,
  Middleware,
  TypedFetch,
  FetchFn,
}

export { Fetcher, ApiError, arrayRequestBody }
