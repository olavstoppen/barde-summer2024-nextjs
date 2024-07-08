'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: 'Username must be at least 2 characters.',
        })
        .max(30, {
            message: 'Username must not be longer than 30 characters.',
        }),
    email: z
        .string({
            required_error: 'Please select a project to display.',
        })
        .email(),
    project: z.string({
        required_error: 'Please select a project to display.',
    }),
    message: z.string().max(160).min(4),
});

type FormValues = z.infer<typeof FormSchema>;

export function RequestForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        mode: 'onChange',
    });

    function onSubmit(data: FormValues) {
        toast({
            title: 'Du har sendt inn følgende behov:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <FormProvider {...form}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brukernavn</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ola Nordmann" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Olanordmann@mail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="project"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prosjekt</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a project" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="project1">Project 1</SelectItem>
                                        <SelectItem value="project2">Prosjekt 2</SelectItem>
                                        <SelectItem value="project3">Prosjekt 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Melding</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Skriv noen ord om behovet"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>F.eks maskinnummer</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Send inn behov</Button>
                </form>
            </Form>
        </FormProvider>
    );
}
