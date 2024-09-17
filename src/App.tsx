/* Create a category list tabs */
// https://dummyjson.com/products/category-list

/* CLiking on each tab should render items from that category with pagination (limit is 5) Grid View on Desktop and List view on Mobile */
// https://dummyjson.com/products/category/smartphones?limit=5 */
//Pagination: // https://dummyjson.com/products/category/smartphones?limit=5&skip=5 */

/* Good to have: Clicking on each item tile should open a modal with all the images as carousel */

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function App() {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
      <div className='mx-auto grid w-full max-w-6xl gap-2'>
        <h1 className='text-3xl font-semibold'>Categories</h1>
      </div>
      <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
        <nav
          className='grid gap-4 text-sm text-muted-foreground'
          x-chunk='dashboard-04-chunk-0'
        >
          <a href='#' className='font-semibold text-primary'>
            General
          </a>
          <a href='#'>Security</a>
          <a href='#'>Integrations</a>
          <a href='#'>Support</a>
          <a href='#'>Organizations</a>
          <a href='#'>Advanced</a>
        </nav>
        <div className='grid gap-6'>
          <Card x-chunk='dashboard-04-chunk-1'>
            <CardHeader>
              <CardTitle>Store Name</CardTitle>
              <CardDescription>
                Used to identify your store in the marketplace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder='Store Name' />
              </form>
            </CardContent>
            <CardFooter className='border-t px-6 py-4'>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
