import { createSharedComposable } from '@vueuse/core'

const _useUIState = () => {
  const route = useRoute()

  const isHeaderDialogOpen = ref(false)
  const isContentSearchModalOpen = ref(false)
  const isDashboardSidebarSlideoverOpen = ref(false)
  const isDashboardSearchModalOpen = ref(false)

  function toggleContentSearch() {
    if (isHeaderDialogOpen.value) {
      isHeaderDialogOpen.value = false

      setTimeout(() => {
        isContentSearchModalOpen.value = !isContentSearchModalOpen.value
      }, 0)

      return
    }

    isContentSearchModalOpen.value = !isContentSearchModalOpen.value
  }

  function toggleDashboardSearch() {
    if (isDashboardSidebarSlideoverOpen.value) {
      isDashboardSidebarSlideoverOpen.value = false

      setTimeout(() => {
        isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value
      }, 200)

      return
    }

    isDashboardSearchModalOpen.value = !isDashboardSearchModalOpen.value
  }

  watch(() => route.path, () => {
    isDashboardSidebarSlideoverOpen.value = false
  })

  return {
    isHeaderDialogOpen,
    isContentSearchModalOpen,
    /**
     * @deprecated Use the new {@link isDashboardSidebarSlideoverOpen} ref instead.
     */
    isDashboardSidebarSlidoverOpen: isDashboardSidebarSlideoverOpen,
    isDashboardSidebarSlideoverOpen,
    isDashboardSearchModalOpen,
    toggleContentSearch,
    toggleDashboardSearch
  }
}

export const useUIState = createSharedComposable(_useUIState)
