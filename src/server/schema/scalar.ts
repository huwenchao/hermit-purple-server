import { scalarType } from 'nexus';

function id(x: any) {
  return x;
}

function stringScalar<T extends string>(name: T, description?: string) {
  return scalarType({
    name,
    description,
    serialize: id,
  });
}

export const AddressScalar = stringScalar(
  'Address',
  'The `Address` of an account, encoded to 40 length lowercase hex string',
);

export const Uint64Scalar = stringScalar(
  'Uint64',
  'Uint64，encoded to a hex string ',
);

export const HashScalar = stringScalar(
  'Hash',
  'A 64 length lowercase hex string, the output digest of [keccak](https://en.wikipedia.org/wiki/SHA-3) hash function',
);

export const BytesScalar = stringScalar(
  'Bytes',
  'Bytes corresponding hex string',
);
