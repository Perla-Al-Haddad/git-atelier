export interface IHierarchyNode {
    text: string,
    children: Array<IHierarchyNode>,
    level: Number,
    id: string
}