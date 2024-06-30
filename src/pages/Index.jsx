import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Index() {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 lg:gap-6 lg:p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SaaS Business</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We provide the best solutions to manage your business efficiently.
        </p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>

      <section className="w-full max-w-4xl mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up for Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default Index;