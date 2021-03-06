import ctEvents from 'ct-events'
import { updateAndSaveEl } from '../../../../static/js/frontend/header/render-loop'
import { responsiveClassesFor } from '../../../../static/js/customizer/sync/helpers'
import { handleBackgroundOptionFor } from '../../../../static/js/customizer/sync/variables/background'
import {
	getRootSelectorFor,
	assembleSelector,
	mutateSelector,
} from '../../../../static/js/customizer/sync/helpers'

ctEvents.on(
	'ct:header:sync:collect-variable-descriptors',
	(variableDescriptors) => {
		variableDescriptors['cart'] = ({ itemId }) => ({
			cartIconSize: {
				selector: assembleSelector(getRootSelectorFor({ itemId })),
				variable: 'icon-size',
				responsive: true,
				unit: 'px',
			},

			cartDropdownTopOffset: {
				selector: assembleSelector(
					mutateSelector({
						selector: getRootSelectorFor({ itemId }),
						operation: 'suffix',
						to_add: '.ct-cart-content',
					})
				),
				variable: 'dropdownTopOffset',
				unit: 'px',
			},

			cartFontColor: [
				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-cart-content',
						})
					),
					variable: 'color',
					type: 'color:default',
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-cart-content',
						})
					),
					variable: 'linkInitialColor',
					type: 'color:link_initial',
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'suffix',
							to_add: '.ct-cart-content',
						})
					),
					variable: 'linkHoverColor',
					type: 'color:link_hover',
				},
			],

			cartTotalFontColor: {
				selector: assembleSelector(
					mutateSelector({
						selector: getRootSelectorFor({ itemId }),
						operation: 'suffix',
						to_add: '.ct-cart-content .total',
					})
				),
				variable: 'color',
				type: 'color:default',
			},

			cartDropDownBackground: {
				selector: assembleSelector(
					mutateSelector({
						selector: getRootSelectorFor({ itemId }),
						operation: 'suffix',
						to_add: '.ct-cart-content',
					})
				),
				variable: 'backgroundColor',
				type: 'color:default',
			},

			headerCartMargin: {
				selector: assembleSelector(getRootSelectorFor({ itemId })),
				type: 'spacing',
				variable: 'margin',
				responsive: true,
				important: true,
			},

			// default state
			cartHeaderIconColor: [
				{
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					variable: 'icon-color',
					type: 'color:default',
					responsive: true,
				},

				{
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					variable: 'icon-hover-color',
					type: 'color:hover',
					responsive: true,
				},
			],

			cartBadgeColor: [
				{
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					variable: 'cartBadgeBackground',
					type: 'color:background',
					responsive: true,
				},

				{
					selector: assembleSelector(getRootSelectorFor({ itemId })),
					variable: 'cartBadgeText',
					type: 'color:text',
					responsive: true,
				},
			],

			// transparent state
			transparentCartHeaderIconColor: [
				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-transparent-row="yes"]',
						})
					),
					variable: 'icon-color',
					type: 'color:default',
					responsive: true,
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-transparent-row="yes"]',
						})
					),

					variable: 'icon-hover-color',
					type: 'color:hover',
					responsive: true,
				},
			],

			transparentCartBadgeColor: [
				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-transparent-row="yes"]',
						})
					),

					variable: 'cartBadgeBackground',
					type: 'color:background',
					responsive: true,
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-transparent-row="yes"]',
						})
					),

					variable: 'cartBadgeText',
					type: 'color:text',
					responsive: true,
				},
			],

			// sticky state
			stickyCartHeaderIconColor: [
				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-sticky*="yes"]',
						})
					),
					variable: 'icon-color',
					type: 'color:default',
					responsive: true,
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-sticky*="yes"]',
						})
					),
					variable: 'icon-hover-color',
					type: 'color:hover',
					responsive: true,
				},
			],

			stickyCartBadgeColor: [
				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-sticky*="yes"]',
						})
					),
					variable: 'cartBadgeBackground',
					type: 'color:background',
					responsive: true,
				},

				{
					selector: assembleSelector(
						mutateSelector({
							selector: getRootSelectorFor({ itemId }),
							operation: 'between',
							to_add: '[data-sticky*="yes"]',
						})
					),
					variable: 'cartBadgeText',
					type: 'color:text',
					responsive: true,
				},
			],

			// panel
			cart_panel_width: {
				selector: '#woo-cart-panel',
				variable: 'side-panel-width',
				responsive: true,
				unit: '',
			},

			cart_panel_heading_font_color: {
				selector: '#woo-cart-panel .ct-panel-actions',
				variable: 'headingColor',
				type: 'color:default',
				responsive: true,
			},

			cart_panel_font_color: [
				{
					selector:
						'#woo-cart-panel .cart_list, #woo-cart-panel [class*="empty-message"]',
					variable: 'color',
					type: 'color:default',
					responsive: true,
				},

				{
					selector: '#woo-cart-panel .cart_list',
					variable: 'linkInitialColor',
					type: 'color:link_initial',
					responsive: true,
				},

				{
					selector: '#woo-cart-panel .cart_list',
					variable: 'linkHoverColor',
					type: 'color:link_hover',
					responsive: true,
				},
			],

			cart_panel_total_font_color: {
				selector: '#woo-cart-panel .total',
				variable: 'color',
				type: 'color:default',
				responsive: true,
			},

			cart_panel_shadow: {
				selector: '#woo-cart-panel',
				type: 'box-shadow',
				variable: 'box-shadow',
				responsive: true,
			},

			...handleBackgroundOptionFor({
				id: 'cart_panel_background',
				selector: '#woo-cart-panel > section',
				responsive: true,
			}),

			...handleBackgroundOptionFor({
				id: 'cart_panel_backdrop',
				selector: '#woo-cart-panel',
				responsive: true,
			}),

			cart_panel_close_button_color: [
				{
					selector: '#woo-cart-panel .close-button',
					variable: 'closeButtonColor',
					type: 'color:default',
				},

				{
					selector: '#woo-cart-panel .close-button',
					variable: 'closeButtonHoverColor',
					type: 'color:hover',
				},
			],

			cart_panel_close_button_shape_color: [
				{
					selector: '#woo-cart-panel .close-button',
					variable: 'closeButtonBackground',
					type: 'color:default',
				},

				{
					selector: '#woo-cart-panel .close-button',
					variable: 'closeButtonHoverBackground',
					type: 'color:hover',
				},
			],
		})
	}
)

