import { mount } from '@vue/test-utils'
import {countries} from './src/App'

// Теперь монтируем компонент и у нас появляется wrapper
const wrapper = mount(countries)

// Вы можете получить доступ к экземпляру Vue через `wrapper.vm`
const vm = wrapper.vm

// Чтобы изучить wrapper подробнее, просто выведите его в консоль
// и ваши приключения с `vue-test-utils` начнутся
console.log(wrapper)