/* eslint no-console:0 */
/* eslint no-alert:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.less';
import './markup-options.less';

const SwitcherIcon = () => (
  <div className="custom-switcher-icon">
    <span>sw</span>
  </div>
);
const SwitcherOpenIcon = () => (
  <div className="custom-switcher-open-icon">
    <span>so</span>
  </div>
);
const CheckboxIcon = () => (
  <div className="custom-checkbox-icon">
    <span>ch</span>
  </div>
);
const CheckboxCheckedIcon = () => (
  <div className="custom-checkbox-open-icon">
    <span>cc</span>
  </div>
);
const FolderIcon = () => (
  <div className="custom-folder-icon">
    <span>fo</span>
  </div>
);
const FileIcon = () => (
  <div className="custom-file-icon">
    <span>fi</span>
  </div>
);

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h2>Customize markup for switcher, checkbox, icon, and additional content</h2>
        <Tree
          checkable
          defaultExpandAll
          switcherIcon={SwitcherIcon}
          switcherOpenIcon={SwitcherOpenIcon}
          checkboxIcon={CheckboxIcon}
          checkboxCheckedIcon={CheckboxCheckedIcon}
        >
          <TreeNode
            title="Parent"
            icon={FolderIcon}
            additionalContent={<span className="outer-content-right"></span>}
          >
            <TreeNode
              title="Child"
              icon={FileIcon}
              additionalContent={<span className="inner-content-right"></span>}
            />
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
