import { ComputedRef, UnwrapRef, Ref } from "vue"
import { ShapeStyle, NodeLabelStyle, OppositeNode, NodeGlowConfig } from "@/common/configs"

export interface NodeStateDatum {
  id: string
  shape: ComputedRef<ShapeStyle>
  glow: ComputedRef<NodeGlowConfig>
  staticShape: ComputedRef<ShapeStyle>
  label: ComputedRef<NodeLabelStyle>
  labelText: ComputedRef<string>
  selected: boolean
  hovered: boolean
  draggable: ComputedRef<boolean>
  selectable: ComputedRef<boolean | number>
  zIndex: ComputedRef<number>
  oppositeNodeIds: Ref<Record<string, string>>
  oppositeNodes: ComputedRef<Record<string, OppositeNode>>
}

export type NodeState = UnwrapRef<NodeStateDatum>
export type NodeStates = Record<string, NodeState>
