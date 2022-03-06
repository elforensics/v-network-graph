<script setup lang="ts">
import { PropType } from "vue"
import { Position } from "@/common/types"
import { EdgeState } from "@/models/edge"
import { useEdgeConfig } from "@/composables/config"
import VLine from "@/components/base/VLine.vue"
import VEdgeCurved from "./VEdgeCurved.vue"

defineProps({
  id: {
    type: String,
    required: true,
  },
  state: {
    type: Object as PropType<EdgeState>,
    required: true,
  },
  sourcePos: {
    type: Object as PropType<Position>,
    required: false,
    default: undefined,
  },
  targetPos: {
    type: Object as PropType<Position>,
    required: false,
    default: undefined,
  },
})

const config = useEdgeConfig()

defineExpose({ config })
</script>

<template>
  <v-line
    v-if="config.type == 'straight' || !state.curve"
    v-bind="state.position"
    :class="{ selectable: state.selectable, hover: state.hovered, selected: state.selected }"
    :config="state.line.stroke"
    :marker-start="state.sourceMarkerId ? `url('#${state.sourceMarkerId}')` : undefined"
    :marker-end="state.targetMarkerId ? `url('#${state.targetMarkerId}')` : undefined"
  />
  <v-edge-curved
    v-else
    :class="{ selectable: state.selectable, hover: state.hovered, selected: state.selected }"
    :state="state"
    :config="state.line.stroke"
    :marker-start="state.sourceMarkerId ? `url('#${state.sourceMarkerId}')` : undefined"
    :marker-end="state.targetMarkerId ? `url('#${state.targetMarkerId}')` : undefined"
  />
</template>

<style lang="scss" scoped>
$transition: 0.1s linear;

:where(.v-line) {
  transition: stroke $transition, stroke-width $transition;
  pointer-events: none;
}
</style>