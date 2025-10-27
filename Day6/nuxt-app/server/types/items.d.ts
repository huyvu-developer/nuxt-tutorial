import type { Item } from '~/types/item' // nếu bạn có sẵn type Item, nếu chưa thì tạo bên dưới

declare module 'h3' {
  interface H3EventContext {
    items: Item[]; // Thêm dòng này, để TS biết context có field items
  }
}
