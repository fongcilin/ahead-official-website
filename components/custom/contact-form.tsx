'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { toast } from 'sonner';
import { Icons } from '@/components/icons';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/utils';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 character' })
    .max(50, { message: 'Name must be at most 50 characters' })
    .nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  phone: z.string().nonempty({ message: 'Phone number is required' }),
  organization: z.string().nonempty({ message: 'Organization is required' }),
  position: z.string().nonempty({ message: 'Position is required' }),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {
  namePrefix: string;
}

export const ContactForm = ({ namePrefix }: ContactFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      position: '',
      message: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const submit = async (values: FormData) => {
    const name = `${namePrefix} ${values.name}`;
    const msg = `organization: ${values.organization}
    position: ${values.position}
    message: ${values.message}`;
    const body = {
      name,
      email: values.email,
      phone: values.phone,
      message: msg,
    };

    setIsLoading(true);

    try {
      const res = await fetch(
        'https://dd2cy55378.execute-api.us-east-2.amazonaws.com/dev/api/contact',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        },
      );
      const data: { result: string } = await res.json();
      if (data.result === 'success') {
        trackEvent(`send_contact_form ${namePrefix}`);
        toast.success('Sent successfully');
      } else {
        toast.error('Failed to send');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to send');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-6"
        onSubmit={form.handleSubmit(submit)}
      >
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your business email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Office Phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your office phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Organization field */}
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your organization"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Position field */}
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Please enter your position" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        {!isLoading && <Button type="submit">Submit</Button>}

        {/* loading */}
        {isLoading && (
          <div className="flex justify-center">
            <Icons.Spinner className="text-ahead-red-800 h-12 w-12 animate-spin" />
          </div>
        )}
      </form>
    </Form>
  );
};
