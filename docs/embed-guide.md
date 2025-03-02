# Vaultgy Product Embedding Guide

This guide will walk you through embedding Vaultgy products on your website. Follow these simple steps to showcase your digital products directly to your customers.

## Quick Start

### Option 1: Script Embed (Easiest)

Add this code snippet where you want the product to appear:

```html
<script src="https://vaultgy.com/v1/embed.js" 
        data-merchant-id="YOUR_MERCHANT_ID" 
        data-product-id="PRODUCT_ID">
</script>
```

Replace:
- `YOUR_MERCHANT_ID` with your Vaultgy merchant ID (found in your dashboard)
- `PRODUCT_ID` with the ID of the product you want to display

### Option 2: Direct Link

Create a button or link that directs users to the Vaultgy checkout page:

```html
<a href="https://vaultgy.com/checkout/PRODUCT_ID?merchantId=YOUR_MERCHANT_ID&redirect_url=https://yoursite.com/success" 
   class="your-button-styles">
  Subscribe Now
</a>
```

## Customization Options

### Custom Colors and Styling

Customize your embed's appearance with these attributes:

```html
<script src="https://vaultgy.com/v1/embed.js" 
        data-merchant-id="YOUR_MERCHANT_ID" 
        data-product-id="PRODUCT_ID"
        data-theme="light"
        data-primary-color="#3366FF"
        data-secondary-color="#1d4ed8"
        data-size="medium"
        data-button-text="Get Started">
</script>
```

| Parameter | Description | Options |
|-----------|-------------|---------|
| `data-theme` | Color theme | `light` (default) or `dark` |
| `data-primary-color` | Primary brand color | Any hex color code (default: `#2563eb`) |
| `data-secondary-color` | Secondary accent color | Any hex color code (default: `#1d4ed8`) |
| `data-size` | Size of the embed | `small`, `medium` (default), or `large` |
| `data-button-text` | Custom text for CTA button | Any text (default: "Subscribe") |

### Size Options

The embed comes in three sizes:

- **Small**: 300px width, best for sidebars
- **Medium**: 400px width, good for most placements
- **Large**: 500px width, best for featured products

## Implementation Examples

### Example 1: Basic Product Embed

```html
<!-- Basic product embed -->
<div class="product-container">
  <h2>Premium Subscription</h2>
  <script src="https://vaultgy.com/v1/embed.js" 
          data-merchant-id="YOUR_MERCHANT_ID" 
          data-product-id="PRODUCT_ID">
  </script>
</div>
```

### Example 2: Dark Theme with Custom Colors

```html
<!-- Dark theme with custom branding -->
<div class="featured-product">
  <script src="https://vaultgy.com/v1/embed.js" 
          data-merchant-id="YOUR_MERCHANT_ID" 
          data-product-id="PRODUCT_ID"
          data-theme="dark"
          data-primary-color="#FF5500"
          data-button-text="Join Premium">
  </script>
</div>
```

### Example 3: Direct Link as a Button

```html
<!-- Styled button link -->
<a href="https://vaultgy.com/checkout/PRODUCT_ID?merchantId=YOUR_MERCHANT_ID&redirect_url=https://yoursite.com/success" 
   style="display: inline-block; background-color: #3366FF; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">
  Get Access Now
</a>
```

## Testing Your Implementation

1. **Test Mode**: Enable test mode in your Vaultgy merchant dashboard
2. **Test Card**: Use test card number `4242 4242 4242 4242` with any future expiry date and CVC
3. **Verify Display**: Check that your product displays correctly across different screen sizes
4. **Complete Purchase**: Test the entire purchase flow and verify the redirect

## Troubleshooting

### Common Issues

1. **Embed Not Displaying**
   - Verify your merchant ID and product ID are correct
   - Check that your product is published and active in your dashboard
   - Inspect browser console for any JavaScript errors

2. **Styling Issues**
   - Ensure hex color codes include the `#` prefix (e.g., `#3366FF`)
   - Try clearing your browser cache if styles aren't updating

3. **Checkout Problems**
   - Confirm your product has at least one active package
   - Verify payment methods are properly configured in your dashboard

## Best Practices

1. **Responsive Design**: Place the embed in responsive containers for the best mobile experience
2. **Performance**: Add embeds below the main content to prevent load delays
3. **Context**: Include descriptive text around the embed to explain your product's value
4. **Branding**: Match the embed's colors to your website's design

For more advanced customization options, refer to the [comprehensive embed documentation](./embed-product-guide.md) or contact Vaultgy support.
