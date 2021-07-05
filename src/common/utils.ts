import * as bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 10;
export function encrypt(password: string) {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  return bcrypt.hashSync(password, salt);
}

export function validatePassword(password: string, hashed: string) {
  return bcrypt.compareSync(password, hashed);
}
