import * as avalon from 'avalon2';
import { findParentComponent } from '../../vendor/avx-component/avx-util';

/**
 * 表单项组件
 * @prop label 表单项标签
 * 
 * @example
 * ``` html
 * <ms-form-item :widget="{label: '标题'}">
        <ms-input :widget="{value: @title, col: 'title'}"></ms-input>
    </ms-form-item>
 * ```
 */
avalon.component('ms-form-item', {
    template: __inline('./ms-form-item.html'),
    defaults: {
        $formVm: null,
        label: '',
        control: '',
        inline: false,
        dirty: false,
        reasons: [],
        hasRules: false,
        onFieldChange(descriptor) {
            if (!descriptor.rules) return ;
            this.hasRules = true;
            this.$formVm.$form.addFields({
                [descriptor.name]: { rules: descriptor.rules }
            });
            this.$formVm.$form.on('error', descriptor.name, (reasons) => {
                this.reasons = reasons;
            });
        },
        onFormChange(meta) {
            this.dirty = true;
            this.$formVm.onFormChange(meta);
        },
        onInit(event) {
            event.target._ctype_ = 'ms-form-item';
            event.target._vm_ = this;
            this.$formVm = findParentComponent(this, 'ms-form');
        }
    },
    soleSlot: 'control'
});