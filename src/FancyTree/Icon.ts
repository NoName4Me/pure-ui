

export enum IconType {
  ZoomOut='zoomOut',
  ZoomIn = 'zoomIn',
  ZoomReset = 'zoomReset',
  Grid = 'grid',
  Download = 'download'
}

const Grid = `<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M656.896 857.6V203.776c0-16.896 13.824-30.72 30.72-30.72s30.72 13.824 30.72 30.72V857.6c0 16.896-13.824 30.72-30.72 30.72s-30.72-13.824-30.72-30.72zm-351.232 0V203.776c0-16.896 13.824-30.72 30.72-30.72s30.72 13.824 30.72 30.72V857.6c0 16.896-13.824 30.72-30.72 30.72-17.408 0-30.72-13.824-30.72-30.72zm532.992-472.064H185.344c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h653.824c16.896 0 30.72 13.824 30.72 30.72-.512 16.896-14.336 30.72-31.232 30.72zm0 351.744H185.344c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h653.824c16.896 0 30.72 13.824 30.72 30.72-.512 16.896-14.336 30.72-31.232 30.72z"/></svg>`

const ZoomIn = `<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M919.264 905.984L780.352 767.072C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 .032-45.248zM128 480c0-194.08 157.92-352 352-352s352 157.92 352 352-157.92 352-352 352-352-157.92-352-352zm497.792-32H512V336a32 32 0 0 0-64 0v112H336a32 32 0 0 0 0 64h112v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"/></svg>`

const ZoomOut = `<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M919.264 905.984L780.352 767.072C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 .032-45.248zM128 480c0-194.08 157.92-352 352-352s352 157.92 352 352-157.92 352-352 352-352-157.92-352-352zm497.792-32H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"/></svg>`


const ZoomReset = `<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M1009.3 960.3l-132-132c33.4-38.4 60.3-81.6 80.2-128.6 25.3-59.7 38.1-123.1 38.1-188.5s-12.8-128.8-38.1-188.5c-24.4-57.7-59.3-109.4-103.8-153.9S757.5 89.4 699.8 65c-59.7-25.3-123.1-38.1-188.5-38.1s-128.7 13-188.4 38.2C265.2 89.5 213.5 124.4 169 168.9S89.6 265.1 65.2 322.8c-25.2 59.7-38 123.1-38 188.5S40 640 65.2 699.8c24.4 57.7 59.3 109.4 103.8 153.9s96.2 79.4 153.9 103.8c59.7 25.3 123.1 38.1 188.5 38.1s128.8-12.8 188.5-38.1c46.2-19.5 88.5-45.8 126.4-78.3l132.1 132.1c7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5c14-14.1 14-36.9-.1-51zm-337.5-69.2C621 912.6 567 923.5 511.4 923.5S401.7 912.6 351 891.1c-49.1-20.8-93.2-50.5-131-88.4-37.9-37.9-67.6-82-88.4-131-21.5-50.8-32.4-104.8-32.4-160.4s10.9-109.6 32.4-160.4c20.8-49.1 50.5-93.2 88.4-131 37.9-37.9 82-67.6 131-88.4 50.8-21.5 104.8-32.4 160.4-32.4S621 110 671.8 131.4c49.1 20.8 93.2 50.5 131 88.4s67.6 82 88.4 131c21.5 50.8 32.4 104.8 32.4 160.4s-10.9 109.6-32.4 160.4c-20.8 49.1-50.5 93.2-88.4 131s-81.9 67.7-131 88.5zM475.4 432.2a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm0 158.2a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM367.5 332.9h-38.7c-3.8 0-7.6 1.2-10.7 3.4-13.7 9.8-52.5 36.2-80.2 51.9-2.9 1.6-4.6 4.7-4.6 8v38.5h77.2v269.7c0 5.1 4.1 9.2 9.2 9.2h47.8c5.1 0 9.2-4.1 9.2-9.2V342c0-5-4.1-9.1-9.2-9.1zm360.4 0h-38.6c-3.8 0-7.6 1.2-10.7 3.4-13.7 9.8-52.5 36.2-80.2 51.9-2.9 1.6-4.6 4.7-4.6 8v29.4c0 5.1 4.1 9.2 9.2 9.2h68v269.7c0 5.1 4.1 9.2 9.2 9.2H728c5.1 0 9.2-4.1 9.2-9.2V342.1c0-5.1-4.2-9.2-9.3-9.2z"/></svg>`

const Download = `<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M895.778 862.287c0 18.531-15.023 33.554-33.554 33.554h-700.87c-18.53 0-33.554-15.023-33.554-33.554 0-18.531 15.023-33.554 33.554-33.554h700.87c18.532 0 33.554 15.023 33.554 33.554zm-384.063-94.621c-18.531 0-33.554-15.023-33.554-33.554V161.974c0-18.532 15.023-33.554 33.554-33.554 18.531 0 33.554 15.023 33.554 33.554v572.138c0 18.53-15.023 33.554-33.554 33.554zm23.726-10.046c-13.103 13.104-34.349 13.104-47.452 0l-251.83-251.83c-13.103-13.103-13.103-34.349 0-47.452 13.104-13.104 34.35-13.104 47.453 0l251.83 251.83c13.103 13.103 13.103 34.348 0 47.452zm-47.452 0c-13.104-13.104-13.104-34.35 0-47.454l251.83-251.83c13.103-13.103 34.348-13.103 47.452 0 13.103 13.104 13.103 34.35 0 47.454L535.44 757.62c-13.104 13.104-34.349 13.104-47.452 0z"/></svg>`

export const Icon = {
  [IconType.Grid]: Grid,
  [IconType.ZoomOut]: ZoomOut,
  [IconType.ZoomIn]: ZoomIn,
  [IconType.ZoomReset]: ZoomReset,
  [IconType.Download]: Download,
}