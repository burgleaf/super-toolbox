import { BaseProvider, TreeNode } from './BaseProvider';
import { ProviderResult, TreeItem } from 'vscode';

export default class TimeToolProvider extends BaseProvider {
    rootElements: TreeNode[];
    
    refreshAll() {
        console.log("刷新菜单");
        this.rootElements.forEach((root) => {
            // 只刷新已经加载过的节点数据
            if (root.children) {
                this.refreshRoot(root);
            }
        });
    }

    getTreeItem(element: TreeNode): TreeItem | Thenable<TreeItem> {
        throw new Error('getTreeItem Method not implemented.');
    }


    getChildren(element?: TreeNode): ProviderResult<TreeNode[]> {
        throw new Error('getChildren Method not implemented.');
    }


    

    constructor() {
        super();
        const createRoot = (label: string, tag: string) => {
            const root = new TreeNode(label, true);
            root.nodeName = tag;
            return root;
        };
        this.rootElements = [
            createRoot('技术', 'tech'),
            createRoot('创意', 'creative'),
            createRoot('好玩', 'play'),
            createRoot('Apple', 'apple'),
            createRoot('酷工作', 'jobs'),
            createRoot('交易', 'deals'),
            createRoot('城市', 'city'),
            createRoot('问与答', 'qna'),
            createRoot('最热', 'hot'),
            createRoot('全部', 'all'),
            createRoot('R2', 'r2'),
            createRoot('节点', 'nodes')
        ];
    }

  

    /**
    * 刷新指定节点
    */
    async refreshRoot(root: TreeNode) {
        delete root.children;
        this._onDidChangeTreeData.fire(root);
    }


}
