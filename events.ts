interface checkoutAttempted {
  'event': 'checkout_attempted',
  'unavailable_items': string,
  'available_items': string,
  'ga_unique_id': string,
}
interface continueToCheckoutPressed {
  'event': 'continue_to_checkout_pressed',
  'ga_unique_id': string,
}
interface browseMoreProductsPressed {
  'event': 'browse_more_products_pressed',
  'ga_unique_id': string,
}
interface popupClosed {
  'event': 'popup_closed',
  'ga_unique_id': string,
}
interface purchaseCompleted {
  'event': 'purchase_completed',
  'purchased_items': string,
  'ga_unique_id': string,
}