ctEvents.on('ct:header:sync:item:cart', ({ optionId, optionValue, values }) => {
	const selector = '[data-id="cart"]'

	if (optionId === 'header_cart_visibility') {
		updateAndSaveEl(selector, (el) =>
			responsiveClassesFor({ ...optionValue, desktop: true }, el)
		)
	}

	if (optionId === 'has_cart_subtotal') {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-cart-total')].map((el) => el.remove())

			if (optionValue === 'yes') {
				const span = document.createElement('span')
				span.innerHTML = el.dataset.subtotal

				span.classList.add('ct-cart-total')

				el.querySelector('a').prepend(span)
			}
		})
	}

	if (optionId === 'cart_subtotal_visibility') {
		updateAndSaveEl(selector, (el) => {
			;[...el.querySelectorAll('.ct-cart-total')].map((el) => {
				responsiveClassesFor(optionValue, el)
			})
		})
	}

	if (optionId === 'has_cart_badge') {
		updateAndSaveEl(selector, (el) => {
			el.firstElementChild.removeAttribute('data-skip-badge')
			if (optionValue === 'yes') return
			el.firstElementChild.dataset.skipBadge = ''
		})
	}

	if (optionId === 'auto_open_cart') {
		updateAndSaveEl(selector, (el) => {
			el.querySelector('a').removeAttribute('data-auto-open')

			let components = []

			if (optionValue.archive) {
				components.push('archive')
			}

			if (optionValue.product) {
				components.push('product')
			}

			if (components.length > 0) {
				el.querySelector('a').dataset.autoOpen = components.join(':')
			}
		})
	}
})
