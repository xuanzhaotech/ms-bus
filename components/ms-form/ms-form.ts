import * as avalon from 'avalon2';
import { findParentComponent } from '../../vendor/avx-component/avx-util';

/**
 * Form组件
 * @prop $from 表单数据管理类
 * 
 * @example
 * <ms-form>
 *   <ms-form-item :widget="{label: '标题'}">
       <ms-input :widget="{value: @title, col: 'title'}"></ms-input>
     </ms-form-item>
 * </ms-form>
 */
avalon.component('ms-form', {
    template: '<form role="form" :class="[(@horizontal ? \'form-horizontal\' : \'\')]"><slot /></form>',
    defaults: {
        items: '',
        $form: null,
        $rules: {},
        horizontal: false,
        onFormChange(meta) {
            if (this.$form) {
                this.$form.setFieldsValue({
                    [meta.name]: { value: meta.value, key: meta.key }
                });
            }
        },
        onInit(event) {
            event.target._ctype_ = 'ms-form';
            event.target._vm_ = this;
        },
        onReady(event) {
        }
    },
    soleSlot: 'items'
});