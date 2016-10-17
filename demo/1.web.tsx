import * as React from 'react'
import {observer} from 'mobx-react'
import Gaea from '../index'
import webBaseComponents from '../../gaea-web-components/index'

const defaultValue = `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=`

@observer
export default class Demo extends React.Component <any, any> {
    static title = 'Web 编辑器'
    static description = ``

    handleSave(value: string) {
        console.log(value)
    }

    render() {
        return (
            <div style={{border: '1px solid #eee'}}>
                <Gaea baseComponents={webBaseComponents}
                      defaultValue={defaultValue}
                      onSave={this.handleSave.bind(this)}/>
            </div>
        )
    }
}
                