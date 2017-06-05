define("components/gf-demo-fast/gf-demo-fast.ts",function(e,n){"use strict";e("vendor/ane/index.ts");var t=e("components/common-curd/common-curd.ts"),i=e("services/storeService.ts");n.name="gf-demo-fast",t["default"].extend({displayName:n.name,template:'\n<div class="row">\n    <div class="col-xs-12 col-md-12">\n        <ms-dialog :widget="{$innerVm: $id + \'_dialog_main\', show: @show, onOk: @handleOk, onCancel: function () { @show = false; }}">\n            <div slot="body" ms-skip>\n                <xmp is="ms-form" :widget="{$form: @$form}">\n                    <ms-form-item :widget="{label: \'ID\'}">\n                        <ms-input :widget="{value:@record.region_id,col: \'region_id\', $rules: { required: true, message: \'地区ID不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'名称\'}">\n                        <ms-input :widget="{value:@record.region_name,col: \'region_name\', $rules: { required: true, message: \'地区名称不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'PID\'}">\n                        <ms-input :widget="{value:@record.region_parent_id,col: \'region_parent_id\', $rules: { required: true, message: \'地区PID不能为空\' }}"></ms-input>\n                    </ms-form-item>\n                    <ms-form-item :widget="{label: \'套餐\'}" :for="($index, el) in @record.suites">\n                        <ms-input :widget="{value:el.name,col: \'suites[\' + $index + \'].name\'}"></ms-input>\n                    </ms-form-item>\n                </xmp>\n            </div>\n        </ms-dialog>\n        <ms-form :widget="{$form:@$searchForm,type:\'search\',inline:true}">\n            <div class="row">\n                <div class="col-md-2">\n                    <ms-form-item :widget="{label: \'ID：\'}">\n                        <ms-input :widget="{col: \'region_id\', width: \'75%\'}"></ms-input>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-2">\n                    <ms-form-item :widget="{label: \'名称：\'}">\n                        <ms-input :widget="{col: \'region_name.firstName\', width: \'75%\'}"></ms-input>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-3">\n                    <ms-form-item :widget="{label: \'开始日期：\'}">\n                        <ms-datepicker :widget="{\n                            col:\'startDate\',\n                            placeholder:\'请选择开始日期\',\n                            width: \'70%\'\n                        }"></ms-datepicker>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-3">\n                    <ms-form-item :widget="{label: \'结束日期：\'}">\n                        <ms-datepicker :widget="{\n                            col:\'endDate\',\n                            placeholder:\'请选择结束日期\',\n                            width: \'70%\'\n                        }"></ms-datepicker>\n                    </ms-form-item>\n                </div>\n                <div class="col-md-2">\n                    <button type="button" class="btn btn-primary" :click="@search">\n                        <span class="fa fa-search"></span>搜索\n                    </button>\n                    <button type="button" class="btn btn-success pull-right" :click="actions(\'add\')">\n                        <span class="fa fa-plus">\n                        </span>新增地区\n                    </button>\n                </div>\n            </div>\n        </ms-form>\n        <ms-table :widget="{data:@list,loading:@loading,actions:@actions,pagination:@pagination,onChange:@handleTableChange}">\n            <ms-table-header :widget="{dataIndex:\'region_id\',type:\'selection\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'地区\',dataIndex:\'region_name\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'PID\',dataIndex:\'region_parent_id\'}"></ms-table-header>\n            <ms-table-header :widget="{title:\'操作\',dataIndex:\'region_id\'}">\n                <button type="button" class="btn btn-link btn-xs" :click="handle(\'edit\')"><i class="fa fa-edit"></i> 编辑</button>\n                <button type="button" class="btn btn-link btn-xs" :click="handle(\'del\')"><i class="fa fa-trash-o"></i> 删除</button>\n            </ms-table-header>\n        </ms-table>\n    </div>\n</div>\n',defaults:{$store:i.demo,pattern:/^\d+-\d+-\d+( \d+:\d+:\d+)?$/}})});