import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      {/* Features Section */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Feature 1</AccordionTrigger>
            <AccordionContent>
              Description of Feature 1.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Feature 2</AccordionTrigger>
            <AccordionContent>
              Description of Feature 2.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Feature 3</AccordionTrigger>
            <AccordionContent>
              Description of Feature 3.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/150" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-muted-foreground">"This SaaS product is amazing!"</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/150" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-muted-foreground">"I can't imagine my business without it."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <p className="text-muted-foreground">Basic plan description and pricing.</p>
          </TabsContent>
          <TabsContent value="premium">
            <p className="text-muted-foreground">Premium plan description and pricing.</p>
          </TabsContent>
          <TabsContent value="enterprise">
            <p className="text-muted-foreground">Enterprise plan description and pricing.</p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Join us today and take your business to the next level.
        </p>
        <Button variant="primary" size="lg">Sign Up Now</Button>
      </section>
    </main>
  );
}

export default Index;