import type { LoaderFunctionArgs } from 'react-router';

type BaseLoaderParams = { id: string };

export type LoaderParams<T extends object = object> = LoaderFunctionArgs<
  BaseLoaderParams & T
>;

export type LoaderResult<T> = { data: T };
