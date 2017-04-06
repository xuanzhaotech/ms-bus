import * as avalon from 'avalon2';
import controlComponent from '../ms-form/ms-control';
import { emitToFormItem } from '../ms-form/utils';
import { findParentComponent } from '../../vendor/avx-component/avx-util';
import './ms-checkbox';

controlComponent.extend({
    displayName: 'ms-checkbox-group',
    template: __inline('./ms-checkbox-group.html'),
    defaults: {
        value: [],
        disabled: false,
        options: [],
        toggleOption(option) {
            const optionIndex = this.value.indexOf(option.value);
            if (optionIndex === -1 ) {
                this.value.push(option.value);
            } else {
                this.value.remove(option.value);
            }
            this.onChange({
                target: { value: this.value.$model },
                type: 'checkbox-group'
            });
        },
        onInit(event) {
            emitToFormItem(this);
        },
        onReady(event) {
            //vm.elHiddenInput = $(el).find('input:hidden');
        },
        onDispose(event) {
        }
    }
});