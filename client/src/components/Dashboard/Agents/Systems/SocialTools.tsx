import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import ImageIcon from "@/assets/icons/image.svg?react";
import LinkedinIcon from "@/assets/icons/linkedin.svg?react";
import PostIcon from "@/assets/icons/post.svg?react";
import PostSocialIcon from "@/assets/icons/post-social.svg?react";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const imageFormSchema = z.object({
 imageDescription: z
  .string()
  .min(1, "Image description is required")
  .min(10, "Image description must be at least 10 characters"),
});

const postFormSchema = z.object({
 postTopic: z.string().min(1, "Post topic is required").min(10, "Post topic must be at least 10 characters"),
});

const composeFormSchema = z.object({
 postContent: z
  .string()
  .min(1, "Post content is required")
  .min(10, "Post content must be at least 10 characters"),
});

type ImageFormData = z.infer<typeof imageFormSchema>;
type PostFormData = z.infer<typeof postFormSchema>;
type ComposeFormData = z.infer<typeof composeFormSchema>;

function AgentSocialTools() {
 const imageForm = useForm<ImageFormData>({
  resolver: zodResolver(imageFormSchema),
  defaultValues: {
   imageDescription: "",
  },
 });

 const postForm = useForm<PostFormData>({
  resolver: zodResolver(postFormSchema),
  defaultValues: {
   postTopic: "",
  },
 });

 const composeForm = useForm<ComposeFormData>({
  resolver: zodResolver(composeFormSchema),
  defaultValues: {
   postContent: "",
  },
 });

 const onImageSubmit = (data: ImageFormData) => {
  console.log("Image created:", data);
 };

 const onPostSubmit = (data: PostFormData) => {
  console.log("Post generated:", data);
 };

 const onComposeSubmit = (data: ComposeFormData) => {
  console.log("Post submitted:", data);
 };

 return (
  <>
   <section className="mb-24 mt-4 flex flex-col">
    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Create Social Media Image</h2>
      <p className="text-[#A5ABB0]">Fill in the details below to create a image.</p>
     </header>

     <main>
      <Form {...imageForm}>
       <form onSubmit={imageForm.handleSubmit(onImageSubmit)}>
        <div className="mb-10">
         <FormField
          control={imageForm.control}
          name="imageDescription"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Image Description</FormLabel>
            <FormControl>
             <Input
              placeholder="e.g A Vibrant abstract shape for the product launch"
              className="h-12 bg-[#F8F8F8]"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <Button
         type="submit"
         className="h-auto bg-slate-900 px-4 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        >
         <ImageIcon className="!size-6" />
         Create Image
        </Button>
       </form>
      </Form>
     </main>
    </div>

    <Separator className="my-6 h-[1px] bg-muted-light" />

    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Generate Social Media Post</h2>
      <p className="text-[#A5ABB0]">Fill in the details below to create a social media post.</p>
     </header>

     <main>
      <Form {...postForm}>
       <form onSubmit={postForm.handleSubmit(onPostSubmit)}>
        <div className="mb-10">
         <FormField
          control={postForm.control}
          name="postTopic"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Post Topic/ Idea</FormLabel>
            <FormControl>
             <Input
              placeholder="e.g A product launch announcement post"
              className="h-12 bg-[#F8F8F8]"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <Button
         type="submit"
         className="h-auto bg-slate-900 px-4 py-3 text-base text-slate-50 hover:bg-slate-900/90"
        >
         <PostIcon className="!size-6" />
         Generate Post
        </Button>
       </form>
      </Form>
     </main>
    </div>

    <Separator className="my-6 h-[1px] bg-muted-light" />

    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Connect Social Platforms (Simulated)</h2>
      <p className="text-[#A5ABB0]">Manage your connections for posting.</p>
     </header>

     <main className="flex gap-5">
      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <FacebookIcon />
        Facebook
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>

      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <XIcon />
        Twitter/X
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>

      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <LinkedinIcon />
        LinkedIn
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>

      <Card className="grow bg-[#F8F8F8] px-6 py-5">
       <CardContent className="mb-10 flex gap-2 font-normal tracking-[-0.04em] h4">
        <InstagramIcon />
        Instagram
       </CardContent>
       <CardFooter>
        <Button variant="outline" className="mt-auto w-full bg-[#F8F8F8] font-normal">
         Connect
        </Button>
       </CardFooter>
      </Card>
     </main>
    </div>

    <Separator className="my-6 h-[1px] bg-muted-light" />

    <div className="flex flex-col rounded-md border border-muted-light bg-white p-9">
     <header className="mb-10">
      <h2 className="mb-1 font-normal tracking-[-0.04em] h3">Compose & Post (Simulated)</h2>
      <p className="text-[#A5ABB0]">Combine your generated text and images and post instantly</p>
     </header>

     <main>
      <Form {...composeForm}>
       <form onSubmit={composeForm.handleSubmit(onComposeSubmit)}>
        <div className="mb-6">
         <FormField
          control={composeForm.control}
          name="postContent"
          render={({ field }) => (
           <FormItem>
            <FormLabel className="mb-2 block font-normal text-gray-900">Post Content</FormLabel>
            <FormControl>
             <Textarea
              placeholder="Write your social media post here..."
              className="min-h-32 bg-[#F8F8F8]"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>

        <div className="mb-10">
         <p className="mb-2 font-normal text-gray-900">Post to (select connected platforms):</p>
         <p className="text-sm text-red-500">No social platforms connected. Connect them above to post</p>
        </div>

        <Button
         type="submit"
         disabled
         className="h-auto cursor-not-allowed bg-gray-400 px-4 py-3 text-base text-white"
        >
         <PostSocialIcon className="!size-6" />
         Post to Selected Platforms
        </Button>
       </form>
      </Form>
     </main>
    </div>
   </section>
  </>
 );
}

export default AgentSocialTools;
