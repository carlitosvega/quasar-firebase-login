import { LocalStorage } from 'quasar';

const TokenKey = 'User-Token';
const UserKey = 'User-Id';
const TokenEnterpriseKey = 'Enterprise-Token';

export function getToken() {
  return LocalStorage.getItem(TokenKey);
}

export function getId() {
  return LocalStorage.getItem(UserKey);
}

export function getTokenEnterprise() {
  return LocalStorage.getItem(TokenEnterpriseKey);
}

export function setToken(token: string) {
  return LocalStorage.set(TokenKey, token);
}

export function setId(id: string) {
  return LocalStorage.set(UserKey, id);
}

export function setTokenEnterprise(tokenEnterprise: string) {
  return LocalStorage.set(TokenEnterpriseKey, tokenEnterprise);
}

export function removeToken() {
  return LocalStorage.remove(TokenKey);
}

export function removeId() {
  return LocalStorage.remove(UserKey);
}

export function removeTokenEnterprise() {
  return LocalStorage.remove(TokenEnterpriseKey);
}
