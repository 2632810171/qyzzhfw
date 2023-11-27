import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref<string>('');
  const roles = ref<string[]>([]);
  const username = ref<string>('');

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value;
  };

  /** 登出 */
  const logout = () => {
    token.value = '';
    roles.value = [];
  };
  // /** 登录 */
  // const login = async ({ username, password, code }: LoginRequestData) => {
  //     const { data } = await loginApi({ username, password, code })
  //     setToken(data.token)
  //     token.value = data.token
  // }

  return { token, roles, username, setRoles, logout };
});
